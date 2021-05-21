import React from 'react';

import './Form.css';

export default function Form() {
  return (
    <section>
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
      <hr />
      <div>
        <label htmlFor="radio-1">
          <input type="radio" id="radio-1" />
          <div>
            <label htmlFor="input-1">
              <input type="number" id="input-1" />
            </label>
          </div>
          <input type="radio" id="radio-2" />
        </label>
      </div>
    </section>
  );
}
