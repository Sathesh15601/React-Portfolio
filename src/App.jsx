import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      throttleDelay: 100, // Optimizes recalculations for performance
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="overflow-hidden">
        <Hero />
      </div>
      <div className="overflow-hidden">
        <About />
      </div>
      <div className="overflow-hidden">
        <Skills />
      </div>
      <div className="overflow-hidden">
        <Projects />
      </div>
      <div className="overflow-hidden">
        <Contact />
      </div>
    </div>
  );
};

export default App;
