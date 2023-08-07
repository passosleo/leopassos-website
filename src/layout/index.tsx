import { Header } from './header';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center max-w-7xl mx-auto px-6 mt-20">{children}</main>
    </>
  );
}
