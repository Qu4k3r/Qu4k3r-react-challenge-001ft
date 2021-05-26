import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="navbar">
      <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />

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
    </header>
  );
}
