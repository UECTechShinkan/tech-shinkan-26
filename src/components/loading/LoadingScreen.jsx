import React from 'react';
import './index.css';

export const LoadingScreen = ({ visible }) => {
  return (
    <div
      className={`loading-screen ${visible ? 'visible' : 'hidden'}`}
      aria-hidden={!visible}
      role="status"
      aria-live="polite"
    >
      <div className="loading-orb" />
      <p>TECH SHINKAN 2026</p>
    </div>
  );
};
