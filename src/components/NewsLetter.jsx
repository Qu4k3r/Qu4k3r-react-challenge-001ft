import React from 'react';

import './NewsLetter.css';

export default function NewsLetter() {
  return (
    <section className="news-letter">
      <div className="text-content">
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <p>
          Leave us your name and email and we’ll update you
          as soon as a share becomes available in your area!
        </p>
      </div>

      <div className="form-container">
        <label htmlFor="input-name">
          <input
            type="text"
            id="name-input"
            placeholder="Your name"
          />
        </label>

        <label htmlFor="input-email">
          <input
            type="email"
            id="email-input"
            placeholder="Your email"
          />
        </label>

        <button type="button">
          Send
        </button>
      </div>

      <hr />
      { /* outro componente */ }
    </section>
  );
}
