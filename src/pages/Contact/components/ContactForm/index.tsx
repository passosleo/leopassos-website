import { CustomButton } from '../../../../components/CustomButton';
import { CustomCard } from '../../../../components/CustomCard';
import { CustomForm } from '../../../../components/CustomForm';
import { CustomInput } from '../../../../components/CustomInput';

export function ContactForm() {
  return (
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
  );
}
