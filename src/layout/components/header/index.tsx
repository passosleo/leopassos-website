import { useState } from 'react';
import { CustomLink } from '../../../components/custom-link';
import logo from '../../../assets/logo.svg';

export function Header() {
  const [section, setSection] = useState('about');

  const sections = [
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
  ];

  return (
    <header className="flex items-center justify-around p-4">
      <div className="cursor-pointer">
        <img src={logo as unknown as string} alt="logo" className="w-48" />
      </div>
      <div>
        <ul className="flex gap-20 items-center justify-end">
          {sections.map(({ label, href }) => (
            <li>
              <CustomLink
                href={href}
                onClick={() => setSection(label)}
                className={`hover:text-white text-lg ${section === label ? 'border-b-2 border-yellow' : ''}`}
              >
                {label}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
