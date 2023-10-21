import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContactForm } from './components/ContactForm';
import { CustomText } from '../../components/CustomText';
import { ContactButtons } from './components/ContactButtons';
import { CustomSection } from '../../components/CustomSection';
import { logEventAnalytics } from '../../firebase';
import { useLocaleContext } from '../../locale/LocaleContext';

export function Contact() {
  const { locale } = useLocaleContext();
  return (
    <CustomSection
      id="contact"
      className="flex-col flex-wrap justify-center items-center"
    >
      <CustomText className="text-grey-light text-2xl text-center">
        {locale['contact']['title-1']}
      </CustomText>
      <CustomText className="text-grey-light text-2xl text-center">
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
              onClick: () => logEventAnalytics('[contact]click_send_email'),
            },
            {
              label: locale['contact']['buttons']['button-2'],
              href: 'https://wa.me/5551993794314?text=Hello%20Leo!%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20talk%20to%20you.',
              icon: <WhatsAppIcon />,
              onClick: () => logEventAnalytics('[contact]click_send_whatsapp'),
            },
            {
              label: locale['contact']['buttons']['button-3'],
              href: 'https://www.linkedin.com/in/passosleo/',
              icon: <LinkedInIcon />,
              onClick: () =>
                logEventAnalytics('[contact]click_linkedin_profile'),
            },
            {
              label: locale['contact']['buttons']['button-4'],
              href: 'https://github.com/passosleo',
              icon: <GitHubIcon />,
              onClick: () => logEventAnalytics('[contact]click_github_profile'),
            },
          ]}
        />

        <ContactForm />
      </div>
    </CustomSection>
  );
}
