import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './NewsLetter.css';

export default function NewsLetter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');
  const [newsletterErrorMsg, setNewsletterErrorMsg] = useState(false);

  const handleChange = ({ target: { id, value } }) => {
    if (id.includes('name')) setName(value);
    else setEmail(value);
  };

  const postUserData = async () => {
    const user = {
      name: name.toUpperCase(),
      email: email.toUpperCase(),
    };

    try {
      const response = await axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', user);
      setLoading('done');
      return response;
    } catch (error) {
      setLoading('error');
      return error;
    }
  };

  const handleClick = () => {
    const emailValidation = new RegExp(/^[\w\d]+@[\w]+\.[\w]{2,3}/g);
    if (name.length > 0 && emailValidation.test(email)) {
      setNewsletterErrorMsg(false);
      setLoading('loading');
      postUserData();
    } else setNewsletterErrorMsg(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setNewsletterErrorMsg(false), 3000);
    return () => clearTimeout(timer);
  }, [handleClick]);

  return (
    <section className="newsletter">
      <div className="text-container">
        <h3>
          {loading === '' && 'Are you a parent without a nanny and looking to share?'}
          {loading === 'loading' && 'Please wait a few seconds...'}
          {loading === 'done' && 'You’re subscribed! Check your email for more details.'}
          {loading === 'error' && 'Sorry! Internal error. Try again later :('}
        </h3>
        <p>
          {loading === '' && 'Leave us your name and email and we’ll update you as soon as a share becomes available in your area!'}
          {loading === 'done' && 'We just sent you an email with more information about the next available nannies. Enjoy it!'}
          {loading === 'error' && 'Please, forgive us! We’re already managing the situation. Try again in a few minutes.'}
        </p>
      </div>

      <div className="form-container">
        <form className="form">
          <input
            type="text"
            id="name-input"
            placeholder="Your name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            id="email-input"
            placeholder="Your email"
            onChange={handleChange}
            required
          />
        </form>
        <button
          type="button"
          onClick={handleClick}
        >
          Send
        </button>
      </div>
      {newsletterErrorMsg && (
        <div className="newsletter-message">
          <p>
            *Please, insert a valid name and email!
          </p>
        </div>
      )}
      <div className="border-page" />
    </section>
  );
}
