import { Timeline } from '../../components/Timeline';
import { CustomText } from '../../components/CustomText';
import { CustomSection } from '../../components/CustomSection';

export function Experience() {
  return (
    <CustomSection id="experience" className="gap-20 justify-center">
      <CustomText className="text-2xl text-justify text-grey-light">
        Before becoming a web developer, I had other experiences in the IT world that were fundamental to my
        professional development and certainly helped me to get where I am.
      </CustomText>
      <Timeline
        data={[
          {
            title: 'Academia da Informática',
            subtitle: 'Technical Manager',
            year: '2018 - 2019',
            list: [
              'IT Support and consultancy',
              'Software Help Desk',
              'Hardware and software mainentance',
              'Backup management',
              'Server management',
            ],
          },
          {
            title: 'Grupo W2A Brasil',
            subtitle: 'Software QA Tester',
            year: '2021',
            list: [
              'Mobile and SaaS software testing',
              'User Acceptance Testing',
              'Software usability documentation',
              'User Training ',
            ],
          },
          {
            title: 'LighthouseIt',
            subtitle: 'Full-Stack Web Developer',
            year: '2021 - now',
            list: [
              'Accessible and responsive web pages and mobile applications',
              'Restful API’s and integrations',
              'Relational database management',
              'Full-Stack development',
              'Software analyst',
            ],
          },
        ]}
      />
    </CustomSection>
  );
}
