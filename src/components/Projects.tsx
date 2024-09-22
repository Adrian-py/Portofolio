"use client";

import ProjectData from "@data/projects_data.json";
import ExternalLinkIcon from "@assets/ExternalLinkIcon.svg";
import Tag from "./Projects/Tag";

interface ProjectInterface {
  name: string;
  tags: string[];
  repository_link: string;
  description: string;
}

const projectsData: ProjectInterface[] = ProjectData;

export default function Projets() {
  return (
    <section
      id="projects"
      className="pt-[10rem] px-[10%] w-full flex flex-col items-start justify-between gap-[1.5rem] snap-start tabletHor:flex-row tabletHor:pt-[20rem] desktopS:px-0"
    >
      <h2 className="top-[4.5rem] min-w-[30%] h-fit text-left text-inter text-[2.5rem] text-primary font-inter font-bold whitespace-nowrap desktopS:text-[3rem] desktopXl:text-[4rem] tabletHor:sticky">
        Projects
      </h2>
      <div className="flex flex-col gap-[2rem] grow">
        {projectsData.map((project) => {
          return (
            <div
              className="w-full transition-all duration-150 ease-in-out hover:scale-[1.025]"
              key={project.name}
            >
              <h4
                className="w-fit text-[1.5rem] flex items-center gap-[0.5rem] font-bold cursor-pointer transition-all duration-150 ease-in-out hover:text-textHighlight tabletVert:text-[2rem]"
                onClick={() => window.open(project.repository_link)}
              >
                {project.name} <ExternalLinkIcon />
              </h4>
              <p className="text-[0.75rem] tabletHor:text-[1rem]">
                {project.description}
              </p>
              <div className="mt-[1rem] flex gap-[1rem] flex-wrap">
                {project.tags.map((tag, index) => (
                  <Tag name={tag} key={`${tag}-${index}`} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
