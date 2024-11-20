import { About } from './About';
import { Layout } from '../layout';
import { Contact } from './Contact';
import { Translator } from '../components/Translator';

export function App() {
  return (
    <Layout>
      <About />
      {/* <Experience /> */}
      {/* <Skills /> */}
      <Contact />
      <Translator />
    </Layout>
  );
}
