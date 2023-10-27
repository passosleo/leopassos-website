import { twMerge } from 'tailwind-merge';

type CustomLinkProps = React.ComponentProps<'a'> & {
  isSelected?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};

export function CustomLink({
  leftIcon,
  children,
  className,
  rightIcon,
  isSelected,
  ...rest
}: CustomLinkProps) {
  return (
    <a
      {...rest}
      className={twMerge(
        'flex items-center hover:text-yellow border-b-2 cursor-pointer transition-all',
        isSelected ? 'border-yellow' : 'border-transparent',
        className,
      )}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </a>
  );
}
