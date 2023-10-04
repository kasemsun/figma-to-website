import './countdown.css';
import React, { useState, useEffect } from 'react';

const CountDown = (props) => {
  // Set your target date here
  const targetDate = new Date('2023-12-31T00:00:00Z'); // Example: December 31, 2023, at midnight UTC

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const worker = new Worker('countdown-worker.js');

    worker.addEventListener('message', (e) => {
      setCountdown(e.data.countdown);
    });

    worker.postMessage({ targetDate });
    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <section className='fasion__countdown-container'>
      <div><h3>{countdown.days}</h3> <p>Days</p></div>
      <div><h3>{countdown.hours}</h3> <p>Hours</p></div>
      <div><h3>{countdown.minutes}</h3> <p>Minutes</p></div>
    </section>
  );
};

export default CountDown;
