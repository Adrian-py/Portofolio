"use client";

export default function MobileNav({
  currentSection,
}: {
  currentSection: string | null;
}) {
  return (
    <nav
      className={`mt-[4rem] pl-[10%] sticky top-0 w-screen h-[4rem] flex items-center font-bold backdrop-blur-md transition-all ease-in-out duration-250 block tabletVert:hidden z-100 ${
        currentSection ? "opacity-100" : "opacity-0"
      }`}
    >
      {currentSection}
    </nav>
  );
}
