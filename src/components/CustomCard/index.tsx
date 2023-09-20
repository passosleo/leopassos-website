import { twMerge } from 'tailwind-merge';

export function CustomCard({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={twMerge('bg-grey-dark rounded-xl p-5 shadow-sm', className)}>
      {children}
    </div>
  );
}
