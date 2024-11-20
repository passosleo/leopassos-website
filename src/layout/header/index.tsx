import logo from '/logo.svg';
import { Brand } from './components/Brand';
import { NavBar } from './components/NavBar';
import { logEventAnalytics } from '../../firebase';
import { useLocaleContext } from '../../locale/LocaleContext';

export function Header() {
  const { locale } = useLocaleContext();
  return (
    <header className="flex items-center justify-center fixed h-16 top-0 left-0 right-0 bg-black z-50">
      <div className="flex items-center justify-between gap-3 max-w-7xl w-full px-6">
        <Brand logo={logo} className="w-52" />
        <NavBar
          links={[
            {
              label: locale['header']['nav-1'],
              href: '#about',
              onClick: () => logEventAnalytics('[header]click_about_section'),
            },
            // {
            //   label: locale['header']['nav-2'],
            //   href: '#experience',
            //   onClick: () =>
            //     logEventAnalytics('[header]click_experience_section'),
            // },
            // {
            //   label: locale['header']['nav-3'],
            //   href: '#skills',
            //   onClick: () => logEventAnalytics('[header]click_skills_section'),
            // },
            {
              label: locale['header']['nav-4'],
              href: '#contact',
              onClick: () => logEventAnalytics('[header]click_contact_section'),
            },
            {
              label: locale['header']['nav-5'],
              href: 'https://github.com/passosleo/resume/blob/main/Curriculo_Leonardo_Passos.pdf',
              target: '_blank',
              onClick: () => logEventAnalytics('[header]click_resume'),
              className:
                'border-2 border-yellow text-yellow py-0 px-2 font-semibold rounded-md select-none hover:bg-yellow hover:text-black transition-colors duration-300',
            },
          ]}
        />
      </div>
    </header>
  );
}
