import React from 'react';
import { useEffect, useState } from 'react';
import './reactclock.scss';

const ReactClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="clock">{clockState}</div>;
};

export default ReactClock;
