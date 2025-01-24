import HeroImage from "./../assets/ProfileLogo.png";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="background1 from-green-900 to-black text-white py-16 mt-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left">
        <div className="md:w-1/2 p-6 overflow-hidden" data-aos="fade-left">
          <img
            src={HeroImage}
            alt="Profile picture of SathesHKumaR"
            className="mx-auto md:ml-auto object-cover transform transition-transform duration-500 hover:scale-110 rounded-full animate-float"
          />
        </div>

        <div
          className="md:w-1/2 mb-8 p-2 overflow-hidden"
          data-aos="fade-right"
        >
          <div className="flex justify-center md:justify-start gap-4 mb-4 text-4xl ">
            <a
              href="https://www.linkedin.com/in/satheshvpm15601/"
              className="hover:text-green-400"
              target="_blank"
            >
              <IoLogoLinkedin />
            </a>
            <a href="https://github.com/Sathesh15601" target="_blank">
              <FaGithubSquare />
            </a>
          </div>

          <h1 className="text-3xl font-bold animate-float text-green-950 md:text-5xl">
            Hi, I'm{" "}
            <span
              className="text-transparent text-4xl bg-clip-text bg-gradient-to-l from-green-900 to-green-500 md:text-7xl "
              id="Name"
            >
              SathesHKumaR
            </span>
            , Front-End Developer
          </h1>
          <p className="mt-4 text-xl text-green-700">
            I specialize in building modern and responsive web applications.
          </p>

          <div className="mt-10">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1v1XJSJBatunJB7IlaQciMFQ3iHhW6ReF/view?usp=sharing"
              className="bg-green-900 text-white inline-block transform transition-transform duration-300 hover: active:bg-green-800 hover:bg-green-600 hover:scale-105 px-4 py-2 rounded "
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
