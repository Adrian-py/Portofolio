export default function Navbar() {
  return (
    <nav className="mt-[4rem] sticky top-0 w-screen h-[4rem] flex items-center backdrop-blur-md transition-all ease-in-out duration-150">
      <ul className="m-auto w-fit flex gap-[4vw]">
        <li>
          <a
            href="#about"
            className="transition-all duration-150 ease-in-out hover:text-textHighlight hover:scale-[1.1]"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="transition-all duration-150 ease-in-out hover:text-textHighlight hover:scale-[1.1]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition-all duration-150 ease-in-out hover:text-textHighlight hover:scale-[1.1]"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
