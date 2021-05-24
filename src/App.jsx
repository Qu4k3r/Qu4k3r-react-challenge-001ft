import React from 'react';
// import About from './components/About';
// import AppDescription from './components/AppDescription';
// import NewsLetter from './components/NewsLetter';
import Hero from './components/Hero';

import './Global.css';
import './App.css';

export default function App() {
  return (
    <main>
      <Hero />
      <section className="nanny-container">
        <img src="/profile-image.png" alt="Nanny Sarah" />
        <div className="text-container">
          <p>Sarah’s day care now available in North Sydney</p>
          <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
        </div>
      </section>
      {/* <About />
      <NewsLetter />
      <AppDescription /> */}
    </main>
  );
}
