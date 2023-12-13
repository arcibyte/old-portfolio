// App.js
import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
