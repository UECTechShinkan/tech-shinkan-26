import React from 'react';

import './index.css';

export const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div>
        <p className="content">© 2015-2026 {title}</p>
      </div>
    </footer>
  );
};
