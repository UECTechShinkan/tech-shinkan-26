import React from 'react';
import Container from '@mui/material/Container';
import './index.css';

export const Header = ({ title, sections, theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  React.useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="header-wrap">
      <Container maxWidth="lg" className="header-bar">
        <a href="#" className="title" aria-label="ページ先頭へ移動">
          {title}
        </a>

        <nav className="nav" aria-label="グローバルナビゲーション">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-button"
            onClick={onToggleTheme}
            aria-label="テーマ切替"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="メニュー"
          >
            Menu
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-content">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} onClick={closeMenu}>
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
