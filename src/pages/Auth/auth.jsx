import React, { useState } from 'react';
import './auth.css';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('Tourist');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', role: 'Tourist' });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${activeTab}`);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert(`Registered as ${registerData.role}`);
  };

  return (
    <div className="auth-container">
      <Navbar/>
      {/* Tabs */}
      <div className="auth-tabs">
        {['Tourist', 'Service Provider', 'Admin'].map((role) => (
          <button
            key={role}
            className={activeTab === role ? 'active' : ''}
            onClick={() => setActiveTab(role)}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Login Form */}
      <div className="auth-form">
        <h2>Login as {activeTab}</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Register Form */}
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerData.name}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerData.email}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerData.password}
            onChange={handleRegisterChange}
            required
          />
          <select
            name="role"
            value={registerData.role}
            onChange={handleRegisterChange}
          >
            <option value="Tourist">Tourist</option>
            <option value="Provider">Service Provider</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
};

export default Auth;