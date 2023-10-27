import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center max-w-7xl mx-auto px-6 mt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
