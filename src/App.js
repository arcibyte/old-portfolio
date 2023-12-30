import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Navbar from './layout/navbar/Navbar';
import Wrapper from './pages/Wrapper';
import Blog from './pages/blog/Blog';
import Footer from './layout/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/blog" element={<Blog />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
