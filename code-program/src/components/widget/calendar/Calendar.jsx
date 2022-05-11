import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.scss';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar
        showWeekNumbers
        onChange={onChange}
        value={date}
        className="calendar"
      />
    </div>
  );
};

export default ReactCalendar;
