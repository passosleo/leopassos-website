import { ValidationError, useForm } from '@formspree/react';
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
        <CustomInput label={locale['contact']['form']['name']} name="name" />
        <CustomInput
          label={locale['contact']['form']['email']}
          type="email"
          name="email"
          required
        />
        <ValidationError prefix="E-mail" field="email" errors={form.errors} />

        <CustomInput
          label={locale['contact']['form']['message']}
          name="message"
          required
          inputType="textarea"
          minLength={10}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={form.errors}
        />

        <CustomButton type="submit" className="mt-5" disabled={form.submitting}>
          {locale['contact']['form']['send']}
        </CustomButton>
      </CustomForm>
    </CustomCard>
  );
}
