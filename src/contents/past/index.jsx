import React from 'react';

import './index.css';

const Past = ({ events }) => {
  return (
    <div className="past">
      <ul>
        {events.map((event) => (
          <li key={event.year}>
            {event.year}:{' '}
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              {event.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Past;
