export default function About() {
  return (
    <section
      className="pt-[10rem] px-[10%] w-full flex flex-col items-start justify-between gap-[1.5rem] tabletHor:flex-row tabletHor:pt-[20rem] desktopS:px-0"
      id="about"
    >
      <h2
        className="min-w-[30%] w-fit text-left text-inter text-[2.5rem] text-primary font-inter font-bold whitespace-nowrap snap-start desktopS:text-[3rem] desktopXl:text-[4rem]"
        id="about-title"
      >
        About Me
      </h2>
      <p className="min-w-[60%] text-justify grow desktopS:text-[1.25rem]">
        My journey started in 2020, initially learning about web development
        particularly frontend development utilizing plain HTML, CSS, and
        Javascript. Overtime, I started to get interested in algorithms, where I
        started solving algorithm problems online in sites such as Codeforces
        and Leetcode on the side. Gradually, I explored various fields of
        Computer Science,{" "}
        <span className="font-bold text-primary">computer networking</span>,{" "}
        <span className="font-bold text-primary">artificial intelligence</span>,
        and <span className="font-bold text-primary">blockchain</span>. Come to
        today, I have had the privillege to work on several active projects in
        several software companies in Indonesia.
        <br />
        <br />
        Most recently, my main focus has been finishing my research for my final
        thesis. Focusing on blockchain on its possible implementation in
        organizational settings. Outside of programming, I also enjoy playing
        badminton, going to the gym, playing video games, and hanging out with
        my family and friends.
      </p>
    </section>
  );
}
