import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand" onClick={closeMenu}>
        <Rocket size={28} />
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
      </ul>
    </nav>
  );
};

export default Navbar;
