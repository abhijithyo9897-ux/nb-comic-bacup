import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './PolicyPages.css';

const TechnicalArchitecture = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content policy-page">
      <header className="policy-header glass-panel">
        <button className="btn-icon" onClick={() => navigate(-1)}><ChevronLeft size={28} /></button>
        <h2>Action Mode: Tech Stack Specs</h2>
      </header>

      <div className="policy-content animate-fade-in">
        <section className="glass-panel">
          <h3>Core Rendering & Animation Layer</h3>
          <ul className="payout-list">
            <li><strong>Graphics Engine:</strong> Skia (via React Native) or PixiJS. These 2D WebGL engines provide hardware-accelerated rendering, essential for processing multi-layered parallax scrolling and dynamic camera panning without draining device battery.</li>
            <li><strong>Kinematic Timeline Control:</strong> GreenSock Animation Platform (GSAP). Handles precise sequencing of slide animations, character movements, and panel expansions to sync flawlessly with automated timer constraints.</li>
            <li><strong>Asset Structuring:</strong> Exporting panel layers as highly compressed WebP or AVIF formats. Backgrounds, midground characters, and foreground speech bubbles are isolated during Phase 1 Sketch/Coloring.</li>
          </ul>
        </section>

        <section className="glass-panel">
          <h3>Audio & Acoustic Processing Subsystem</h3>
          <ul className="payout-list">
            <li><strong>Spatial Audio Engine:</strong> Howler.js or native Web Audio API. Maps sound effects to specific spatial coordinates on screen.</li>
            <li><strong>Hardware-Specific Equalization:</strong> Built-in target frequency curves optimized for premium acoustic hardware (AirPods, Bose) to maximize cinematic immersion.</li>
            <li><strong>Voice/Subtitle Synchronization:</strong> A JSON-based timing ledger explicitly maps text strings to audio waveform timestamps for perfect closed caption firing.</li>
          </ul>
        </section>

        <section className="glass-panel">
          <h3>Security & Anti-Forgery Infrastructure</h3>
          <ul className="payout-list">
            <li><strong>Cryptographic Asset Protection:</strong> Digital Rights Management (DRM) protocols ensure exclusive content cannot be duplicated, screen-recorded, or pirated.</li>
            <li><strong>Dynamic Watermarking:</strong> An invisible, anti-forgery cryptographic hash is embedded directly into pixel data of the rendering canvas, acting as a secure ledger of original intellectual property.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TechnicalArchitecture;
