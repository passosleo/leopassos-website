import EmailIcon from '@mui/icons-material/Email';
import { logEventAnalytics } from '../../firebase';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ContactForm } from './components/ContactForm';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { CustomText } from '../../components/CustomText';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ContactButtons } from './components/ContactButtons';
import { useLocaleContext } from '../../locale/LocaleContext';
import { CustomSection } from '../../components/CustomSection';
import { CustomBackground } from '../../components/CustomBackground';

export function Contact() {
  const { locale } = useLocaleContext();
  const { isTabletOrMobile } = useMediaQuery();

  return (
    <CustomSection
      id="contact"
      className="flex-col flex-wrap justify-center items-center"
    >
      {!isTabletOrMobile && (
        <CustomBackground variant="prompt" position="left" />
      )}

      <CustomText className="text-grey-light text-xl xl:text-2xl text-center">
        {locale['contact']['title-1']}
      </CustomText>
      <CustomText className="text-grey-light text-xl xl:text-2xl text-center">
        {locale['contact']['title-2']}
      </CustomText>

      <div className="flex flex-wrap gap-20 justify-around items-center w-full mt-20">
        <ContactButtons
          buttons={[
            {
              label: locale['contact']['buttons']['button-1'],
              href: 'mailto:leonardopassos98@gmail.com?subject=Hello%20Leo!%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20talk%20to%20you.',
              target: '_self',
              icon: <EmailIcon />,
              className: 'text-base xl:text-lg',
              onClick: () => logEventAnalytics('[contact]click_send_email'),
            },
            {
              label: locale['contact']['buttons']['button-2'],
              href: 'https://wa.me/5551993794314?text=Hello%20Leo!%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20talk%20to%20you.',
              icon: <WhatsAppIcon />,
              className: 'text-base xl:text-lg',
              onClick: () => logEventAnalytics('[contact]click_send_whatsapp'),
            },
            {
              label: locale['contact']['buttons']['button-3'],
              href: 'https://www.linkedin.com/in/passosleo/',
              icon: <LinkedInIcon />,
              className: 'text-base xl:text-lg',
              onClick: () =>
                logEventAnalytics('[contact]click_linkedin_profile'),
            },
            {
              label: locale['contact']['buttons']['button-4'],
              href: 'https://github.com/passosleo',
              icon: <GitHubIcon />,
              className: 'text-base xl:text-lg',
              onClick: () => logEventAnalytics('[contact]click_github_profile'),
            },
          ]}
        />

        <ContactForm />
      </div>
    </CustomSection>
  );
}
