import LinkedinIcon from "@assets/LinkedinIcon.svg";
import GithubIcon from "@assets/GithubIcon.svg";
import EmailIcon from "@assets/EmailIcon.svg";

export default function SocialLinks() {
  return (
    <div className="flex gap-[1.5rem] text-primary">
      <a
        href="https://www.linkedin.com/in/adrian-hartanto-dev/"
        className="w-[2.5rem] p-[0.6rem] aspect-square border-[1px] border-primary rounded-full flex items-center justify-center transition-all duration-150 ease-in-out hover:bg-primary hover:text-background desktopS:w-[3rem] desktopS:border-[1px]"
      >
        <LinkedinIcon className="w-full" />
      </a>
      <a
        href="https://github.com/Adrian-py"
        className="w-[2.5rem] p-[0.6rem] aspect-square border-[1px] border-primary rounded-full flex items-center justify-center transition-all duration-150 ease-in-out hover:bg-primary hover:text-background desktopS:w-[3rem] desktopS:border-[1px]"
      >
        <GithubIcon className="cursor-pointer" />
      </a>
      <a
        href="mailto:adrianhartanto@gmail.com"
        className="w-[2.5rem] p-[0.6rem] aspect-square border-[1px] border-primary rounded-full flex items-center justify-center transition-all duration-150 ease-in-out hover:bg-primary hover:text-background desktopS:w-[3rem] desktopS:border-[1px]"
      >
        <EmailIcon className="cursor-pointer" />
      </a>
    </div>
  );
}
