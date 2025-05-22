import React from 'react';

const FilterButtons = ({ setFilter }) => (
  <div className="filter-buttons">
    <button className="btn filter-btn-all" onClick={() => setFilter('all')}>All</button>
    <button className="btn filter-btn-past" onClick={() => setFilter('past')}>Past</button>
    <button className="btn filter-btn-upcoming" onClick={() => setFilter('upcoming')}>Upcoming</button>
  </div>
);

export default FilterButtons;
