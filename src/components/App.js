import React, { useState } from 'react';
import CalendarView from './CalendarView.js';
import FilterButtons from './FilterButtons.js';
import moment from 'moment';
import './App.css'; 

function App() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all'); // all | past | upcoming

  const filterEvents = () => {
    const now = moment();
    if (filter === 'past') return events.filter(e => moment(e.start).isBefore(now));
    if (filter === 'upcoming') return events.filter(e => moment(e.start).isSameOrAfter(now));
    return events;
  };

  return (
    <div className="app-container">
      <FilterButtons setFilter={setFilter} />
      <CalendarView events={filterEvents()} setEvents={setEvents} allEvents={events} />
    </div>
  );
}

export default App;
