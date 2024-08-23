
// src/components/Navbar.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#003366' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Arika le Travels</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Tours</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
