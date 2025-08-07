"use client";

import { useState, useEffect } from 'react';

const Countdown = () => {
  // Set initial time to 3 hours and 57 minutes in seconds
  const initialTime = 3 * 3600 + 57 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Exit early if countdown is finished
    if (timeLeft <= 0) return;

    // Set up the interval
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <span className="font-mono bg-primary text-primary-foreground px-2 py-1 rounded-md">
      {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  );
};

export default Countdown;
