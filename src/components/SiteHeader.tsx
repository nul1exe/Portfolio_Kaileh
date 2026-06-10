import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/programming', label: 'Programming' },
  { to: '/graphic-design', label: 'Graphic Design' },
];

export function SiteHeader() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <nav className="nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
        ))}
        </nav>
      </div>
    </header>
  );
}