import { React } from 'react';
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
// import Quote from "../../components/Quote";

export default function Home() {
  
    return (
     <>
      <About />
      <Skills />
      <Projects />
      {/* <Quote /> */}
      <Contact />
     </>
    );
};
