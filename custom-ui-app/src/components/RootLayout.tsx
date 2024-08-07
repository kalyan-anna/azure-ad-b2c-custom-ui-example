import { PageContainer } from './PageContainer';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <main className='bg-slate-300'>
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </main>
  );
}
