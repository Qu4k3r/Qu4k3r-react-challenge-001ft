import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.svg" alt="logo" />

      <div className="nav-container">
        <div className="navlinks">
          <ul>
            <li>Create Your Nanny Share</li>
            <li>Browse Shares</li>
            <li>Our Story</li>
          </ul>
        </div>

        <div className="button-container">
          <button type="button">Become a Nanny Share Host</button>
          <button type="button">Sign in</button>
        </div>

      </div>
    </nav>
  );
}
