import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './PolicyPages.css';

const FundraisingStrategy = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content policy-page">
      <header className="policy-header glass-panel">
        <button className="btn-icon" onClick={() => navigate(-1)}><ChevronLeft size={28} /></button>
        <h2>Global Fundraising Strategy</h2>
      </header>

      <div className="policy-content animate-fade-in">
        <section className="glass-panel">
          <h3>Phase A: The Pre-Launch Architecture</h3>
          <ul className="payout-list">
            <li><strong>The Anchor Platform:</strong> Kickstarter or Indiegogo acting as premier global stages. The website wireframe is the primary lead-capture funnel.</li>
            <li><strong>The "Unforgettable" Ad Campaign:</strong> Sticky copywriting positioning the platform as a revolutionary leap in media memory.</li>
            <li><strong>Sneak-Peek Mechanics:</strong> 15-second high-impact teaser videos showcasing the "Action Mode" UI to prove technical competence.</li>
          </ul>
        </section>

        <section className="glass-panel">
          <h3>Phase B: Tiered Backer "Pay-Off" Structure</h3>
          <ul className="payout-list">
            <li><strong>Digital Vanguard:</strong> Early access to the app beta and the first 5 issues of the flagship comic.</li>
            <li><strong>Acoustic Patron:</strong> Exclusive access to premium, behind-the-scenes voiceover tracks and isolated musical scores.</li>
            <li><strong>The Universe Architect:</strong> High-tier rewards allowing backers to name background characters or locations.</li>
            <li><strong>Founding Stakeholders:</strong> Exclusive digital equity tokens or lifetime premium subscriptions leveraging the Share Holdings matrix.</li>
          </ul>
        </section>

        <section className="glass-panel">
          <h3>Phase C: Algorithmic Campaign Optimization</h3>
          <p>
            To ensure the standalone project hits its global funding target, the campaign must optimize its daily funding velocity ($V_f$).
          </p>
          <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', margin: '1rem 0', textAlign: 'center', fontSize: '1.2rem', color: 'var(--accent-main)' }}>
            V_f = ( C_r * (T_v * ρ_c) / D_c ) * K_v
          </div>
          <ul className="payout-list">
            <li><strong>V_f</strong>: Target daily funding velocity required to hit the project goal.</li>
            <li><strong>C_r</strong>: Average projected contribution amount per backer.</li>
            <li><strong>T_v</strong>: Total volume of targeted global web traffic routed from the core website.</li>
            <li><strong>ρ_c</strong>: Conversion rate of landing page visitors to actual financial backers.</li>
            <li><strong>D_c</strong>: Total active duration of the live fundraising campaign (in days).</li>
            <li><strong>K_v</strong>: Viral coefficient driven by backer social sharing and referral incentives.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FundraisingStrategy;
