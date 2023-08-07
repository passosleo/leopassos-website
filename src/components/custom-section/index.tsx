import { twMerge } from 'tailwind-merge';

export function CustomSection({ children, className, ...rest }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section {...rest} className={twMerge('flex flex-col h-[calc(100vh_-_80px)] w-full', className)}>
      {children}
    </section>
  );
}
