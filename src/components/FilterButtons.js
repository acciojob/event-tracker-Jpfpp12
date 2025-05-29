import React from 'react';

const FilterButtons = ({ setFilter }) => (
  <div className="filter-buttons">
    <button className="btn filter-btn-all" data-cy="filter-all" onClick={() => setFilter('all')}>All</button>
    <button className="btn filter-btn-past" data-cy="filter-past" onClick={() => setFilter('past')}>Past</button>
    <button className="btn filter-btn-upcoming" data-cy="filter-upcoming" onClick={() => setFilter('upcoming')}>Upcoming</button>
  </div>
);

export default FilterButtons;
