import React from 'react';
import './Hero.css';
import Header from './Header';

export default function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="header-container">
        <div className="title-container">
          <h3 className="main-title">Easily create or join a local nanny share with Hapu</h3>
          <p className="subtitle">
            Hapu is Airbnb for nanny share.
            Share your home, nanny and costs and create new flexible,
            affordable solutions in childcare.
          </p>

          <div className="player">
            <img src={`${process.env.PUBLIC_URL}/play-button.svg`} alt="Play button" />
            <p>See hapu in action (27 seconds)</p>
          </div>
        </div>

        <div className="card-container">
          <img src={`${process.env.PUBLIC_URL}/card.svg`} alt="Nanny share card" />
        </div>
      </div>
    </section>
  );
}
