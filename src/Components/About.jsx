import Lottie from "lottie-react";
import AboutAnimation from "./../assets/About me.json";

const About = () => {
  return (
    <div className="background2 h-full text-white py-20 w-full" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1 overflow-hidden" data-aos="fade-right">
            <p className="text-lg mb-4 ">
              I am a passionate front-end developer focused on building modern
              and responsive web applications. With a strong foundation in
              front-end technologies, I strive to create seamless and efficient
              user experiences.
            </p>
            <p className="text-lg mb-4">
              I have experience with React.js, Tailwind CSS, and am always
              excited to learn new tools and techniques to improve my skills.
            </p>
            <h1 className=" text-2xl">Experiences in Different industries</h1>
            <li>DECCAN I SERVICES PVT LTD</li>
            <p>I worked as a Process Associate</p>
            <li>GRT Jewellery</li>
            <p>I worked as a Sales Executive</p>
          </div>
          <div
            className="mb-7 md:mb-0 w-full md:w-1/2 overflow-hidden"
            data-aos="fade-left"
          >
            <Lottie animationData={AboutAnimation} loop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
