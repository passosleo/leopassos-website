import { CustomSection } from '../components/custom-section';
import { CustomText } from '../components/custom-text';
import { Layout } from '../layout';
import { About } from './about';
import { Experience } from './experience';

export function App() {
  return (
    <Layout>
      <About />
      <Experience />
      <CustomSection id="skills">
        <CustomText className="text-2xl text-justify text-grey-light">
          Before becoming a web developer, I had other experiences in the IT world that were fundamental to my
          professional development and certainly helped me to get where I am.
        </CustomText>
      </CustomSection>
      <CustomSection id="contact">
        <CustomText className="text-2xl text-justify text-grey-light">
          Before becoming a web developer, I had other experiences in the IT world that were fundamental to my
          professional development and certainly helped me to get where I am.
        </CustomText>
      </CustomSection>
    </Layout>
  );
}
