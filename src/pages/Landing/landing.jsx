import React from "react";
import "./landing.css";
import Navbar from "../../common/Navbar";

const Landing = () => {
  const features = [
    {
      title: "Nearby Help Centers",
      desc: "Find assistance near your location — shelters, first aid, and more.",
      color: "teal",
      icon: "📍",
    },
    {
      title: "Emergency Alerts",
      desc: "Real-time safety updates to keep you informed and protected.",
      color: "orange",
      icon: "🚨",
    },
    {
      title: "Document Vault",
      desc: "Upload and securely store your important travel documents.",
      color: "purple",
      icon: "🔒",
    },
  ];

  return (
    <div className="landing-container">
      <Navbar/>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to SafeJourney</h1>
        <p>Empowering your travels with safety, convenience, and trust.</p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        {features.map((feature, index) => (
          <div key={index} className={`feature-card ${feature.color}`}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            <button className="card-btn">Explore</button>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to make your journey safer?</h2>
        <button className="cta-btn">Join Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 SafeJourney. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
