"use client";

import SocialLinks from "@components/Greeting/SocialLinks";
import DownArrows from "@assets/ArrowDownIcon.svg";

export default function Greeting() {
  return (
    <section className="pt-[20vh] w-full flex flex-col items-center justify-center snap-start">
      <h2 className="text-[0.7rem] desktopS:text-[1rem]">Hello There 👋</h2>
      <h1 className="text-[2rem] mb-[0.75rem] font-bold font-inter desktopS:text-[4rem] mobileL:text-[2.5rem]">
        I&apos;m <span className="text-primary">Adrian Hartanto</span>
      </h1>
      <h2 className="mb-[1.5rem] text-[0.7rem] text-center desktopS:text-[1rem]">
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
