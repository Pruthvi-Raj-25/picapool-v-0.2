import React, { useState } from "react";
import picapool_logo from './picapool_logo.png'; // Make sure you have this path
import './header.css';
// import './header-phone.css'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo-section">
        <a href="/" className="logo">
          <img src={picapool_logo} alt="Picapool Logo" className="logo-image" /> 
        </a>
          <a href= '/' className="company-name">Picapool</a>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="/" className={`nav-item ${isOpen ? "active" : ""}`}>Home</a>
        <a href="/about-us" className="nav-item">About Us</a>
        <a href="/how-it-works" className="nav-item">How It Works</a>
        <a href="/partners" className="nav-item">Partners</a>
        <a href="/explore" className="nav-item">Explore</a>
        <a href="/picathon" className="nav-item">Picathon</a>
      </nav>

      {/* Hamburger Menu */}
      <div className= {`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
