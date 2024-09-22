import EmailIcon from "@assets/EmailIcon.svg";
import LinkedinIcon from "@assets/LinkedinIcon.svg";
import GithubIcon from "@assets/GithubIcon.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-[20rem] pb-[40rem] w-full max-w-[50vw] flex items-start justify-between gap-[1.5rem] snap-start"
    >
      <h2 className="min-w-[30%] h-fit text-left text-inter text-[4rem] text-primary font-inter font-bold">
        Contact Me
      </h2>

      <div className="">
        <span className="font-bold text-[2rem]">Let’s Connect!</span>
        <p className="mt-[0.5rem] mb-[1rem]">
          Whether you’d like to collaborate on a project, discuss tech ideas, or
          just say hello, feel free to reach out. I’m always open to new
          opportunities and conversations. Looking forward to hearing from you!
        </p>
        <div className="flex gap-[2rem]">
          <div className="flex flex-col gap-[1rem]">
            <EmailIcon className="h-[1.5rem]" />
            <LinkedinIcon className="h-[1.5rem]" />
            <GithubIcon className="h-[1.5rem]" />
          </div>
          <div className="flex flex-col gap-[1rem]">
            <a
              className="leading-6 transition-all duration-150 ease-in-out hover:text-textHighlight"
              href="mailto:adrianhartanto@gmail.com"
            >
              adrianhartanto@gmail.com
            </a>
            <a
              className="leading-6 transition-all duration-150 ease-in-out hover:text-textHighlight"
              href="https://www.linkedin.com/in/adrian-hartanto-dev/"
            >
              linkedin.com/in/adrian-hartanto-dev/
            </a>
            <a
              className="leading-6 transition-all duration-150 ease-in-out hover:text-textHighlight"
              href="https://github.com/Adrian-py"
            >
              @Adrian-py
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
