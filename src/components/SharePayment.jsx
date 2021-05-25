import React from 'react';

import './SharePayment.css';

export default function SharePayment() {
  return (
    <section className="payment-container">
      <img src="/app-usage-example.png" alt="how application works" />

      <div className="text-container">
        <h3>Shared payments made simple</h3>
        <p>
          Sometimes it’s hard enough just sharing a restaurant bill.
          Try sharing that bill week in, week out and you might encounter more
          than a few snares. But not with Hapu. Simply set your rates and our
          automated payment system takes care of the rest. You need never talk
          money or who owes what.
        </p>
        <p><u>Read how Bridget’s share (without Hapu) ended over $15</u></p>
      </div>
      <div className="border-page" />
    </section>
  );
}
