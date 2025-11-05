import React from 'react';
import './about.css';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const About = () => {
  return (
    <div className="about-container">
      <Navbar />

      {/* About Section */}
      <section className="about-section" aria-labelledby="about-title">
        <h1 id="about-title">About TouristSafe</h1>
        <hr />

        <div className="mission">
          <h2>Mission</h2>
          <p>Empower tourists with real-time safety and emergency support.</p>
        </div>

        <div className="problem">
          <h2>Problem Statement</h2>
          <ul>
            <li>Unsafe travel zones</li>
            <li>Lack of verified help</li>
            <li>No centralized emergency system</li>
          </ul>
        </div>

        <div className="tech">
          <h2>Tech Stack</h2>
          <p>React, Node.js, MongoDB</p>
        </div>

        <div className="credits">
          <h2>Built by</h2>
          <p>Sikha for [Competition Name]</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
};

export default About;
