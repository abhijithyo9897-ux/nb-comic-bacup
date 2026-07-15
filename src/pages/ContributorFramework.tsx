
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './PolicyPages.css';

const ContributorFramework = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content policy-page">
      <header className="policy-header glass-panel">
        <button className="btn-icon" onClick={() => navigate(-1)}><ChevronLeft size={28} /></button>
        <h2>Production & Remuneration</h2>
      </header>

      <div className="policy-content animate-fade-in">
        <section className="glass-panel">
          <h3>Human Resource Allocation Matrix</h3>
          <div className="matrix-grid">
            <div className="phase-col">
              <h4>1st Phase: Asset Creation</h4>
              <ul>
                <li>Content Creator</li>
                <li>Sketch Artist</li>
                <li>Colorist / Inkers</li>
                <li>Lettering Specialist</li>
                <li>IT & Developer Team</li>
              </ul>
            </div>
            <div className="phase-col">
              <h4>2nd Phase: Enhanced Media</h4>
              <ul>
                <li>Reader Voice Artists (Male/Female)</li>
                <li>Music Enhancers</li>
                <li>Subtitle Creators</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="glass-panel">
          <h3>Contributor Payout Architecture</h3>
          <p className="subtitle">"Pay-Off Structure"</p>
          <ul className="payout-list">
            <li><strong>On Salary Basis:</strong> Standard monthly recurring base compensation models.</li>
            <li><strong>Incentive Tiering:</strong> Discretionary reward distributions driven by performance indices, consumer reading logs, and milestone delivery speeds.</li>
            <li><strong>Company Account Policy:</strong> Standardized direct operational overhead funding, handling structural project expenses.</li>
            <li><strong>Share Holdings Matrix:</strong> Long-term equity distributions providing core creative personnel partial ownership stakes.</li>
            <li><strong>Hybrid Combinations:</strong> Customizable contracts blending elements to accommodate elite external creators.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ContributorFramework;
