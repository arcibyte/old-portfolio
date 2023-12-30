import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Stack from "../components/Stack";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Wrapper = () => {
  return (
    <div>
      <Helmet>
        <title>Jhon - developer</title>
      </Helmet>
      <Hero />
      <Stack />
      <About />
      <Experience />
      <Projects/>
      <Contact />
    </div>
  );
};

export default Wrapper;
