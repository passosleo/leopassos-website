import { twMerge } from 'tailwind-merge';
import { CustomLoader } from '../CustomLoader';

type CustomButtonProps = React.ComponentProps<'button'> & {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
};

export function CustomButton({
  children,
  className,
  type = 'button',
  rightIcon,
  leftIcon,
  disabled,
  isLoading,
  onClick,
  ...props
}: CustomButtonProps) {
  return (
    <button
      {...props}
      type={(type === 'submit' && isLoading) || disabled ? 'button' : type}
      onClick={(e) => {
        if (disabled || isLoading) return;
        if (onClick) onClick(e);
      }}
      className={twMerge(
        'border-2 border-yellow text-yellow p-3 text-lg font-bold rounded-md flex items-center justify-center transition-colors duration-300 gap-3',
        className,
        disabled || isLoading
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer hover:bg-yellow hover:text-black',
      )}
    >
      {leftIcon && (
        <span className="mr-2 flex items-center justify-center">
          {leftIcon}
        </span>
      )}
      {children}
      {isLoading && <CustomLoader />}
      {rightIcon && (
        <span className="ml-2 flex items-center justify-center">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
