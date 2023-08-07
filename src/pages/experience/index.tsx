import { CustomSection } from '../../components/custom-section';
import { CustomText } from '../../components/custom-text';
import { Timeline } from '../../components/timeline';

export function Experience() {
  return (
    <CustomSection id="experience" className="gap-20 justify-center">
      <CustomText className="text-2xl text-justify text-grey-light">
        Before becoming a web developer, I had other experiences in the IT world that were fundamental to my
        professional development and certainly helped me to get where I am.
      </CustomText>
      <Timeline
        labels={[
          {
            title: 'Academia da Informática',
            position: 'Technical Manager',
            year: '2018 - 2019',
            responsibilities: [
              'IT Support and consultancy',
              'Software Help Desk',
              'Hardware and software mainentance',
              'Backup management',
              'Server management',
            ],
          },
          {
            title: 'Grupo W2A Brasil',
            position: 'Software QA Tester',
            year: '2021',
            responsibilities: [
              'Mobile and SaaS software testing',
              'User Acceptance Testing',
              'Software usability documentation',
              'User Training ',
            ],
          },
          {
            title: 'LighthouseIt',
            position: 'Full-Stack Web Developer',
            year: '2021 - now',
            responsibilities: [
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
