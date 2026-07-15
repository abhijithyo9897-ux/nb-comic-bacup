
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal, Heart, Play } from 'lucide-react';
import './ComicContextHub.css';

const ComicContextHub = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data for the specific comic
  const comic = {
    title: 'Pepper & Carrot',
    issue: 'Episode 1: The Potion of Flight',
    writer: 'David Revoy',
    illustrator: 'David Revoy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pepper_and_Carrot_episode_1_%28English%29.pdf/page1-800px-Pepper_and_Carrot_episode_1_%28English%29.pdf.jpg',
    stats: {
      lang: 'ENG',
      pages: '5 Pages',
      views: '124K',
      likes: '45K',
      rating: '9.9 ★'
    },
    synopsis: "Pepper is a young witch, and Carrot is her cat. They live in the fantasy world of Hereva. In this first episode, follow their adventures involving magic potions, magical creatures, and the hilarious consequences of their experiments!"
  };

  return (
    <div className="comic-context-hub">
      {/* Hero Asset Frame */}
      <div className="hero-asset-frame">
        <img src={comic.img} alt={comic.title} className="hero-cover" />
        <div className="hero-controls">
          <button className="btn-icon back-btn" onClick={() => navigate(-1)}>
            <ChevronLeft size={28} />
          </button>
          <button className="btn-icon settings-btn">
            <MoreHorizontal size={28} />
          </button>
        </div>
        <div className="hero-gradient-overlay" />
      </div>

      <div className="context-content animate-fade-in">
        {/* Title & Attribution Hierarchy */}
        <div className="attribution-hierarchy">
          <h1>{comic.title}</h1>
          <h3 className="issue-num">{comic.issue}</h3>
          <p className="creators">
            Head Writer: <span>{comic.writer}</span> | Lead Penciler: <span>{comic.illustrator}</span>
          </p>
        </div>

        {/* Metadata Ribbon */}
        <div className="metadata-ribbon">
          <div className="meta-item">{comic.stats.lang}</div>
          <div className="meta-item">{comic.stats.pages}</div>
          <div className="meta-item">{comic.stats.views} Views</div>
          <div className="meta-item">{comic.stats.likes} Likes</div>
          <div className="meta-item rating">{comic.stats.rating}</div>
        </div>

        {/* Synopsis Panel */}
        <div className="synopsis-panel">
          <p>{comic.synopsis}</p>
        </div>
      </div>

      {/* Primary Action Interface */}
      <div className="primary-action-interface glass-panel">
        <button className="btn-icon wishlist-btn">
          <Heart size={28} />
        </button>
        <button className="btn-primary read-now-btn" onClick={() => navigate(`/read/${id}`)}>
          <Play size={20} fill="currentColor" />
          Read Now
        </button>
      </div>
    </div>
  );
};

export default ComicContextHub;
