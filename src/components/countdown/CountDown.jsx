import './countdown.css';

import React, { useState, useEffect } from 'react';

const CountDown = (props) => {
  // Set your target date here
  const targetDate = new Date('2023-10-15T00:00:00Z'); // Example: October 15, 2023, at midnight UTC

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        // The countdown has ended
        clearInterval(intervalId);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setCountdown({
          days,
          hours,
          minutes,
        });
      }
    }, 1000); // Update every second

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div>Days: {countdown.days}</div>
      <div>Hours: {countdown.hours}</div>
      <div>Minutes: {countdown.minutes}</div>
    </div>
  );
};

export default CountDown;
