import { CustomCard } from '../../../../components/CustomCard';
import { CustomLink } from '../../../../components/CustomLink';
import { CustomText } from '../../../../components/CustomText';
import { Link } from '../../../../types/types';

type Props = React.ComponentProps<'div'> & {
  icon: string;
  title: string;
  links: Link[];
};

export function SkillCard({ icon, title, links, ...props }: Props) {
  return (
    <CustomCard
      {...props}
      className="p-8 w-72 h-116 hover:scale-105 transition-all"
    >
      <div className="flex flex-col items-center justify-center">
        <img src={icon} alt={title} className="w-24 h-24" />
        <div className="min-h-14 my-4 flex items-center justify-center">
          <CustomText className="text-yellow font-semibold text-xl text-center">
            {title}
          </CustomText>
        </div>
      </div>
      <ul className="flex flex-col items-start gap-2 self-start mx-12">
        {links.map(({ label, href }, index) => (
          <li key={index} className="text-white text-center">
            <CustomLink href={href} target="__blank">
              <span className="mr-2">&bull;</span>
              {label}
            </CustomLink>
          </li>
        ))}
      </ul>
    </CustomCard>
  );
}
