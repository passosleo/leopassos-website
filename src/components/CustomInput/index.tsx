import { twMerge } from 'tailwind-merge';

type CustomInputProps = React.ComponentProps<'input'> &
  React.ComponentProps<'textarea'> & {
    name: string;
    inputType?: 'input' | 'textarea';
    label?: string;
    containerClassName?: string;
    labelClassName?: string;
  };

export function CustomInput({
  label,
  inputType = 'input',
  className,
  containerClassName,
  labelClassName,
  ...props
}: CustomInputProps) {
  const id = props.id || props.name;
  return (
    <div className={twMerge('flex flex-col gap-1', containerClassName)}>
      {label && (
        <label
          className={twMerge('text-grey-light font-semibold', labelClassName)}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {inputType === 'input' ? (
        <input
          {...props}
          id={id}
          name={id}
          className={twMerge(
            'bg-transparent border outline-none border-grey-light rounded-md p-3 text-white font-semibold',
            className,
          )}
        />
      ) : (
        <textarea
          {...props}
          id={id}
          name={id}
          className={twMerge(
            'bg-transparent border outline-none border-grey-light rounded-md p-3 text-white font-semibold',
            className,
          )}
        />
      )}
    </div>
  );
}
