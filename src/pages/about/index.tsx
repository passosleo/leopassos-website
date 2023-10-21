import { logEventAnalytics } from '../../firebase';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CustomText } from '../../components/CustomText';
import { CustomButton } from '../../components/CustomButton';
import { CustomSection } from '../../components/CustomSection';
import { useLocaleContext } from '../../locale/LocaleContext';

export function About() {
  const { locale } = useLocaleContext();
  return (
    <CustomSection id="about" className="gap-10 justify-center">
      <div className="flex flex-col gap-3">
        <CustomText className="font-extrabold text-2xl">
          {locale['about']['title-1']}
        </CustomText>
        <CustomText className="font-extrabold text-5xl text-yellow">
          {locale['about']['title-2']}
        </CustomText>
        <CustomText className="font-extrabold text-5xl text-grey-light">
          {locale['about']['title-3']}
        </CustomText>
      </div>
      <div>
        <CustomText className="text-2xl text-justify text-grey-light max-w-4xl">
          {locale['about']['description-1']}
          <a
            className="text-yellow"
            href="https://www.lighthouseit.com.br/"
            target="_blank"
            onClick={() => logEventAnalytics('[about]click_company_link')}
          >
            {locale['about']['description-2']}
          </a>
        </CustomText>
      </div>
      <a
        href="https://github.com/passosleo"
        target="_blank"
        onClick={() => logEventAnalytics('[about]click_github_profile')}
        className="w-fit"
      >
        <CustomButton rightIcon={<GitHubIcon />}>
          {locale['about']['button-1']}
        </CustomButton>
      </a>
    </CustomSection>
  );
}
