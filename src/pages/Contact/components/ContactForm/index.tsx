import { CustomCard } from '../../../../components/CustomCard';
import { CustomForm } from '../../../../components/CustomForm';
import { CustomLink } from '../../../../components/CustomLink';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CustomInput } from '../../../../components/CustomInput';
import { CustomButton } from '../../../../components/CustomButton';
import { useLocaleContext } from '../../../../locale/LocaleContext';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useContactForm } from './hooks/useContactForm';

export function ContactForm() {
  const { locale } = useLocaleContext();
  const { handleSubmit, goBack, isSubmitting, isSucceeded } = useContactForm();

  return (
    <CustomCard className="flex items-center justify-center max-w-md min-h-[434px] w-full p-6">
      {isSucceeded ? (
        <div className="flex flex-col items-center justify-center text-center gap-5">
          <CheckCircleOutlineIcon
            fontSize="inherit"
            style={{ fontSize: '5rem' }}
            className="opacity-25 text-green-500"
          />
          <div>
            <p>{locale['contact']['form']['success-1']}</p>
            <p>{locale['contact']['form']['success-2']}</p>
          </div>
          <CustomLink
            onClick={goBack}
            className="font-bold text-center"
            leftIcon={
              <ArrowBackIosIcon
                fontSize="inherit"
                style={{ fontSize: '1rem' }}
              />
            }
          >
            {locale['contact']['form']['back']}
          </CustomLink>
        </div>
      ) : (
        <CustomForm onSubmit={handleSubmit}>
          <CustomInput
            label={locale['contact']['form']['name']}
            name="name"
            autoComplete="name"
          />

          <CustomInput
            label={locale['contact']['form']['email']}
            type="email"
            name="email"
            autoComplete="email"
            required
          />

          <CustomInput
            label={locale['contact']['form']['message']}
            name="message"
            inputType="textarea"
            minLength={10}
            required
          />

          <CustomButton type="submit" className="mt-5" isLoading={isSubmitting}>
            {locale['contact']['form']['send']}
          </CustomButton>
        </CustomForm>
      )}
    </CustomCard>
  );
}
