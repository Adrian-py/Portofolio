interface JourneyInterface {
  name: string;
  location: string;
  start: string;
  end: string;
}

const my_journey: JourneyInterface[] = [
  {
    name: "University Enrollment",
    location: "Bina Nusantara University",
    start: "August 2020",
    end: "November 2024 (Expected)",
  },
  {
    name: "Frontend Engineer Intern",
    location: "DOT Indonesia",
    start: "October 2022",
    end: "January 2023",
  },
  {
    name: "Student Exchange",
    location: "Dankook University",
    start: "February 2023",
    end: "June 2023",
  },
  {
    name: "Software Development Engineer Intern",
    location: "GDP Labs",
    start: "September 2023",
    end: "February 2024",
  },
];

export default function Timeline() {
  return (
    <div className="pl-[10%] w-[60%] flex items-start flex-col grow">
      {my_journey.map((exp, ind) => {
        return (
          <div className="flex snap-start" key={exp.name}>
            <div className="mr-[4rem] flex items-center flex-col">
              <div className="w-[1rem] aspect-square bg-text rounded-full"></div>
              {ind != my_journey.length - 1 && (
                <div className="w-[0.25rem] min-h-[20rem] bg-text opacity-[0.25]"></div>
              )}
            </div>
            <div className="relative -top-[1.5rem] h-fit text-textHighlight transition-all duration-150 cursor-pointer hover:scale-[1.05]">
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
