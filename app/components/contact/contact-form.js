'use client';

import { useEffect, useState } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

async function sendContactData({ email, name, message }) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ email, name, message }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    new Error(data.message || 'Something went wrong');
  }

  return data;
}

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  function onChangeInput(event) {
    switch (event.target.id) {
      case 'email': {
        setEmail(event.target.value);
        break;
      }
      case 'name': {
        setName(event.target.value);
        break;
      }
      case 'msg': {
        setMsg(event.target.value);
        break;
      }
      default:
        return;
    }
  }

  async function sendMsgHandler(event) {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({
        email,
        name,
        message: msg,
      });

      setRequestStatus('success');
      setEmail('');
      setName('');
      setMsg('');
    } catch (error) {
      setRequestStatus('error');
      setRequestError(error.message);
    }
  }

  let notification;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success...',
      message: 'Your message is sent',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error sending message...',
      message: requestError,
    };
  }

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  return (
    <section className={classes.contact}>
      <h1>Contact form</h1>
      <form className={classes.form} onSubmit={sendMsgHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={email}
              onChange={onChangeInput}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={name}
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            type='text'
            id='msg'
            required
            value={msg}
            onChange={onChangeInput}
            rows={5}
          />
        </div>
        <div className={classes.actions}>
          <button type='submit'>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
