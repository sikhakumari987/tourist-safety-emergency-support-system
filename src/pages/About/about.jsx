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

        <div className="intro">
          <p>
            <strong>TouristSafe</strong> is a modern platform designed to make your
            travel experience safe, smart, and worry-free. Whether you are
            exploring a new city or traveling abroad, we help you stay informed,
            connected, and protected — anytime, anywhere.
          </p>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower travelers with real-time safety insights, verified emergency support,
            and digital tools that ensure peace of mind throughout their journey.
          </p>
        </div>

        <div className="why-choose">
          <h2>Why TouristSafe?</h2>
          <ul>
            <li>🔔 <strong>Emergency Alerts:</strong> Get instant updates about unsafe zones and incidents nearby.</li>
            <li>📍 <strong>Nearby Help Centers:</strong> Find hospitals, police stations, and assistance quickly.</li>
            <li>📂 <strong>Document Vault:</strong> Securely store and access travel documents anytime.</li>
            <li>🌐 <strong>Offline Access:</strong> Critical info even without internet connectivity.</li>
            <li>🛡️ <strong>Verified Data:</strong> All emergency data is sourced and validated for reliability.</li>
          </ul>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To build a safer world for travelers — where technology bridges the gap between
            travelers and trusted emergency networks. TouristSafe envisions becoming the global
            standard for tourist safety and digital emergency management.
          </p>
        </div>

        <div className="values">
          <h2>Our Core Values</h2>
          <ul>
            <li>💡 Innovation</li>
            <li>🤝 Trust</li>
            <li>🌍 Global Awareness</li>
            <li>❤️ Empathy</li>
          </ul>
        </div>

        <div className="closing">
          <p>
            With <strong>TouristSafe</strong>, every journey becomes safer, every traveler more confident.
            Your safety is not optional — it’s our mission.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
