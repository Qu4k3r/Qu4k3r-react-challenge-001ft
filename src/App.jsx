import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';

export default function App() {
  return (
    <main>
      <Header />
      <section className="nanny-container">
        <img src="/profile-image.svg" alt="Nanny Sarah" />
        <p>Sarah’s day care now available in North Sydney</p>
        <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
      </section>
      <About />
    </main>
  );
}
