import './countdown.css';
import React, { useState, useEffect } from 'react';

const CountDown = (props) => {
  // Set your target date here
  const targetDate = new Date('2024-06-31T00:00:00Z'); // Example: December 31, 2023, at midnight UTC

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
      <div><h3>{countdown.days}</h3> <div>Days</div></div>
      <div><h3>{countdown.hours}</h3> <div>Hours</div></div>
      <div><h3>{countdown.minutes}</h3> <div>Minutes</div></div>
    </section>
  );
};

export default CountDown;
