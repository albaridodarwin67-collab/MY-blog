import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          <span className="logo-icon">🌴</span> Davao<b>Getaways</b>
        </Link>
        <div className="nav-menu">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} end>
            Home
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Blog
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}