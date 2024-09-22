import journey_data from "@data/journey_data.json";

interface JourneyInterface {
  name: string;
  location: string;
  start: string;
  end: string;
}

const myJourney: JourneyInterface[] = journey_data;

export default function Timeline() {
  return (
    <div className="pl-[10%] w-[60%] flex items-start flex-col grow">
      {myJourney.map((exp, ind) => {
        return (
          <div className="flex snap-start" key={exp.name}>
            <div className="mr-[4rem] flex items-center flex-col">
              <div className="w-[1rem] aspect-square bg-text rounded-full"></div>
              {ind != myJourney.length - 1 && (
                <div className="w-[0.25rem] min-h-[20rem] bg-text opacity-[0.25]"></div>
              )}
            </div>
            <div className="relative -top-[1.5rem] h-fit text-textHighlight transition-all duration-150 cursor-pointer hover:scale-[1.025]">
              <h4 className="text-[2rem] font-inter font-bold">{exp.name}</h4>
              <p className="">{exp.location}</p>
              <p className="">
                {exp.start} - {exp.end}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
