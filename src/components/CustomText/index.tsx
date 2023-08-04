import { twMerge } from 'tailwind-merge';

export function CustomText({ children, className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...rest} className={twMerge('text-base', className)}>
      {children}
    </p>
  );
}
