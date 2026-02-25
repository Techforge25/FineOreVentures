import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const isHome = location.pathname === '/';
  const venturesRef = useRef(null);

  useEffect(() => {
    setVenturesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!venturesRef.current) return;
      if (!venturesRef.current.contains(event.target)) {
        setVenturesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <header className={`top-nav ${isHome ? 'home-mode' : ''}`}>
      <div className="container nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img className="brand-mark" src="/assets/RBG.png" alt="Fine Ore Ventures logo" />
          {/* <span className="brand-text">Fine Ore Ventures</span> */}
        </NavLink>

        <button className="nav-toggle" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => {
            if (!link.children) {
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {t(link.label)}
                </NavLink>
              );
            }

            const venturesActive = location.pathname.startsWith('/our-ventures');

            return (
              <div
                className={`nav-dropdown ${venturesOpen ? 'open' : ''}`}
                key={link.to}
                ref={venturesRef}
              >
                <button
                  className={`nav-parent ${venturesActive ? 'active' : ''}`}
                  onClick={() => setVenturesOpen((prev) => !prev)}
                  type="button"
                >
                  {t(link.label)}
                  <span className={`nav-caret ${venturesOpen ? 'open' : ''}`} aria-hidden="true" />
                </button>
                <div className="dropdown-menu">
                  <NavLink
                    to={link.to}
                    onClick={() => {
                      setOpen(false);
                      setVenturesOpen(false);
                    }}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {t('Overview')}
                  </NavLink>
                  {link.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={() => {
                        setOpen(false);
                        setVenturesOpen(false);
                      }}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                      {t(child.label)}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="lang-switch lang-switch-mobile" role="group" aria-label="Language switcher">
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={language === 'fr' ? 'active' : ''}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
          </div>
        </nav>

        <div className="lang-switch lang-switch-desktop" role="group" aria-label="Language switcher">
          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={language === 'fr' ? 'active' : ''}
            onClick={() => setLanguage('fr')}
          >
            FR
          </button>
        </div>
      </div>
    </header>
  );
}

