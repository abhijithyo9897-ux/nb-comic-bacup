
import { Newspaper, Camera } from 'lucide-react';
import './NewsHub.css';

const PUBLISHERS = ['Marvel', 'DC', 'Image', 'Dynamite', 'Dark Horse', 'More'];

const NEWS_DATA = [
  { id: 1, title: 'Human Target #6 Review', score: '9.5/10', date: 'Just Now', img: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 2, title: 'Robin #12 Critical Assessment', score: '8.8/10', date: '2 hrs ago', img: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?auto=format&fit=crop&q=80&w=200&h=200' },
];

const PREVIEWS = [
  'https://images.unsplash.com/photo-1612036782180-6f0b6ce846ce?auto=format&fit=crop&q=80&w=300&h=400',
  'https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&q=80&w=300&h=400'
];

const NewsHub = () => {
  return (
    <div className="page-content news-hub">
      {/* Publisher Filtering Ring */}
      <section className="publisher-ring animate-fade-in">
        <div className="ring-container">
          {PUBLISHERS.map((pub, idx) => (
            <button key={idx} className="brand-btn">
              {pub}
            </button>
          ))}
        </div>
      </section>

      {/* Critical Evaluation Vault */}
      <section className="critical-vault animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="section-title">
          <Newspaper className="section-icon" color="var(--accent-main)" />
          <h3>Critical Vault</h3>
        </div>
        <div className="vault-cards">
          {NEWS_DATA.map(news => (
            <div key={news.id} className="news-card glass-panel">
              <img src={news.img} alt={news.title} />
              <div className="news-info">
                <h4>{news.title}</h4>
                <div className="news-meta">
                  <span className="score">{news.score}</span>
                  <span className="date">{news.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Previews Engine */}
      <section className="previews-engine animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="section-title">
          <Camera className="section-icon" color="var(--success)" />
          <h3>Exclusive Previews</h3>
        </div>
        <div className="preview-gallery">
          {PREVIEWS.map((src, idx) => (
            <div key={idx} className="preview-item">
              <img src={src} alt="Preview" />
              <div className="preview-overlay">
                <span>Unreleased</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsHub;
