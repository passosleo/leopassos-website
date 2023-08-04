import { Header } from './components/header';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
