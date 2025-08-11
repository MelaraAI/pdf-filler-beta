'use client';

import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, session, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // ...removed debug log...
    if (!isLoading && !session && !user) {
  // ...removed debug log...
      // Not authenticated - redirect to home/login
      router.push('/');
    } else if (session && user) {
  // ...removed debug log...
    }
  }, [isLoading, session, user, router]);

  // Show loading while checking auth
  if (isLoading) {
  // ...removed debug log...
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render the protected content
  if (!session || !user) {
  // ...removed debug log...
    return null;
  }

  // User is authenticated, render the protected content
  // ...removed debug log...
  return <>{children}</>;
}
