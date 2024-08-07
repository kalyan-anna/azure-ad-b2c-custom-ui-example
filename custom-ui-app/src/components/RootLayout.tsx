import { PageContainer } from './PageContainer';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <main className='bg-slate-300 flex flex-col h-screen'>
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </main>
  );
}
