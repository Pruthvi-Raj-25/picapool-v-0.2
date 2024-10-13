import React from 'react';
import './App.css';
import Header from './components/header';
// import Header from './components/header1';
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './homepage1';

function App() {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/picathon" element={<Picathon />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

// Define each section as a component

const AboutUs = () => <h1>About Us</h1>;
const HowItWorks = () => <h1>How It Works</h1>;
const Partners = () => <h1>Partners</h1>;
const Explore = () => <h1>Explore</h1>;
const Picathon = () => <h1>Picathon</h1>;

export default App;
