import { About } from './About';
import { Skills } from './Skills';
import { Layout } from '../layout';
import { Experience } from './Experience';

export function App() {
  return (
    <Layout>
      <About />
      <Experience />
      <Skills />
    </Layout>
  );
}
