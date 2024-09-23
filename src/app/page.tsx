"use client";

import Navbar from "@components/Navbar";
import Greeting from "@components/Greeting";
import About from "@components/About";
import Journey from "@components/Journey";
import Contact from "@components/Contact";
import Projects from "@components/Projects";
import { useEffect, useRef, useState } from "react";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string | null>(
    "Greeting"
  );
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentMainRef = mainRef.current;
    if (currentMainRef == null) {
      return;
    }

    const mainScrollListener = () => {
      const currentScrollPosition = currentMainRef.scrollTop;
      const aboutSectionVertOffset =
        document.getElementById("about")?.offsetTop;
      const journeySectionVertOffset =
        document.getElementById("journey")?.offsetTop;
      const projectsSectionVertOffset =
        document.getElementById("projects")?.offsetTop;
      const contactSectionVertOffset =
        document.getElementById("contact")?.offsetTop;

      if (
        contactSectionVertOffset != undefined &&
        currentScrollPosition >= contactSectionVertOffset
      ) {
        setCurrentSection("Contact");
      } else if (
        projectsSectionVertOffset != undefined &&
        currentScrollPosition >= projectsSectionVertOffset
      ) {
        setCurrentSection("Projects");
      } else if (
        journeySectionVertOffset != undefined &&
        currentScrollPosition >= journeySectionVertOffset
      ) {
        setCurrentSection("My Journey");
      } else if (
        aboutSectionVertOffset != undefined &&
        currentScrollPosition >= aboutSectionVertOffset
      ) {
        setCurrentSection("About");
      } else {
        setCurrentSection(null);
      }
    };
    currentMainRef.addEventListener("scroll", mainScrollListener);
    return () => {
      currentMainRef.removeEventListener("scroll", mainScrollListener);
    };
  }, []);

  return (
    <main
      className="w-full h-screen snap-proximity scroll-pt-[10rem] overflow-y-scroll overflow-x-hidden desktopS:snap-y"
      ref={mainRef}
    >
      <Navbar />
      <MobileNav currentSection={currentSection} />
      <div className="block w-full min-w-[22.5rem]">
        <div className="w-full desktopLg:w-[65vw] desktopS:w-[75vw] m-auto float-none">
          <Greeting />
          <About />
          <Journey />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}
