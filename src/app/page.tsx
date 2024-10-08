"use client";

import { useEffect, useRef, useState } from "react";

import Navbar from "@components/Navbar";
import MobileNav from "@components/MobileNav";
import Greeting from "@components/Greeting";
import About from "@components/About";
import Journey from "@components/Journey";
import Contact from "@components/Contact";
import Projects from "@components/Projects";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentMainRef = mainRef.current;
    if (currentMainRef == null) {
      return;
    }

    const mainScrollListener = () => {
      const windowHeight = window.screen.height;
      const currentScrollPosition = currentMainRef.scrollTop;
      const currentVisibleSectionThreshold =
        currentScrollPosition + windowHeight / 2;
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
        currentVisibleSectionThreshold >= contactSectionVertOffset
      ) {
        setCurrentSection("Contact");
      } else if (
        projectsSectionVertOffset != undefined &&
        currentVisibleSectionThreshold >= projectsSectionVertOffset
      ) {
        setCurrentSection("Projects");
      } else if (
        journeySectionVertOffset != undefined &&
        currentVisibleSectionThreshold >= journeySectionVertOffset
      ) {
        setCurrentSection("My Journey");
      } else if (
        aboutSectionVertOffset != undefined &&
        currentVisibleSectionThreshold >= aboutSectionVertOffset
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
