import React from 'react';

import './AppDescription.css';

export default function AppDescription() {
  return (
    <section className="description-container">
      <div className="text-container">
        <h3>A framework built for the long term</h3>
        <p>
          Childcare is for the long term. And you need a framework
          you can count on that gives your share long term viability and
          success. That’s why we’ve defined Hapu around our three tribal
          principles; clearly defined process, transparency over money
          and equality of participation.
        </p>
        <u>Read how Hapu’s tribal background defines our app </u>
      </div>
      <img src="/app-image.svg" alt="Handling your bills on our App" />
    </section>
  );
}
