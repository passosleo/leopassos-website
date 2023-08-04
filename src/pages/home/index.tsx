import { CustomText } from '../../components/CustomText';
import { Layout } from '../../layout';

export function Home() {
  return (
    <Layout>
      <section id="about" className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <CustomText className="font-extrabold text-2xl">Hi, my name is</CustomText>
          <CustomText className="font-extrabold text-5xl text-yellow">Leonardo Passos.</CustomText>
          <CustomText className="font-extrabold text-5xl text-grey-light">I build things for the web.</CustomText>
        </div>
        <div>
          <CustomText className="text-2xl text-justify text-grey-light max-w-3xl">
            I’m a full-stack web developer specialized in building amazing digital experiences. Currently, I’m studying
            Technology in Systems Analysis and Development and focused on building accessible, robust and fast web
            solutions at
            <a className="text-yellow" href="https://www.lighthouseit.com.br/" target="_blank">
              LighthouseIt.
            </a>
          </CustomText>
        </div>
      </section>
      <section id="experience" className="flex flex-col gap-10"></section>
      <section id="skills" className="flex flex-col gap-10"></section>
      <section id="contact" className="flex flex-col gap-10"></section>
    </Layout>
  );
}
