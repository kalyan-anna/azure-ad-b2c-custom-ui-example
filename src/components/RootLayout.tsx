import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Head from 'next/head';
import { PageContainer } from './PageContainer';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';

const inter = Inter({ subsets: ['latin'] });

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance
      .loginRedirect({
        scopes: [
          'https://examplecustomuiauthorg.onmicrosoft.com/9df3026b-7479-45b9-a626-b327220a3722/task.read https://examplecustomuiauthorg.onmicrosoft.com/9df3026b-7479-45b9-a626-b327220a3722/tasks.write offline_access openid',
        ],
      })
      .catch((e) => {
        console.error(`loginRedirect failed: ${e}`);
      });
  };

  const handleLogout = () => {
    instance.logoutRedirect({ postLogoutRedirectUri: '/signout' }).catch((e) => {
      console.error(`logoutRedirect failed: ${e}`);
    });
  };

  return (
    <main>
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
