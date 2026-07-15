import { NavLink } from 'react-router-dom';
import { Home, Search, Bookmark, Settings, Rss } from 'lucide-react';
import './NavigationDock.css';

const NavigationDock = () => {
  return (
    <div className="nav-dock-container animate-fade-in">
      <nav className="nav-dock glass-panel">
        <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Search size={24} />
          <span>Search</span>
        </NavLink>
        <NavLink to="/subs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Bookmark size={24} />
          <span>Saved</span>
        </NavLink>
        <NavLink to="/news" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Rss size={24} />
          <span>News</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Settings size={24} />
          <span>Settings</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavigationDock;
