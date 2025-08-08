
"use client";

import { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();
    setDate(`${day}/${month}/${year}`);
  }, []);

  return <span>{date}</span>;
};

export default CurrentDate;
