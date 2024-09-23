import EmailIcon from "@assets/EmailIcon.svg";
import LinkedinIcon from "@assets/LinkedinIcon.svg";
import GithubIcon from "@assets/GithubIcon.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-[10rem] px-[10%] pb-[15rem] w-full flex flex-col items-start justify-between gap-[1.5rem] snap-start tabletHor:flex-row tabletHor:pt-[20rem] tabletHor:flex-row tabletHor:pt-[20rem] tabletHor:pb-[20rem] desktopS:px-0"
    >
      <h2 className="min-w-[30%] h-fit text-left text-inter text-[2.5rem] text-primary font-inter font-bold whitespace-nowrap desktopS:text-[3rem] desktopXl:text-[4rem]">
        Contact Me
      </h2>

      <div className="">
        <span className="font-bold text-[1.5rem] transition-all duration-150 hover:text-textHighlight tabletHor:text-[2rem]">
          Let’s Connect!
        </span>
        <p className="mt-[0.5rem] mb-[1rem] text-justify">
          Whether you’d like to collaborate on a project, discuss tech ideas, or
          just say hello, feel free to reach out. I’m always open to new
          opportunities and conversations. Looking forward to hearing from you!
        </p>
        <div className="flex flex-col gap-[1.5rem]">
          <div className="w-fit flex items-center gap-[1rem] transition-all duration-150 hover:text-textHighlight hover:drop-shadow-textGlow hover:scale-[1.025]">
            <EmailIcon className="h-[1rem] tabletHor:h-[1.5rem]" />
            <a
              className="leading-6 whitespace-nowrap overflow-hidden text-ellipsis"
              href="mailto:adrianhartanto@gmail.com"
            >
              adrianhartanto@gmail.com
            </a>
          </div>
          <div className="w-fit flex items-center gap-[1rem] transition-all duration-150 hover:text-textHighlight hover:drop-shadow-textGlow hover:scale-[1.025]">
            <LinkedinIcon className="h-[1rem] tabletHor:h-[1.5rem]" />
            <a
              className="leading-6 whitespace-nowrap overflow-hidden text-ellipsis"
              href="https://www.linkedin.com/in/adrian-hartanto-dev/"
            >
              linkedin.com/in/adrian-hartanto-dev/
            </a>
          </div>
          <div className="w-fit flex items-center gap-[1rem] transition-all duration-150 hover:text-textHighlight hover:drop-shadow-textGlow hover:scale-[1.025]">
            <GithubIcon className="h-[1rem] tabletHor:h-[1.5rem]" />
            <a
              className="leading-6 whitespace-nowrap overflow-hidden text-ellipsis"
              href="https://github.com/Adrian-py"
            >
              @Adrian-py
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
