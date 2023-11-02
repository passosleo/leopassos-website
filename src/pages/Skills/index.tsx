import CodeIcon from '/code_icon.svg';
import ToolIcon from '/tool_icon.svg';
import FrameworkIcon from '/framework_icon.svg';
import { SkillCard } from './components/SkillCard';
import { CustomSection } from '../../components/CustomSection';
import { useLocaleContext } from '../../locale/LocaleContext';
import { CustomBackground } from '../../components/CustomBackground';

export function Skills() {
  const { locale } = useLocaleContext();
  return (
    <CustomSection
      id="skills"
      className="flex-row flex-wrap justify-center items-center gap-10"
    >
      <CustomBackground variant="object" position="right" />

      <SkillCard
        icon={CodeIcon}
        title={locale['skills']['title-1']}
        links={[
          {
            label: 'JavaScript',
            href: 'https://developer.mozilla.org/docs/Web/JavaScript',
          },
          { label: 'TypeScript', href: 'https://www.typescriptlang.org/' },
          { label: 'Node.js', href: 'https://nodejs.org/en' },
          {
            label: 'C#',
            href: 'https://dotnet.microsoft.com/en-us/languages/csharp',
          },
          {
            label: 'HTML',
            href: 'https://developer.mozilla.org/docs/Web/HTML',
          },
          { label: 'CSS', href: 'https://developer.mozilla.org/docs/Web/CSS' },
          {
            label: 'SQL',
            href: 'https://www.w3schools.com/sql/sql_intro.asp',
          },
        ]}
      />

      <SkillCard
        icon={FrameworkIcon}
        title={locale['skills']['title-2']}
        links={[
          { label: 'React', href: 'https://react.dev/' },
          { label: 'NextJS', href: 'https://nextjs.org/' },
          { label: 'Express', href: 'https://expressjs.com/' },
          { label: 'EggJS', href: 'https://www.eggjs.org/' },
          { label: 'Nest', href: 'https://nestjs.com/' },
          { label: '.NET', href: 'https://dotnet.microsoft.com/' },
          { label: 'React Native', href: 'https://reactnative.dev/' },
        ]}
      />

      <SkillCard
        icon={ToolIcon}
        title={locale['skills']['title-3']}
        links={[
          { label: 'Git', href: 'https://git-scm.com/' },
          { label: 'Keycloak', href: 'https://www.keycloak.org/' },
          { label: 'Firebase', href: 'https://firebase.google.com/' },
          { label: 'Docker', href: 'https://www.docker.com/' },
          { label: 'Portainer', href: 'https://www.portainer.io/' },
          { label: 'NGINX', href: 'https://www.nginx.com/' },
        ]}
      />
    </CustomSection>
  );
}
