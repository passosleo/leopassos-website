import { twMerge } from 'tailwind-merge';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isSelected?: boolean;
};

export function CustomLink({ className, children, isSelected, ...rest }: Props) {
  return (
    <a {...rest} className={twMerge('hover:text-yellow', isSelected ? 'border-b-2 border-yellow' : '', className)}>
      {children}
    </a>
  );
}
