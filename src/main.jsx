import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

const showConsoleGreeting = () => {
  const ascii = [
    '████████╗███████╗ ██████╗██╗  ██╗    ███████╗██╗  ██╗██╗███╗   ██╗██╗  ██╗ █████╗ ███╗   ██╗',
    '╚══██╔══╝██╔════╝██╔════╝██║  ██║    ██╔════╝██║  ██║██║████╗  ██║██║ ██╔╝██╔══██╗████╗  ██║',
    '   ██║   █████╗  ██║     ███████║    ███████╗███████║██║██╔██╗ ██║█████╔╝ ███████║██╔██╗ ██║',
    '   ██║   ██╔══╝  ██║     ██╔══██║    ╚════██║██╔══██║██║██║╚██╗██║██╔═██╗ ██╔══██║██║╚██╗██║',
    '   ██║   ███████╗╚██████╗██║  ██║    ███████║██║  ██║██║██║ ╚████║██║  ██╗██║  ██║██║ ╚████║',
    '   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝',
  ].join('\n');

  console.log(
    '%c' + ascii,
    'color:#111; font-weight:700; line-height:1.2; font-family:monospace;'
  );
  console.log(
    '%c入学おめでとう！！ぜひ技術系サークルに入って、最高のキャンパスライフを送ろう！',
    'background: linear-gradient(90deg, #f59e0b, #ef4444, #22c55e); color: #fff; padding: 8px 12px; border-radius: 8px; font-size: 13px; font-weight: 700;'
  );
  console.log(
    '%cWelcome to 技術系合同新歓2026 🚀',
    'color:#a16207; font-size:12px; font-weight:600;'
  );
  console.log('%c[binary] 01010100 01100101 01100011 01101000 00100000 01001100 01100001 01100010', 'color:#6b7280; font-family:monospace; font-size:11px;');
  console.log('%c[hex] 54 65 63 68 20 53 68 69 6e 6b 61 6e', 'color:#6b7280; font-family:monospace; font-size:11px;');
  console.log('%c[base64] V2VsY29tZSB0byBUZWNoIFNoaW5rYW4=', 'color:#6b7280; font-family:monospace; font-size:11px;');
  console.log('%c[rot13] Grpu Fuvaxna vf nyjnlf jngpuvat gur pbafbyr.', 'color:#6b7280; font-family:monospace; font-size:11px;');
  console.log('%c[morse] -. . ...- . .-. / ... - --- .--. / -... ..- .. .-.. -.. .. -. --.', 'color:#6b7280; font-family:monospace; font-size:11px;');
  console.log('%c[mojibake-like] e38288e38186e38193e3819d / e38387e38390e38383e382b0', 'color:#6b7280; font-family:monospace; font-size:11px;');
};

showConsoleGreeting();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <App />
    </Router>
  </StrictMode>
);
