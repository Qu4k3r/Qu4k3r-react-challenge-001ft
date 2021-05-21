import React from 'react';
import './Header.css';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="header-container">
        <div className="title-container">
          <h3 className="main-title">Easily create or join a local nanny share with Hapu</h3>
          <p className="subtitle">
            Hapu is Airbnb for nanny share.
            Share your home, nanny and costs and create new flexible,
            affordable solutions in childcare.
          </p>
          <div className="player">
            <img src="/play-button.svg" alt="Play button" />
            <p>See hapu in action (27 seconds)</p>
          </div>
        </div>
        <div className="card-container">
          <img src="/card.svg" alt="Nanny share card" />
        </div>
      </div>
    </header>
  );
}
