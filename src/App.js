import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Navbar from './components/layout/navbar/Navbar';
import Wrapper from './pages/Wrapper'; 
import Footer from './components/layout/Footer';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
