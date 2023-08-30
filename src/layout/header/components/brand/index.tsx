import { twMerge } from 'tailwind-merge';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  logo: string;
};

export function Brand({ logo, className, ...rest }: Props) {
  return (
    <div className={twMerge('cursor-pointer', className)} {...rest}>
      <img src={logo} alt="logo" className="w-full h-auto" />
    </div>
  );
}
