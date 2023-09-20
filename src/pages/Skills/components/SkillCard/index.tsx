import { CustomCard } from '../../../../components/CustomCard';
import { CustomText } from '../../../../components/CustomText';

type Props = React.ComponentProps<'div'> & {
  logo: string;
  title: string;
  list: string[];
};

export function SkillCard({ logo, title, list, ...props }: Props) {
  return (
    <CustomCard {...props} className="flex flex-col items-center justify-center w-80">
      <img src={logo} alt={title} className="w-24 h-24" />
      <CustomText className="text-yellow font-semibold text-xl text-center my-4 w-52">{title}</CustomText>
      <ul className="flex flex-col items-start gap-2 self-start mx-14">
        {list.map((item, index) => (
          <li key={index} className="text-white text-center">
            {item}
          </li>
        ))}
      </ul>
    </CustomCard>
  );
}
