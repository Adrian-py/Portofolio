import Navbar from "@components/Navbar";
import Greeting from "@components/Greeting";
import About from "@components/About";
import Journey from "@/components/Journey";

export default function Home() {
  return (
    <main className="w-full snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <div className="w-[50vw] min-w-[22.5rem] m-auto">
        <Greeting />
        <About />
        <Journey />
      </div>
    </main>
  );
}
