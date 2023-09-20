import { twMerge } from 'tailwind-merge';

export function CustomText({ children, className, ...rest }: React.ComponentProps<'p'>) {
  return (
    <p {...rest} className={twMerge('text-base', className)}>
      {children}
    </p>
  );
}
