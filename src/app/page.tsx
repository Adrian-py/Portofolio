import Navbar from "@components/Navbar";
import Greeting from "@components/Greeting";
import About from "@components/About";
import Journey from "@components/Journey";
import Contact from "@components/Contact";
import Projects from "@components/Projects";

export default function Home() {
  return (
    <main className="w-full h-screen snap-proximity scroll-pt-[10rem] overflow-y-scroll overflow-x-hidden desktopS:snap-y">
      <Navbar />
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
