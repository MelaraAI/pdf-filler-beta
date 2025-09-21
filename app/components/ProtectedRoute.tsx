'use client';

import { useAuth } from '@/lib/auth/AuthContext';
import { useColorTheme } from '@/lib/use-color-theme';
import SaucyLoader from '@/app/components/SaucyLoader';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, session, isLoading } = useAuth();
  const { colorTheme } = useColorTheme();
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
      <SaucyLoader 
        currentTheme={colorTheme}
        isLoading={isLoading}
        size="md"
        message="Checking authentication"
      />
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
