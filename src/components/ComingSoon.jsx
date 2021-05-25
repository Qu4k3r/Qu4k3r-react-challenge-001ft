import React from 'react';

import './ComingSoon.css';

export default function ComingSoon() {
  return (
    <section className="coming-soon-container">
      <img src={`${process.env.PUBLIC_URL}/nanny-coming-soon.svg`} alt="news about nanny share application" />

      <div className="text-container">
        <h3>Coming soon: Nanny Share Daily Diary!</h3>
        <p>
          With the Hapu daily diary your nanny will be able to
          update you and your sharers with photos and commentary
          of the day. You and sharers will receive notifications
          and you’ll be able to login to view the daily
          adventures fo your little ones. We can’t wait!
        </p>
      </div>
    </section>
  );
}
