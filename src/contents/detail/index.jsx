import React from 'react';

import './index.css';

const Detail = ({ items }) => {
  return (
    <div className="detail">
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;
