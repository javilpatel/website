import logo from "../assets/logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-2">
    <div className="flex flex-strink-0 items-center">
        <img className="mx-2 w-12 h-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/javil-patel/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        <a href="https://github.com/javilpatel" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
    </div>
  </nav>
  );
};

export default Navbar;
