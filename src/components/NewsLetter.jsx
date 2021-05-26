import React from 'react';

import './NewsLetter.css';

export default function NewsLetter() {
  return (
    <section className="newsletter">
      <div className="text-container">
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <p>
          Leave us your name and email and we’ll update you
          as soon as a share becomes available in your area!
        </p>
      </div>

      <div className="form-container">
        <form className="form">
          <input
            type="text"
            id="name-input"
            placeholder="Your name"
          />

          <input
            type="email"
            id="email-input"
            placeholder="Your email"
          />
        </form>

        <button type="button">
          Send
        </button>
      </div>
      <div className="border-page" />
    </section>
  );
}
