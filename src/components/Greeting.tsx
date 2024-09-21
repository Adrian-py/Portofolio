"use client";

import SocialLinks from "@components/Greeting/SocialLinks";
import DownArrows from "@assets/ArrowDownIcon.svg";

export default function Greeting() {
  return (
    <section className="pt-[20vh] w-full flex flex-col items-center justify-center snap-start">
      <h2 className="">Hello There 👋</h2>
      <h1 className="mb-[0.75rem] font-bold font-inter text-[4rem]">
        I&apos;m <span className="text-primary">Adrian Hartanto</span>
      </h1>
      <h2 className="mb-[1.5rem] text-center">
        Aspiring Engineer from Indonesia, with skills in Web Development,
        <br />
        Mobile Development, and Blockchain.
      </h2>

      <SocialLinks />

      <button
        className="mt-[8rem] cursor-pointer"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          aboutSection?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <DownArrows />
      </button>
    </section>
  );
}
