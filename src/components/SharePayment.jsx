import React from 'react';

import './SharePayment.css';

export default function SharePayment() {
  return (
    <section className="payment-container">
      <div className="payment">
        <div className="option-1">
          <label htmlFor="radio-1">
            <input type="radio" name="payment-option" />
          </label>
          <label htmlFor="value-input">
            <input type="number" />
          </label>
        </div>

        <div className="option-2">
          <label htmlFor="radio-2">
            <input type="radio" name="payment-option" />
          </label>
        </div>
      </div>

      <div className="text-container">
        <h3>Shared payments made simple</h3>
        <p>
          Sometimes it’s hard enough just sharing a restaurant bill.
          Try sharing that bill week in, week out and you might encounter more
          than a few snares. But not with Hapu. Simply set your rates and our
          automated payment system takes care of the rest. You need never talk
          money or who owes what.
        </p>
        <u>Ready to get started?</u>
      </div>
    </section>
  );
}
