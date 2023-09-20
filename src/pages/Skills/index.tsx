import CodeIcon from '/code_icon.svg';
import ToolIcon from '/tool_icon.svg';
import FrameworkIcon from '/framework_icon.svg';
import { SkillCard } from './components/SkillCard';
import { CustomSection } from '../../components/CustomSection';

export function Skills() {
  return (
    <CustomSection
      id="skills"
      className="flex-row flex-wrap justify-center items-start gap-5"
    >
      <SkillCard
        logo={CodeIcon}
        title="Languages and Technologies"
        list={[
          'Javascript',
          'Typescript',
          'Node.JS',
          'C#',
          'HTML',
          'CSS',
          'SQL',
        ]}
      />
      <SkillCard
        logo={ToolIcon}
        title="Libraries and Frameworks"
        list={[
          'Express',
          'Nest',
          'ReactJS',
          'EggJS',
          'Next.JS',
          'React Native',
          'Styled-Components',
          'Tailwind',
          'Ant Design',
          'Material UI',
          'Chakra UI',
        ]}
      />
      <SkillCard
        logo={FrameworkIcon}
        title="Tools and Others"
        list={[
          'Git',
          'RESTful API’s',
          'Keycloak',
          'Firebase',
          'Docker',
          'Portainer',
          'NGINX',
        ]}
      />
    </CustomSection>
  );
}
