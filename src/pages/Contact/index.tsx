import { CustomButton } from '../../components/CustomButton';
import { CustomSection } from '../../components/CustomSection';
import { CustomText } from '../../components/CustomText';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CustomCard } from '../../components/CustomCard';
import { CustomInput } from '../../components/CustomInput';
import { CustomForm } from '../../components/CustomForm';

export function Contact() {
  return (
    <CustomSection
      id="contact"
      className="flex-col flex-wrap justify-center items-center"
    >
      <CustomText className="text-grey-light text-2xl text-center">
        Feel free to reach out to me regarding opportunities, projects,
        freelancing, inquiries, or assistance.
      </CustomText>
      <CustomText className="text-grey-light text-2xl text-center">
        I would be very pleased to help you :)
      </CustomText>
      <div className="flex flex-wrap gap-20 justify-around items-center w-full mt-20">
        <div className="flex flex-col gap-8 max-w-sm w-full">
          <CustomButton
            className="w-full justify-between px-10 sm:px-20 font-normal"
            rightIcon={<EmailIcon />}
          >
            Send e-mail
          </CustomButton>
          <CustomButton
            className="w-full justify-between px-10 sm:px-20 font-normal"
            rightIcon={<WhatsAppIcon />}
          >
            Send message
          </CustomButton>
          <CustomButton
            className="w-full justify-between px-10 sm:px-20 font-normal"
            rightIcon={<LinkedInIcon />}
          >
            Connect on LinkedIn
          </CustomButton>
          <CustomButton
            className="w-full justify-between px-10 sm:px-20 font-normal"
            rightIcon={<GitHubIcon />}
          >
            Checkout Github
          </CustomButton>
        </div>
        <CustomCard className="max-w-md w-full p-8">
          <CustomForm onSubmit={(data) => console.log(data)}>
            <CustomInput label="Name" name="name" />
            <CustomInput label="E-mail *" type="email" name="email" required />
            <CustomInput
              label="Message *"
              name="message"
              required
              inputType="textarea"
              minLength={10}
            />
            <CustomButton type="submit" className="mt-5">
              Send
            </CustomButton>
          </CustomForm>
        </CustomCard>
      </div>
    </CustomSection>
  );
}
