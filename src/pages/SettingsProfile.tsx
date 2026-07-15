import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { LogOut, Sliders, Moon, Sun, Clock, Mic, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './SettingsProfile.css';

const SettingsProfile = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  
  const [ambientAlerts, setAmbientAlerts] = useState(true);
  const [autoPage, setAutoPage] = useState(false);
  const [activeDay, setActiveDay] = useState('WED');

  const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <div className="page-content settings-profile">
      <header className="profile-header animate-fade-in">
        <img src={user?.avatar} alt="Profile" className="profile-avatar" />
        <h2>{user?.name}</h2>
        <p className="profile-status">Premium Subscriber</p>
      </header>

      {/* Temporal Scheduler Strip */}
      <section className="settings-section glass-panel animate-fade-in">
        <div className="section-title">
          <Clock className="section-icon" />
          <h3>Temporal Scheduler</h3>
        </div>
        <div className="digital-time-register">08:20 AM</div>
        <div className="day-selector">
          {DAYS.map(day => (
            <button 
              key={day} 
              className={`day-btn ${activeDay === day ? 'active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              {day[0]}
            </button>
          ))}
        </div>
      </section>

      {/* Hyper-Scaled Toggles */}
      <section className="settings-section glass-panel animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="section-title">
          <Sliders className="section-icon" />
          <h3>Structural Behaviors</h3>
        </div>
        
        <div className="toggle-row">
          <span>Ambient Alerts</span>
          <button 
            className={`hyper-toggle ${ambientAlerts ? 'on' : 'off'}`} 
            onClick={() => setAmbientAlerts(!ambientAlerts)}
          >
            {ambientAlerts ? 'ON' : 'OFF'}
          </button>
        </div>
        
        <div className="toggle-row">
          <span>Automated Page Actions</span>
          <button 
            className={`hyper-toggle ${autoPage ? 'on' : 'off'}`} 
            onClick={() => setAutoPage(!autoPage)}
          >
            {autoPage ? 'ON' : 'OFF'}
          </button>
        </div>
      </section>

      {/* Acoustic Profiler & Theme */}
      <section className="settings-section glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="section-title">
          <Mic className="section-icon" />
          <h3>Acoustic Profiler & Display</h3>
        </div>
        
        <div className="toggle-row">
          <span>Visual Theme</span>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            {theme === 'dark' ? 'Jet Black' : 'Teal Deep Blue'}
          </button>
        </div>

        <div className="equalizer-dashboard">
          <p className="subtext">Low-latency playlist router optimized for over-ear gear.</p>
          <div className="eq-bars">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="eq-bar" style={{ height: `${Math.random() * 40 + 10}px` }}></div>
            ))}
          </div>
        </div>
      </section>

      {/* App Information & Policies */}
      <section className="settings-section links-section animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <Link to="/architecture" className="policy-link glass-panel">
          <FileText size={20} /> Action Mode: Tech Stack Specs
        </Link>
        <Link to="/fundraising" className="policy-link glass-panel">
          <FileText size={20} /> Global Fundraising Strategy
        </Link>
        <Link to="/contributors" className="policy-link glass-panel">
          <FileText size={20} /> Contributor Remuneration Framework
        </Link>
        <Link to="/terms" className="policy-link glass-panel">
          <FileText size={20} /> Terms and Conditions Agreement
        </Link>
      </section>

      <button className="btn-icon logout-btn animate-fade-in" onClick={logout} style={{ animationDelay: '0.4s' }}>
        <LogOut size={24} />
        Logout
      </button>
    </div>
  );
};

export default SettingsProfile;
