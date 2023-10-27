import { twMerge } from 'tailwind-merge';
import { useCustomForm } from './hooks/useCustomForm';

type CustomFormProps = Omit<React.ComponentProps<'form'>, 'onSubmit'> & {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
};

export function CustomForm({
  children,
  className,
  onSubmit,
  ...props
}: CustomFormProps) {
  const { handleOnSubmit } = useCustomForm();
  return (
    <form
      {...props}
      onSubmit={(event) => handleOnSubmit(event, onSubmit)}
      className={twMerge('flex flex-col gap-3 w-full', className)}
    >
      {children}
    </form>
  );
}
