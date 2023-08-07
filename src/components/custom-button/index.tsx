import { twMerge } from 'tailwind-merge';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};

export function CustomButton({ children, className, type = 'button', rightIcon, leftIcon, ...rest }: Props) {
  return (
    <button
      {...rest}
      type={type}
      className={twMerge(
        'border-2 border-yellow text-yellow p-3 text-lg rounded-md flex items-center justify-center',
        className,
      )}
    >
      {leftIcon && <span className="mr-2 flex items-center justify-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex items-center justify-center">{rightIcon}</span>}
    </button>
  );
}
