'use client';

import { useState } from 'react';
import classes from './contact-form.module.css';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

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

    const result = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email, name, message: msg }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await result.json();
    console.log(data);
  }
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
    </section>
  );
}

export default ContactForm;
