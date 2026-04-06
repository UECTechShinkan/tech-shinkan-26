import React from 'react';

import './index.css';

export const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div>
        <p className="content">© 2015-2026 {title}</p>
        <p className="easter-hint">
          画面の外側にも、もうひとつだけ挨拶を置いています。
        </p>
        <p className="cipher-footnote" aria-label="cipher-footnote">
          rot13: uryyb | bin: 01101111 01101011 | mojibake-like: Ã£ÂÂÃ£ÂÂÃ£ÂÂÃ£ÂÂ
        </p>
      </div>
    </footer>
  );
};
