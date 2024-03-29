import { twMerge } from 'tailwind-merge';

type BrandProps = React.ComponentProps<'div'> & {
  logo: string;
};

export function Brand({ logo, className, ...props }: BrandProps) {
  return (
    <div className={twMerge('cursor-pointer', className)} {...props}>
      <img src={logo} alt="leopassos.dev logo" className="w-52 h-10" />
    </div>
  );
}
