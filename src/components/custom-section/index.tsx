import { twMerge } from 'tailwind-merge';

export function CustomSection({ children, className, ...rest }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section {...rest} className={twMerge('flex flex-col min-h-[calc(100vh_-_80px)] w-full py-10', className)}>
      {children}
    </section>
  );
}
