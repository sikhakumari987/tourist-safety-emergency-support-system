import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';
import {NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <img src={logo} alt="Logo" className="logo" />
        <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
          <span>Tourist Safe</span>
        </NavLink>
      </div>
      <div className="nav-links">
             <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="fas fa-info-circle" aria-hidden="true"></i>
          <span>About</span>
        </NavLink>

        <NavLink to="/help" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="fas fa-question-circle" aria-hidden="true"></i>
          <span>Help</span>
        </NavLink>

        <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <span>Contact</span>
        </NavLink>

        <NavLink to="/auth" className="nav-link btn-login">
          <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
          <span>Login</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;