import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Head from 'next/head';
import { PageContainer } from './PageContainer';

const inter = Inter({ subsets: ['latin'] });

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <ThemeProvider attribute='class'>
        <Head>
          <title>Authly</title>
        </Head>
        <Navbar />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </ThemeProvider>
    </main>
  );
}
