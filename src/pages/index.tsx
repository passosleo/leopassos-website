import { Layout } from '../layout';
import { About } from './about';
import { Experience } from './experience';

export function App() {
  return (
    <Layout>
      <About />
      <Experience />
      <section id="skills" className="flex flex-col gap-10"></section>
      <section id="contact" className="flex flex-col gap-10"></section>
    </Layout>
  );
}
