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
    console.log("[PROTECTED ROUTE DEBUG] Auth state check:", {
      isLoading,
      hasSession: !!session,
      hasUser: !!user,
      userEmail: user?.email || "No user"
    });
    
    if (!isLoading && !session && !user) {
      console.log("[PROTECTED ROUTE DEBUG] Not authenticated - redirecting to home");
      // Not authenticated - redirect to home/login
      router.push('/');
    } else if (session && user) {
      console.log("[PROTECTED ROUTE DEBUG] User authenticated - allowing access to protected route");
    }
  }, [isLoading, session, user, router]);

  // Show loading while checking auth
  if (isLoading) {
    console.log("[PROTECTED ROUTE DEBUG] Still loading auth state...");
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
    console.log("[PROTECTED ROUTE DEBUG] No session or user - blocking access to protected content");
    return null;
  }

  // User is authenticated, render the protected content
  console.log("[PROTECTED ROUTE DEBUG] User authenticated - rendering protected content");
  return <>{children}</>;
}
