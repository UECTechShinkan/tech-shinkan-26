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
          5oqA6KGT57O744K144O844Kv44Or44Gr5YWl44KN44GG
        </p>
        <p className="cipher-footnote" aria-label="cipher-footnote-hard">
          e38193e3828ce38292e8a68be381a4e38191e3819fe38182e381aae3819fe381afe38081e4bb8ae5be8ce5a4a7e6b4bbe8ba8de38199e3828be381a7e38197e38287e38186
        </p>
        <p className="cipher-footnote" aria-label="cipher-footnote-rot13">
          uryyb jbeyq
        </p>
      </div>
    </footer>
  );
};
