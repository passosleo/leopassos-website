import logo from '../../assets/logo.svg';
import { Brand } from './components/brand';
import { NavBar } from './components/nav-bar';

export function Header() {
  return (
    <header className="flex items-center justify-center fixed h-20 top-0 left-0 right-0 bg-black z-50">
      <div className="flex items-center justify-between max-w-7xl w-full px-4">
        <Brand logo={logo as unknown as string} className="w-52" />
        <NavBar
          links={[
            {
              label: 'about',
              href: '#about',
            },
            {
              label: 'experience',
              href: '#experience',
            },
            {
              label: 'skills',
              href: '#skills',
            },
            {
              label: 'contact',
              href: '#contact',
            },
            {
              label: 'resume',
              href: '#resume',
            },
          ]}
        />
      </div>
    </header>
  );
}
