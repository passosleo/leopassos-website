import { Timeline } from '../../components/Timeline';
import { CustomText } from '../../components/CustomText';
import { CustomSection } from '../../components/CustomSection';
import { useLocaleContext } from '../../locale/LocaleContext';

export function Experience() {
  const { locale } = useLocaleContext();
  return (
    <CustomSection id="experience" className="gap-20 justify-center">
      <CustomText className="text-2xl text-justify text-grey-light">
        {locale['experience']['title-1']}
      </CustomText>
      <Timeline
        data={[
          {
            title: locale['experience']['timeline']['item-1']['title-1'],
            subtitle: locale['experience']['timeline']['item-1']['subtitle-1'],
            year: locale['experience']['timeline']['item-1']['subtitle-2'],
            list: [
              locale['experience']['timeline']['item-1']['list-1'],
              locale['experience']['timeline']['item-1']['list-2'],
              locale['experience']['timeline']['item-1']['list-3'],
              locale['experience']['timeline']['item-1']['list-4'],
              locale['experience']['timeline']['item-1']['list-5'],
              locale['experience']['timeline']['item-1']['list-6'],
            ],
          },
          {
            title: locale['experience']['timeline']['item-2']['title-1'],
            subtitle: locale['experience']['timeline']['item-2']['subtitle-1'],
            year: locale['experience']['timeline']['item-2']['subtitle-2'],
            list: [
              locale['experience']['timeline']['item-2']['list-1'],
              locale['experience']['timeline']['item-2']['list-2'],
              locale['experience']['timeline']['item-2']['list-3'],
              locale['experience']['timeline']['item-2']['list-4'],
            ],
          },
          {
            title: locale['experience']['timeline']['item-3']['title-1'],
            subtitle: locale['experience']['timeline']['item-3']['subtitle-1'],
            year: locale['experience']['timeline']['item-3']['subtitle-2'],
            list: [
              locale['experience']['timeline']['item-3']['list-1'],
              locale['experience']['timeline']['item-3']['list-2'],
              locale['experience']['timeline']['item-3']['list-3'],
              locale['experience']['timeline']['item-3']['list-4'],
            ],
          },
        ]}
      />
    </CustomSection>
  );
}
