import { CustomButton } from '../../components/CustomButton';
import { CustomSection } from '../../components/CustomSection';
import { CustomText } from '../../components/CustomText';
import GitHubIcon from '@mui/icons-material/GitHub';
import { logEventAnalytics } from '../../firebase';

export function About() {
  return (
    <CustomSection id="about" className="gap-10 justify-center">
      <div className="flex flex-col gap-3">
        <CustomText className="font-extrabold text-2xl">
          Hi, my name is
        </CustomText>
        <CustomText className="font-extrabold text-5xl text-yellow">
          Leonardo Passos.
        </CustomText>
        <CustomText className="font-extrabold text-5xl text-grey-light">
          I build things for the web.
        </CustomText>
      </div>
      <div>
        <CustomText className="text-2xl text-justify text-grey-light max-w-4xl">
          I’m a full-stack web developer specialized in building amazing digital
          experiences. Currently, I’m studying Technology in Systems Analysis
          and Development and focused on building accessible, robust and fast
          web solutions at{' '}
          <a
            className="text-yellow"
            href="https://www.lighthouseit.com.br/"
            target="_blank"
            onClick={() => logEventAnalytics('click_company_link')}
          >
            LighthouseIt.
          </a>
        </CustomText>
      </div>
      <a
        href="https://github.com/passosleo"
        target="_blank"
        onClick={() => logEventAnalytics('click_github_profile')}
        className="w-fit"
      >
        <CustomButton rightIcon={<GitHubIcon />}>
          Checkout my GitHub!
        </CustomButton>
      </a>
    </CustomSection>
  );
}
