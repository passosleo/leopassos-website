import { twMerge } from 'tailwind-merge';

export function CustomText({
  children,
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p {...props} className={twMerge('text-base lg:text-xs', className)}>
      {children}
    </p>
  );
}
