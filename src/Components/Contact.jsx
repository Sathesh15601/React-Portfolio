import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c5d15ea4-f402-4778-bfc9-5f913019092a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="background5 text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1 overflow-hidden" data-aos="fade-left">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-green-900 mb-4">
              Let's Talk
            </h3>
            <p className="mb-4">
              I'm ready to start as a Front-End Developer, and I will enhance my
              skills to become a Full-Stack Developer.
            </p>
            <div className="mb-4 flex items-center">
              <MdEmail className="text-2xl mr-3" />
              <a
                href="mailto:sathesh15601@gmail.com"
                className="hover:underline"
              >
                sathesh15601@gmail.com
              </a>
            </div>
            <div className="mb-4 flex items-center">
              <FaPhoneAlt className="text-2xl mr-3" />
              <span>9791316117</span>
            </div>
            <div className="mb-4 flex items-center">
              <MdLocationOn className="text-2xl mr-3" />
              <span>Villupuram, Tamil Nadu 605602</span>
            </div>
          </div>

          <div
            className="flex-1 w-full ml-3 overflow-hidden"
            data-aos="fade-right"
          >
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 rounded bg-green-200 border border-green-950 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded bg-green-200 border border-green-950 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full p-2 rounded bg-green-200 border border-green-950 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                type="submit"
                className="bg-green-900 text-white inline-block transform transition-transform duration-300 hover: active:bg-green-800 hover:bg-green-600 hover:scale-105 px-4 py-2 rounded "
              >
                Send
              </button>
              <div className="mt-2">
                {result && <span className="text-green-400">{result}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SathesHKumaR. All rights reserved.
        </p>
        <div className=" flex mt-2 justify-center ">
          Follow me on{" "}
          <a
            href="https://www.linkedin.com/in/satheshvpm15601/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://github.com/Sathesh15601"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1"
          >
            <FaGithubSquare />
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://github.com/Sathesh15601/React-Portfolio"
            target="_blank"
            className="bg-green-900 text-white inline-block transform transition-transform duration-300 hover: active:bg-green-800 hover:bg-green-600 hover:scale-105 px-4 py-2 rounded "
          >
            Source Code
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
