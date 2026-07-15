import { useNavigate } from 'react-router-dom';
import { BookOpen, Headphones, Zap, Music } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1 className="animate-fade-in">Bharat Next Big Comic</h1>
        <p className="subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The Future of Interactive Digital Comics
        </p>
        <button 
          className="btn-primary start-btn animate-fade-in" 
          style={{ animationDelay: '0.4s' }}
          onClick={() => navigate('/auth')}
        >
          Enter the Vault
        </button>
      </div>

      <div className="features-grid">
        <div className="feature-card glass-panel">
          <BookOpen className="feature-icon" />
          <h3>Immersive Canvas</h3>
          <p>Edge-to-edge reading with dynamic layouts.</p>
        </div>
        <div className="feature-card glass-panel">
          <Headphones className="feature-icon" />
          <h3>Voice Mode</h3>
          <p>Multi-track narrative synthesis layer.</p>
        </div>
        <div className="feature-card glass-panel">
          <Zap className="feature-icon" />
          <h3>Action Mode</h3>
          <p>Kinematic panels and micro-animations.</p>
        </div>
        <div className="feature-card glass-panel">
          <Music className="feature-icon" />
          <h3>Music Mode</h3>
          <p>Atmospheric acoustics synced to mood.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
