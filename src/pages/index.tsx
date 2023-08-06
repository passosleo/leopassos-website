import { Layout } from '../layout';
import { About } from './about';

export function App() {
  return (
    <Layout>
      <About />
      <section id="experience" className="flex flex-col gap-10"></section>
      <section id="skills" className="flex flex-col gap-10"></section>
      <section id="contact" className="flex flex-col gap-10"></section>
    </Layout>
  );
}
