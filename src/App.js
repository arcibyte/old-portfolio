// App.js
import React from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import Stack from './components/sections/Stack';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Stack />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
