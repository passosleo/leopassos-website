type JobExperience = {
  title: string;
  position: string;
  year: string;
  responsibilities: string[];
};

type Props = {
  labels: JobExperience[];
};

export function Timeline({ labels }: Props) {
  return (
    <div className="relative overflow-x-auto">
      <div className="flex justify-between w-full">
        {labels.map(({ title, year, position, responsibilities }, index) => {
          const isUniqueItem = labels.length === 1;
          const isFirstItem = index === 0;
          const isLastItem = index === labels.length - 1;

          const timelineBackgroundClass = `bg-grey-dark w-full flex items-center h-2 ${
            isFirstItem ? 'ml-auto' : isLastItem ? 'mr-auto' : ''
          } ${isFirstItem || isLastItem ? 'w-1/2' : ''}`;

          return (
            <div key={index} className="flex flex-col items-center w-full">
              <p className="text-lg text-yellow font-bold mb-2">{year}</p>

              {!isUniqueItem && <div className={timelineBackgroundClass} />}

              <div className="h-4 w-4 bg-yellow rounded-full z-10 mt-[-12px] mb-2" />

              <div className="w-64 mx-5">
                <div className="font-bold mt-4 text-center">
                  <p>{title}</p>
                  <p className="text-yellow">{position}</p>
                </div>

                <div className="flex flex-col gap-1 p-4">
                  {responsibilities.map((responsibility, index) => (
                    <div className="flex items-center self-start" key={index}>
                      <span className="mr-2 text-xl">&bull;</span>
                      <p className="text-grey-light">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
