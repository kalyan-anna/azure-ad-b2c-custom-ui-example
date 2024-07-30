import { Spinner } from '@/components/Spinner';
import { useIsAuthenticated } from '@azure/msal-react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export const AuthorizePage = () => {
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/account');
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <Spinner />
    </div>
  );
};

export default AuthorizePage;
