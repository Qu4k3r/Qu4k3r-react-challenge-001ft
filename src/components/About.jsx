import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="text-container">
          <h3>Share your home, nanny and costs</h3>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be,
            well, fantastic?!
            If only it was easy to connect with other parents to share your costs?
            Well now it is, with Hapu.
            {' '}
            <u>Hapu means tribe</u>
            {' '}
            and it’s our foundational 3 tribal principles that empowers you to create
            and manage your own tribe.
            A tribe that together has the power to create new affordable solutions in childcare
            that work for you and your community.
          </p>
          <u>Ready to get started?</u>
        </div>
        <div className="img-container">
          <img src="/nanny-share-image.svg" alt="connect with other parents to share your costs" />
        </div>
      </div>
    </section>
  );
}
