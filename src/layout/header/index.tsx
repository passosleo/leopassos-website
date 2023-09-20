import logo from '/logo.svg';
import { Brand } from './components/Brand';
import { NavBar } from './components/NavBar';
import { logEventAnalytics } from '../../firebase';

export function Header() {
  return (
    <header className="flex items-center justify-center fixed h-16 top-0 left-0 right-0 bg-black z-50">
      <div className="flex items-center justify-between gap-3 max-w-7xl w-full px-6">
        <Brand logo={logo} className="w-52" />
        <NavBar
          links={[
            {
              label: 'about',
              href: '#about',
              onClick: () => logEventAnalytics('click_about_section'),
            },
            {
              label: 'experience',
              href: '#experience',
              onClick: () => logEventAnalytics('click_experience_section'),
            },
            {
              label: 'skills',
              href: '#skills',
              onClick: () => logEventAnalytics('click_skills_section'),
            },
            {
              label: 'contact',
              href: '#contact',
              onClick: () => logEventAnalytics('click_contact_section'),
            },
            {
              label: 'resume',
              href: '#resume',
              onClick: () => logEventAnalytics('click_resume'),
            },
          ]}
        />
      </div>
    </header>
  );
}
