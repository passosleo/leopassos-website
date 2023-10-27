import { twMerge } from 'tailwind-merge';

export function CustomSection({
  children,
  className,
  ...rest
}: React.ComponentProps<'section'>) {
  return (
    <section
      {...rest}
      className={twMerge(
        'relative flex flex-col min-h-[calc(100vh_-_80px)] w-full py-10',
        className,
      )}
    >
      {children}
    </section>
  );
}
