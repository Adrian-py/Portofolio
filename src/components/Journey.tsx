import Timeline from "./Journey/Timeline";
import ExternalLinkIcon from "@assets/ExternalLinkIcon.svg";

export default function Journey() {
  return (
    <section
      className="pt-[20rem] w-full flex items-start justify-between gap-[1.5rem]"
      id="journey"
    >
      <div className="sticky top-[4.5rem] min-w-[30%] h-fit font-inter font-bold whitespace-nowrap">
        <h2 className="mb-[1rem] text-left text-inter text-[4rem] text-primary">
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
