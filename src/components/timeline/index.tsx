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
  const ballSize = 4;
  const marginBetweenBalls = 80;
  const timelineWidth = `calc(100% - ${labels.length * (ballSize + marginBetweenBalls)}px)`;
  return (
    <div className="flex flex-col items-center relative">
      <div className="h-2 w-full bg-grey-dark absolute mt-10" style={{ width: timelineWidth }} />
      <div className="flex justify-between w-full z-10">
        {labels.map(({ title, year, position, responsibilities }, index) => (
          <div key={index} className="flex flex-col items-center w-64">
            <p className="text-lg text-yellow font-bold">{year}</p>
            <div className={`h-4 w-4 bg-yellow rounded-full m-2`} />
            <p className="font-bold mt-4">{title}</p>
            <p className="text-yellow font-bold">{position}</p>
            <div className="flex flex-col gap-1 ml-4 my-4">
              {responsibilities.map((responsibility, index) => (
                <div className="flex items-center self-start">
                  <span className="mr-2 text-xl">&bull;</span>
                  <p key={index} className="text-grey-light">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
