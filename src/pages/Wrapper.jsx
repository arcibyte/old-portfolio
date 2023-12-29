import React from 'react';
import { Helmet } from "react-helmet";
import Hero from '../components/sections/Hero';
import Stack from '../components/sections/Stack';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const SectionsContainer = () => {
  return (
    <div>
       <Helmet>
        <title>Jhon | Software developer</title>
      </Helmet>
      <Hero />
      <Stack />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default SectionsContainer;