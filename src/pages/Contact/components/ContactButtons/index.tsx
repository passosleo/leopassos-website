import { twMerge } from 'tailwind-merge';
import { CustomLink } from '../../../../components/CustomLink';
import { LinkTarget } from '../../../../types/generic';

type ContactButtons = {
  buttons: {
    label: string;
    href: string;
    target?: LinkTarget;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  }[];
};

export function ContactButtons({ buttons }: ContactButtons) {
  return (
    <div className="flex flex-col gap-8 max-w-sm w-full">
      {buttons.map(
        (
          { label, target = '_blank', href, onClick, className, icon },
          index,
        ) => (
          <CustomLink
            key={index}
            className={twMerge(
              'px-10 md:px-20 py-3 border-2 border-yellow text-yellow text-lg font-semibold rounded-md flex items-center justify-between hover:bg-yellow hover:text-black transition-colors duration-300',
              className,
            )}
            href={href}
            target={target}
            onClick={onClick}
          >
            <span>{label}</span> {icon && icon}
          </CustomLink>
        ),
      )}
    </div>
  );
}
