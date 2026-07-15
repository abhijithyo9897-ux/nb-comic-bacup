
import { Calendar, Layers } from 'lucide-react';
import './SubscriptionConsole.css';

const SUBS_DATA = [
  {
    id: 1,
    title: 'Nightwing',
    publisher: 'DC Comics',
    nextIssue: '14/08/2026',
    totalIssues: 90,
    img: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?auto=format&fit=crop&q=80&w=400&h=200'
  },
  {
    id: 2,
    title: 'Slumber',
    publisher: 'Image Comics',
    nextIssue: '21/08/2026',
    totalIssues: 12,
    img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400&h=200'
  },
  {
    id: 3,
    title: 'Saga',
    publisher: 'Image Comics',
    nextIssue: '01/09/2026',
    totalIssues: 65,
    img: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?auto=format&fit=crop&q=80&w=400&h=200'
  }
];

const SubscriptionConsole = () => {
  return (
    <div className="page-content subs-console">
      <div className="header-section animate-fade-in">
        <h2>Subscription Vault</h2>
        <p>Track your ongoing serialized properties</p>
      </div>

      <div className="subs-list">
        {SUBS_DATA.map((sub, idx) => (
          <div key={sub.id} className="series-track-card glass-panel animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <img src={sub.img} alt={sub.title} className="track-bg" />
            <div className="track-overlay">
              <div className="track-info">
                <h3>{sub.title}</h3>
                <span className="publisher-tag">{sub.publisher}</span>
              </div>
              <div className="release-metric-engine">
                <div className="metric">
                  <Calendar size={16} />
                  <span>Next: {sub.nextIssue}</span>
                </div>
                <div className="metric">
                  <Layers size={16} />
                  <span>{sub.totalIssues} Issues</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionConsole;
