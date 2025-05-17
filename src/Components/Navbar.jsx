import { useState } from "react";
import Lottie from "lottie-react";
import ReactAnimation from "./../assets/React.json";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import "./../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className=" background  fixed w-full z-20 " id="navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4 md:gap-6">
          <a href="#">
            <Lottie
              animationData={ReactAnimation}
              loop={true}
              className="w-10 md:w-10 lg:w-15"
            />
          </a>

          <div className="flex md:order-2 items-center gap-4 md:gap-6">
            <a
              href="#contact"
              type="button"
              className="bg-green-900 text-white inline-block transform transition-transform duration-300 hover: active:bg-green-800 hover:bg-green-800 hover:scale-105 px-4 py-2 rounded "
            >
              Connect with Me
            </a>

            <button
              type="button"
              className="text-4xl md:hidden "
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMenuOpen ? <IoClose /> : <RiMenu3Fill />}
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col justify-center p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="text-lg p-2  text-green inline-block transform transition-transform duration-500 w-full md: hover:text-white hover:bg-green-800  hover:scale-105  rounded active:bg-green-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg p-2  text-green inline-block transform transition-transform duration-500 w-full md: hover:text-white hover:bg-green-800  hover:scale-105  rounded active:bg-green-500"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-lg p-2  text-green inline-block transform transition-transform duration-500 w-full md: hover:text-white hover:bg-green-800  hover:scale-105  rounded active:bg-green-500"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-lg p-2  text-green inline-block transform transition-transform duration-500 w-full md: hover:text-white hover:bg-green-800  hover:scale-105  rounded active:bg-green-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg p-2  text-green inline-block transform transition-transform duration-500 w-full md: hover:text-white hover:bg-green-800  hover:scale-105  rounded active:bg-green-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
