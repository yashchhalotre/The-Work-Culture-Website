import logo from '../assets/Other Images/logo.png.webp';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { contact, moreLinks, navLinks } from '../data/siteData.js';
import { MoonIcon, SunIcon } from './UiIcons.jsx';

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <nav className="navbar container">
        <NavLink className="logo" to="/" onClick={closeMenu} aria-label="The Work Culture home">
          <img src={logo} alt="The Work Culture Logo" />
        </NavLink>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '×' : '☰'}
        </button>

        <div className={open ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active-link' : undefined}
              end={item.href === '/'}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="more-menu">
            <button type="button" className="more-btn">
              More ▾
            </button>

            <div className="more-dropdown">
              {moreLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) => isActive ? 'active-dropdown-link' : undefined}
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-dropdown-link' : undefined}>
                Gallery
              </NavLink>
            </div>
          </div>
        </div>

        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <span className="theme-icon">{theme === 'dark' ? <SunIcon /> : <MoonIcon />}</span>
        </button>

        <a className="nav-call" href={`tel:${contact.phone}`}>
          {contact.phone}
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
