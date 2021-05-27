import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <section className="footer-container">
      <div className="footer">
        <h3>Become a nanny share host</h3>
        <p>
          Takes less than 5 minutes to get started
        </p>
        <button type="button">
          <img src={`${process.env.PUBLIC_URL}/calendar-icon.svg`} alt="calendar icon" />
          <div className="btn-text">
            <p>Create Your Nanny Share</p>
            <p>Takes less than 5 minutes</p>
          </div>
        </button>
        <p><u>Or browse local nanny-shares</u></p>
      </div>
      <section className="footer-navbar">
        <img className="item" src={`${process.env.PUBLIC_URL}/hapu-logo.svg`} alt="hapu logo" />
        <nav className="navbar item">
          <ul>
            <li>Share Your Nanny</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Terms & Privacy</li>
          </ul>
        </nav>
        <div className="contact item">
          <img src={`${process.env.PUBLIC_URL}/facebook-logo.svg`} alt="facebook logo" />
          <img src={`${process.env.PUBLIC_URL}/twitter-logo.svg`} alt="twitter logo" />
          <img src={`${process.env.PUBLIC_URL}/instagram-logo.svg`} alt="instagram logo" />
        </div>
      </section>
      <div className="border-page" />
      <div className="copyright">
        <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
      </div>
    </section>
  );
}
