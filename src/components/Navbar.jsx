import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Check local storage on mount, otherwise strictly default to LIGHT mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return false; // Force default mode to be light
  });

  useEffect(() => {
    // Isolated application of data-theme
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand" onClick={closeMenu}>
        <img src="/SURYASTUDIO.png" alt="Surya Studio Logo" style={{ height: '28px', width: 'auto' }} />
        <span>Surya Studio</span>
      </NavLink>

      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/google-apps" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Google Apps
          </NavLink>
        </li>
        <li>
          <NavLink to="/extensions" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Extensions
          </NavLink>
        </li>
        <li>
          <NavLink to="/themes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Themes
          </NavLink>
        </li>
        <li>
          <NavLink to="/misc" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Misc
          </NavLink>
        </li>
        <li>
          <a href="https://suryaraj.com" className="nav-external-btn" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            suryaraj.com
          </a>
        </li>
        <li>
          <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle Dark Mode" style={{
            background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem', borderRadius: '50%', transition: 'background-color 0.3s ease'
          }}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
