
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Bell, Flame, Star, Crown } from 'lucide-react';
import './Dashboard.css';

const MOCK_COMICS = [
  { id: 1, title: 'Pepper & Carrot', rating: '9.9★', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pepper_and_Carrot_episode_1_%28English%29.pdf/page1-800px-Pepper_and_Carrot_episode_1_%28English%29.pdf.jpg' },
  { id: 2, title: 'Watchmen', rating: '9.8★', img: 'https://images.unsplash.com/photo-1612036782180-6f0b6ce846ce?auto=format&fit=crop&q=80&w=400&h=600' },
  { id: 3, title: 'Saga', rating: '9.7★', img: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?auto=format&fit=crop&q=80&w=400&h=600' },
  { id: 4, title: 'Hellboy', rating: '9.5★', img: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&q=80&w=400&h=600' }
];

const MOCK_AUTHORS = [
  { id: 1, name: 'Alan Moore', rating: '9.9★', seed: 'Alan' },
  { id: 2, name: 'Fiona Staples', rating: '9.8★', seed: 'Fiona' },
  { id: 3, name: 'Mike Mignola', rating: '9.7★', seed: 'Mike' },
  { id: 4, name: 'Garth Ennis', rating: '9.5★', seed: 'Garth' },
];

const CATEGORIES = ['All', 'Fantasy', 'Superheroes', 'Sci-Fi', 'Mythological'];

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="page-content dashboard">
      {/* Header Section */}
      <header className="dashboard-header animate-fade-in">
        <div className="user-greeting">
          <h2>Hey, {user?.name || 'Steave'}!</h2>
          <p>Ready to jump back in?</p>
        </div>
        <div className="header-actions">
          <button className="btn-icon notification-btn">
            <Bell size={24} />
            <span className="badge">3</span>
          </button>
          <img src={user?.avatar} alt="User Avatar" className="user-avatar" />
        </div>
      </header>

      {/* Content Category Carousel */}
      <section className="category-carousel animate-fade-in" style={{ animationDelay: '0.1s' }}>
        {CATEGORIES.map((cat, idx) => (
          <button key={idx} className={`category-pill ${idx === 0 ? 'active' : ''}`}>
            {cat}
          </button>
        ))}
      </section>

      {/* Featured Comics Vault */}
      <section className="vault-section animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="section-title">
          <Crown className="section-icon" />
          <h3>Featured Vault</h3>
        </div>
        <div className="vault-carousel">
          {MOCK_COMICS.slice(0, 2).map(comic => (
            <div key={comic.id} className="comic-card featured" onClick={() => navigate(`/comic/${comic.id}`)}>
              <img src={comic.img} alt={comic.title} />
              <div className="comic-overlay">
                <h4>{comic.title}</h4>
                <span className="rating-badge">{comic.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Comics Analytics Feed */}
      <section className="trending-section animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="section-title">
          <Flame className="section-icon" color="var(--danger)" />
          <h3>Trending Now</h3>
        </div>
        <div className="vault-carousel">
          {MOCK_COMICS.slice(2, 4).map(comic => (
            <div key={comic.id} className="comic-card trending" onClick={() => navigate(`/comic/${comic.id}`)}>
              <img src={comic.img} alt={comic.title} />
              <div className="comic-overlay">
                <h4>{comic.title}</h4>
                <span className="rating-badge">{comic.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Authors Spotlight */}
      <section className="authors-section animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="section-title">
          <Star className="section-icon" color="var(--accent-main)" />
          <h3>Top Authors Spotlight</h3>
        </div>
        <div className="authors-row">
          {MOCK_AUTHORS.map(author => (
            <div key={author.id} className="author-card">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author.seed}`} alt={author.name} />
              <div className="author-info">
                <h5>{author.name}</h5>
                <span>{author.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
