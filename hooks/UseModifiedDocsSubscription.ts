// useModifiedDocsSubscription.ts
import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export function useModifiedDocsSubscription(
  userId: string | undefined,
  onNewFile: (payload: { filename: string; signedUrl: string }) => void
) {
  useEffect(() => {
    if (!userId) {
      console.log('🔴 useModifiedDocsSubscription: No userId provided');
      return;
    }

    console.log('🟡 useModifiedDocsSubscription: Setting up subscription for userId:', userId);

    const supabase = createClient();
    let isSubscriptionActive = true; // Track if subscription is still active

    const channel = supabase
      .channel('modified-docs')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'modified_documents',
          filter: `user_id=eq.${userId}`,
        },
        async (payload) => {
          console.log('🟢 New modified-documents row detected:', payload);
          
          // Check if subscription is still active before proceeding
          if (!isSubscriptionActive) {
            console.log('⚠️ Subscription no longer active, skipping callback');
            return;
          }

          const { filename, storage_path } = payload.new as {
            filename: string;
            storage_path: string;
          };

          console.log('📄 File details:', { filename, storage_path });

          try {
            // Generate signed URL from modified-files bucket
            const { data, error } = await supabase.storage
              .from('modified-files')
              .createSignedUrl(storage_path, 60 * 60);

            console.log('🔗 Signed URL generation:', { data, error });

            // Double-check subscription is still active after async operation
            if (!isSubscriptionActive) {
              console.log('⚠️ Subscription closed during async operation, skipping callback');
              return;
            }

            if (!error && data?.signedUrl) {
              console.log('✅ Calling onNewFile callback with:', {
                filename,
                signedUrl: data.signedUrl,
              });
              onNewFile({ filename, signedUrl: data.signedUrl });
            } else {
              console.error('❌ Failed to generate signed URL:', error);
            }
          } catch (err) {
            console.error('💥 Error in subscription callback:', err);
          }
        }
      )
      .subscribe();

    console.log('🔵 Subscription channel created and subscribed');

    return () => {
      console.log('🟠 Cleaning up subscription');
      isSubscriptionActive = false; // Mark subscription as inactive
      supabase.removeChannel(channel);
    };
  }, [userId, onNewFile]);
}
