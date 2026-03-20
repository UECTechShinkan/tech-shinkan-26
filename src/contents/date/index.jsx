import React from 'react';

import './index.css';

const Place = ({ scheduleItems }) => {
  return (
    <div className="table-div" role="region" aria-label="開催日程">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>日時</th>
            <th>場所</th>
            <th>イベント</th>
            <th>補足</th>
          </tr>
        </thead>
        <tbody>
          {scheduleItems.map((item) => (
            <tr key={item.dateLabel + item.event}>
              <td>{item.dateLabel}</td>
              <td>{item.place}</td>
              <td>{item.event}</td>
              <td>{item.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Place;
