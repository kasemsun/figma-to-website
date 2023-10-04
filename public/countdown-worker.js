// countdown-worker.js

self.addEventListener('message', (e) => {
    const targetDate = new Date(e.data.targetDate);
  
    const updateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;
  
      if (timeDifference <= 0) {
        // The countdown has ended
        self.postMessage({ countdown: { days: 0, hours: 0, minutes: 0 } });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
        self.postMessage({ countdown: { days, hours, minutes } });
        setTimeout(updateCountdown, 1000); // Update every second
      }
    };
  
    updateCountdown();
  });
