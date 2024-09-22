import Timeline from "./Journey/Timeline";
import ExternalLinkIcon from "@assets/ExternalLinkIcon.svg";

export default function Journey() {
  return (
    <section
      className="pt-[10rem] px-[10%]  w-full flex flex-col items-start justify-between gap-[1.5rem] tabletHor:flex-row tabletHor:pt-[20rem] desktopS:px-0"
      id="journey"
    >
      <div className="top-[4.5rem] min-w-[30%] h-fit font-inter font-bold whitespace-nowrap tabletHor:sticky">
        <h2 className="mb-[1rem] text-left text-inter text-[2.5rem] text-primary desktopS:text-[3rem] desktopXl:text-[4rem] snap-start">
          My Journey
        </h2>
        <a
          className="w-fit flex items-center gap-[0.5rem] transition-all duration-150 ease-in-out hover:text-textHighlight"
          href="/resume.pdf"
        >
          <p className="">View Full Résumé</p>
          <ExternalLinkIcon />
        </a>
      </div>
      <Timeline />
    </section>
  );
}
