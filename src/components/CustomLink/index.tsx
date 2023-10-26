import { twMerge } from 'tailwind-merge';

type Props = React.ComponentProps<'a'> & {
  isSelected?: boolean;
};

export function CustomLink({
  className,
  children,
  isSelected,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      className={twMerge(
        'hover:text-yellow border-b-2 cursor-pointer transition-all',
        isSelected ? 'border-yellow' : 'border-transparent',
        className,
      )}
    >
      {children}
    </a>
  );
}
