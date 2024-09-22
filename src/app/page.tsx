import Navbar from "@components/Navbar";
import Greeting from "@components/Greeting";
import About from "@components/About";
import Journey from "@components/Journey";
import Contact from "@components/Contact";
import Projects from "@components/Projects";

export default function Home() {
  return (
    <main className="w-full snap-y snap-proximity scroll-pt-[10rem] h-screen overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <div className="w-[50vw] min-w-[22.5rem] m-auto">
        <Greeting />
        <About />
        <Journey />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
