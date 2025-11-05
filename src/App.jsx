import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/landing';
import About from './pages/About/about';
import Help from './pages/Help/help';
import Contact from './pages/Contact/contact';
import Auth from './pages/Auth/auth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/auth" element={<Auth />} />
        
      </Routes>
    </Router>
  );
};

export default App;