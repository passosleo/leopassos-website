import { twMerge } from 'tailwind-merge';

export function CustomSection({
  children,
  className,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section
      {...props}
      className={twMerge(
        'relative flex flex-col min-h-[calc(100vh_-_80px)] w-full py-10',
        className,
      )}
    >
      {children}
    </section>
  );
}
