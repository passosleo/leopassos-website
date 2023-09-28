import { About } from './About';
import { Skills } from './Skills';
import { Layout } from '../layout';
import { Contact } from './Contact';
import { Experience } from './Experience';

export function App() {
  return (
    <Layout>
      <About />
      <Experience />
      <Skills />
      <Contact />
    </Layout>
  );
}
