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
      className="pt-[20rem] w-full max-w-[50vw] flex items-start justify-between gap-[1.5rem] snap-start"
    >
      <h2 className="sticky top-[4.5rem] min-w-[30%] h-fit text-left text-inter text-[4rem] text-primary font-inter font-bold whitespace-nowrap">
        Projects
      </h2>
      <div className="flex flex-col gap-[2rem] grow">
        {projectsData.map((project) => {
          return (
            <div
              className="transition-all duration-150 ease-in-out hover:scale-[1.025]"
              key={project.name}
            >
              <h4
                className="w-fit text-[2rem] flex items-center gap-[0.5rem] font-bold cursor-pointer transition-all duration-150 ease-in-out hover:text-textHighlight"
                onClick={() => window.open(project.repository_link)}
              >
                {project.name} <ExternalLinkIcon />
              </h4>
              <p className="">{project.description}</p>
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
