import { useForm } from '@formspree/react';
import { CustomButton } from '../../../../components/CustomButton';
import { CustomCard } from '../../../../components/CustomCard';
import { CustomForm } from '../../../../components/CustomForm';
import { CustomInput } from '../../../../components/CustomInput';
import { useLocaleContext } from '../../../../locale/LocaleContext';

export function ContactForm() {
  const { locale } = useLocaleContext();
  const [form, handleSubmit] = useForm('maygveqj');

  if (form.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <CustomCard className="max-w-md w-full p-8">
      <CustomForm onSubmit={handleSubmit}>
        <CustomInput
          label={locale['contact']['form']['name']}
          name="name"
          autoComplete="name"
        />

        <CustomInput
          label={locale['contact']['form']['email']}
          type="batata"
          name="email"
          autoComplete="email"
          required
        />

        <CustomInput
          label={locale['contact']['form']['message']}
          name="message"
          required
          inputType="textarea"
          minLength={10}
        />

        <CustomButton type="submit" className="mt-5" disabled={form.submitting}>
          {locale['contact']['form']['send']}
        </CustomButton>
      </CustomForm>
    </CustomCard>
  );
}
