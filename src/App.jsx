import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Philosophy from './pages/Philosophy';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <TopBar />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;