import { twMerge } from 'tailwind-merge';

type Props = React.ComponentProps<'div'> & {
  logo: string;
};

export function Brand({ logo, className, ...rest }: Props) {
  return (
    <div className={twMerge('cursor-pointer', className)} {...rest}>
      <img src={logo} alt="leopassos.dev logo" className="w-52 h-10" />
    </div>
  );
}
