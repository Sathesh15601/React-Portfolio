import Lottie from "lottie-react";
import SkillsAnimation from "./../assets/Skills.json";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="background3 h-full text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-8 md:mb-0" data-aos="fade-left">
            <Lottie
              animationData={SkillsAnimation}
              loop={true}
              className="w-72 h-72 md:w-96 md:h-96"
            />
          </div>

          <div className="flex-1">
            <p className="text-lg mb-8 text-green-800" data-aos="fade-right">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a foundation in both
              frontend and I will enhance my backend technologies, I strive to
              create seamless and efficient user experiences.
            </p>

            <div className="space-y-6" data-aos="fade-right">
              <div className="flex items-center text-5xl mb-2">
                <FaHtml5 className="mr-4" />
                <div className="grow bg-green-300 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-green-900 h-3 rounded-full w-11/12 transition-transform duration-300 hover:scale-105"></div>
                </div>
              </div>

              <div className="flex items-center text-5xl mb-2">
                <FaCss3Alt className="mr-4" />
                <div className="grow bg-green-300 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-green-900 h-3 rounded-full w-11/12 transition-transform duration-300 hover:scale-105"></div>
                </div>
              </div>

              <div className="flex items-center text-5xl mb-2">
                <FaBootstrap className="mr-4" />
                <div className="grow bg-green-300 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-green-900 h-3 rounded-full w-9/12 transition-transform duration-300 hover:scale-105"></div>
                </div>
              </div>

              <div className="flex items-center text-5xl mb-2">
                <RiTailwindCssFill className="mr-4" />
                <div className="grow bg-green-300 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-green-900 h-3 rounded-full w-8/12 transition-transform duration-300 hover:scale-105"></div>
                </div>
              </div>

              <div className="flex items-center text-5xl mb-2">
                <FaReact className="mr-4" />
                <div className="grow bg-green-300 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-green-900 h-3 rounded-full w-8/12 transition-transform duration-300 hover:scale-105"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
