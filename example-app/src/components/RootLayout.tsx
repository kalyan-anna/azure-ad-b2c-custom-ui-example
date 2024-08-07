import { ThemeProvider } from 'next-themes';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Head from 'next/head';
import { PageContainer } from './PageContainer';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginRedirect().catch((e) => {
      console.error(`loginRedirect failed: ${e}`);
    });
  };

  const handleLogout = () => {
    instance.logoutRedirect({ postLogoutRedirectUri: '/signout' }).catch((e) => {
      console.error(`logoutRedirect failed: ${e}`);
    });
  };

  return (
    <main className='bg-slate-300'>
      <ThemeProvider attribute='class'>
        <Head>
          <title>Authly</title>
        </Head>
        <Navbar isAuthenticated={isAuthenticated} onSignInClick={handleLogin} onSignOutClick={handleLogout} />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </ThemeProvider>
    </main>
  );
}
