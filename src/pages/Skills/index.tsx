import CodeIcon from '/code_icon.svg';
import ToolIcon from '/tool_icon.svg';
import FrameworkIcon from '/framework_icon.svg';
import { SkillCard } from './components/SkillCard';
import { CustomSection } from '../../components/CustomSection';

export function Skills() {
  return (
    <CustomSection
      id="skills"
      className="flex-row flex-wrap justify-center items-center gap-10"
    >
      <SkillCard
        logo={CodeIcon}
        title="Languages and Technologies"
        list={[
          {
            label: 'JavaScript',
            link: 'https://developer.mozilla.org/docs/Web/JavaScript',
          },
          { label: 'TypeScript', link: 'https://www.typescriptlang.org/' },
          { label: 'Node.js', link: 'https://nodejs.org/en' },
          {
            label: 'C#',
            link: 'https://dotnet.microsoft.com/en-us/languages/csharp',
          },
          {
            label: 'HTML',
            link: 'https://developer.mozilla.org/docs/Web/HTML',
          },
          { label: 'CSS', link: 'https://developer.mozilla.org/docs/Web/CSS' },
          {
            label: 'SQL',
            link: 'https://www.w3schools.com/sql/sql_intro.asp',
          },
        ]}
      />
      <SkillCard
        logo={ToolIcon}
        title="Libraries and Frameworks"
        list={[
          { label: 'React', link: 'https://react.dev/' },
          { label: 'NextJS', link: 'https://nextjs.org/' },
          { label: 'Express', link: 'https://expressjs.com/' },
          { label: 'EggJS', link: 'https://www.eggjs.org/' },
          { label: 'Nest', link: 'https://nestjs.com/' },
          { label: 'React Native', link: 'https://reactnative.dev/' },
        ]}
      />
      <SkillCard
        logo={FrameworkIcon}
        title="Tools and Utilities"
        list={[
          { label: 'Git', link: 'https://git-scm.com/' },
          { label: 'Keycloak', link: 'https://www.keycloak.org/' },
          { label: 'Firebase', link: 'https://firebase.google.com/' },
          { label: 'Docker', link: 'https://www.docker.com/' },
          { label: 'Portainer', link: 'https://www.portainer.io/' },
          { label: 'NGINX', link: 'https://www.nginx.com/' },
        ]}
      />
    </CustomSection>
  );
}
