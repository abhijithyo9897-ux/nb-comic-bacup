
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './PolicyPages.css';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content policy-page">
      <header className="policy-header glass-panel">
        <button className="btn-icon" onClick={() => navigate(-1)}><ChevronLeft size={28} /></button>
        <h2>Terms & Conditions</h2>
      </header>

      <div className="policy-content animate-fade-in">
        <section className="glass-panel">
          <h3>Section 1: Proprietary IP & Usage Rights</h3>
          <p>
            All graphic assets, script text, audio soundscapes, voiceover data tracks, characters, branding logos, 
            and distinct interactive player software frameworks accessible within the Bharat Next Big Comic Application 
            are the exclusive property of the issuing media corporation. 
          </p>
          <p>
            Users are granted a limited, non-exclusive, non-transferable, revocable personal access key to render content solely through the official application layout interface. Any automated data harvesting, screen scraping, digital duplication, code reverse-engineering, or unauthorized distribution of proprietary creative assets will lead to immediate account termination and strict civil litigation.
          </p>
        </section>

        <section className="glass-panel">
          <h3>Section 2: Digital Subscriptions & Logging</h3>
          <p>
            Access to premium comic portfolios operates strictly via advanced auto-renewing subscription structures 
            or explicit micro-transaction item passes. The system preserves absolute right of ledger modification 
            regarding subscription pricing structures upon issuing standard corporate notice periods.
          </p>
          <p>
            To optimize automated functionalities—including the Timer Mode Auto-Pacer and the Music Mode Mood Dynamic Sync—
            the application tracks internal reading behaviors, screen duration values, interaction swiping cadences, 
            and system volume parameters. All gathered user behaviors are processed in accordance with the platform's Privacy Directives.
          </p>
        </section>

        <section className="glass-panel">
          <h3>Section 3: Creator Ledger Policies & Disputes</h3>
          <p>
            Independent or contract contributors engaging with the system agree to abide explicitly by the platform's 
            multi-tier payment matrix (Salary, Incentive, Company Account Policy, Equity Share Holdings, or Combinations).
          </p>
          <p>
            The entity reserves final creative direction and absolute publishing distribution rights over all submitted portfolio items. 
            Any localized structural updates, translation adaptations, closed-caption subtitle synchronization, or voice profile expansions 
            performed during the Phase 2 optimization workflow remain the sole intellectual property of the network platform.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
