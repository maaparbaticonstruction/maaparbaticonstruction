import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Infrastructure from './pages/Infrastructure';
import SideNav from './components/SideNav'; // Import SideNav

function App() {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen size is mobile
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage side nav visibility

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev); // Toggle side nav visibility
  };

  return (
    <Router>
      <Header onMenuClick={toggleNav} /> {/* Always show header */}

      {/* Render side nav for mobile view */}
      {isMobile && <SideNav open={isNavOpen} onClose={toggleNav} />} 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
