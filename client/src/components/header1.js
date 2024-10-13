import React, { useState } from "react";
import picapool_logo from './picapool_logo.png'; // Make sure you have this path
import './header1.css';
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
          <span className="company-name">Picapool</span>
        </a>
      </div>

      {/* Navigation Links */}
      <nav className={`full-screen-menu1 ${isOpen ? "active" : ""}`}>
        <a href="/" className="nav-item">Home</a>
        <a href="/about-us" className="nav-item">About Us</a>
        <a href="/how-it-works" className="nav-item">How It Works</a>
        <a href="/partners" className="nav-item">Partners</a>
        <a href="/explore" className="nav-item">Explore</a>
        <a href="/picathon" className="nav-item">Picathon</a>
      </nav>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
