import { twMerge } from 'tailwind-merge';

export function CustomLink({ className, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...rest} className={twMerge('hover:text-yellow', className)}>
      {children}
    </a>
  );
}
