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
    <div className="mt-[4rem] w-full flex items-start flex-col grow tabletHor:pl-[10%] tabletHor:w-[60%] tabletHor:mt-0">
      {myJourney.map((exp, ind) => {
        return (
          <div className="w-full flex snap-start" key={exp.name}>
            <div className="mr-[2rem] flex items-center flex-col tabletVert:mr-[4rem]">
              <div className="w-[1rem] aspect-square bg-text rounded-full"></div>
              {ind != myJourney.length - 1 && (
                <div className="w-[0.25rem] min-h-[20rem] bg-text opacity-[0.25]"></div>
              )}
            </div>
            <div className="relative -top-[1.5rem] h-fit transition-all duration-150 cursor-pointer hover:scale-[1.025] hover:text-textHighlight">
              <h4 className="text-[1.5rem] font-inter font-bold tabletVert:text-[2rem]">
                {exp.name}
              </h4>
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
