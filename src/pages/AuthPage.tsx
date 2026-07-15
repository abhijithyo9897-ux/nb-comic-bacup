import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, UserPlus, LogIn } from 'lucide-react';
import './AuthPage.css';

const AuthPage = () => {
  const [mode, setMode] = useState<'login' | 'signup' | 'mfa'>('login');
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === '') return;
    setMode('mfa');
  };

  const handleMFA = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate MFA success
    login(username);
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-box glass-panel animate-fade-in">
        {mode !== 'mfa' ? (
          <>
            <div className="auth-header">
              {mode === 'login' ? <LogIn size={32} /> : <UserPlus size={32} />}
              <h2>{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
            </div>
            <form onSubmit={handleNext} className="auth-form">
              <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="glass-input"
              />
              <input 
                type="password" 
                placeholder="Password" 
                required
                className="glass-input"
              />
              <button type="submit" className="btn-primary auth-submit">
                {mode === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
            <p className="auth-switch">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button className="switch-btn" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </>
        ) : (
          <>
            <div className="auth-header">
              <ShieldCheck size={48} className="mfa-icon" />
              <h2>Multi-Factor Auth</h2>
              <p>Enter the 6-digit code sent to your device.</p>
            </div>
            <form onSubmit={handleMFA} className="auth-form mfa-form">
              <div className="mfa-inputs">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <input key={i} type="text" maxLength={1} className="glass-input mfa-box" required />
                ))}
              </div>
              <button type="submit" className="btn-primary auth-submit">
                Verify & Enter
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
