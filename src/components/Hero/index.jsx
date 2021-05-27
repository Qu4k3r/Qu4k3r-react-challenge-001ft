import React, { useEffect, useState } from 'react';
import './Hero.css';
import Header from '../Header';

export default function Hero() {
  const [ABTest, setABTest] = useState(localStorage.getItem('A/B Test') || '');

  useEffect(() => {
    const versions = ['A', 'B'];
    if (!ABTest.length) {
      const randomIndex = Math.floor(Math.random() * 2);
      localStorage.setItem('A/B Test', versions[randomIndex]);
      setABTest(localStorage.getItem('A/B Test'));
    }
  }, []);

  return (
    <section className="hero">
      <Header />
      <div className="header-container">
        <div className="title-container">
          <h2 className="main-title">
            {
              ABTest === 'A'
                ? 'Easily create or join a local nanny share with Hapu'
                : 'Create the childcare you need at a price you can afford'
            }
          </h2>
          <p className="subtitle">
            {
              ABTest === 'A'
                ? 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.'
                : 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.'
            }
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
