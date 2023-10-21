import { CustomButton } from '../../../../components/CustomButton';
import { CustomCard } from '../../../../components/CustomCard';
import { CustomForm } from '../../../../components/CustomForm';
import { CustomInput } from '../../../../components/CustomInput';
import { useLocaleContext } from '../../../../locale/LocaleContext';

export function ContactForm() {
  const { locale } = useLocaleContext();
  return (
    <CustomCard className="max-w-md w-full p-8">
      <CustomForm onSubmit={(data) => console.log(data)}>
        <CustomInput label={locale['contact']['form']['name']} name="name" />
        <CustomInput
          label={locale['contact']['form']['email']}
          type="email"
          name="email"
          required
        />
        <CustomInput
          label={locale['contact']['form']['message']}
          name="message"
          required
          inputType="textarea"
          minLength={10}
        />
        <CustomButton type="submit" className="mt-5">
          {locale['contact']['form']['send']}
        </CustomButton>
      </CustomForm>
    </CustomCard>
  );
}
