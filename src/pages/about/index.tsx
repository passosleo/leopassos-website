import GitHubIcon from '@mui/icons-material/GitHub';
import { logEventAnalytics } from '../../firebase';
import { CustomText } from '../../components/CustomText';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { CustomButton } from '../../components/CustomButton';
import { useLocaleContext } from '../../locale/LocaleContext';
import { CustomSection } from '../../components/CustomSection';
import { CustomBackground } from '../../components/CustomBackground';

export function About() {
  const { locale } = useLocaleContext();
  const { isTabletOrMobile } = useMediaQuery();

  return (
    <CustomSection id="about" className="gap-10 justify-center">
      {!isTabletOrMobile && (
        <CustomBackground variant="brackets" position="right" />
      )}

      <div className="flex flex-col gap-3">
        <CustomText className="font-extrabold text-xl xl:text-2xl">
          {locale['about']['title-1']}
        </CustomText>
        <CustomText className="font-extrabold text-4xl xl:text-5xl text-yellow">
          {locale['about']['title-2']}
        </CustomText>
        <CustomText className="font-extrabold text-4xl xl:text-5xl text-grey-light">
          {locale['about']['title-3']}
        </CustomText>
      </div>

      <div>
        <CustomText className="text-xl xl:text-2xl text-justify text-grey-light max-w-4xl">
          {locale['about']['description-1']}
          <a
            className="text-yellow"
            href="https://www.lighthouseit.com.br/"
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
        <CustomButton
          rightIcon={<GitHubIcon />}
          className="text-base xl:text-lg"
        >
          {locale['about']['button-1']}
        </CustomButton>
      </a>
    </CustomSection>
  );
}
