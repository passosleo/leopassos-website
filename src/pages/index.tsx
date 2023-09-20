import { CustomSection } from '../components/CustomSection';
import { CustomText } from '../components/CustomText';
import { Layout } from '../layout';
import { About } from './About';
import { Experience } from './Experience';
import { Skills } from './Skills';

export function App() {
  return (
    <Layout>
      <About />
      <Experience />
      <Skills />
      <CustomSection id="contact">
        <CustomText className="text-2xl text-justify text-grey-light">
          Before becoming a web developer, I had other experiences in the IT
          world that were fundamental to my professional development and
          certainly helped me to get where I am.
        </CustomText>
      </CustomSection>
    </Layout>
  );
}
