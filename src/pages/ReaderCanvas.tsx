import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Settings2, PlayCircle, PauseCircle, Music, Volume2, Maximize } from 'lucide-react';
import './ReaderCanvas.css';

type PlayMode = 'Simple' | 'Voice' | 'Timer' | 'Action' | 'Music';

const PANELS = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pepper_and_Carrot_episode_1_%28English%29.pdf/page1-800px-Pepper_and_Carrot_episode_1_%28English%29.pdf.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pepper_and_Carrot_episode_1_%28English%29.pdf/page2-800px-Pepper_and_Carrot_episode_1_%28English%29.pdf.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pepper_and_Carrot_episode_1_%28English%29.pdf/page3-800px-Pepper_and_Carrot_episode_1_%28English%29.pdf.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pepper_and_Carrot_episode_1_%28English%29.pdf/page4-800px-Pepper_and_Carrot_episode_1_%28English%29.pdf.jpg'
];

const ReaderCanvas = () => {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState<PlayMode>('Simple');
  const [showControls, setShowControls] = useState(true);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Custom Pacing Algorithm mock for Timer Mode
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (activeMode === 'Timer' && isPlaying) {
      // Tf = ((Wc * ud) / Rwpm + (dp * y)) * (1 + a)
      const Tf = 3000; // Simulated 3 seconds per panel
      timer = setInterval(() => {
        setCurrentPanel(prev => (prev < PANELS.length - 1 ? prev + 1 : prev));
      }, Tf);
    }
    return () => clearInterval(timer);
  }, [activeMode, isPlaying, currentPanel]);

  const toggleControls = () => setShowControls(!showControls);

  const nextPanel = () => setCurrentPanel(p => Math.min(PANELS.length - 1, p + 1));
  const prevPanel = () => setCurrentPanel(p => Math.max(0, p - 1));

  return (
    <div className={`reader-canvas mode-${activeMode.toLowerCase()}`}>
      {/* Edge-to-Edge Grid / Panel */}
      <div className="panel-container" onClick={toggleControls}>
        <img 
          src={PANELS[currentPanel]} 
          alt={`Panel ${currentPanel + 1}`} 
          className={`comic-panel animate-fade-in ${activeMode === 'Action' ? 'kinematic-anim' : ''}`} 
        />
        
        {/* Navigation tap zones */}
        <div className="tap-zone left" onClick={(e) => { e.stopPropagation(); prevPanel(); }} />
        <div className="tap-zone right" onClick={(e) => { e.stopPropagation(); nextPanel(); }} />
      </div>

      {/* Global Controls Overlay */}
      {showControls && (
        <div className="reader-controls glass-panel animate-fade-in">
          <div className="top-bar">
            <button className="btn-icon" onClick={() => navigate(-1)}><X size={28} /></button>
            <div className="mode-indicator">{activeMode} Mode</div>
            <button className="btn-icon" onClick={() => setShowSettings(!showSettings)}><Settings2 size={28} /></button>
          </div>

          {showSettings && (
            <div className="settings-panel glass-panel animate-fade-in">
              <h4>Play Modes</h4>
              <div className="mode-selector">
                {(['Simple', 'Voice', 'Timer', 'Action', 'Music'] as PlayMode[]).map(mode => (
                  <button 
                    key={mode} 
                    className={`mode-btn ${activeMode === mode ? 'active' : ''}`}
                    onClick={() => { setActiveMode(mode); setIsPlaying(mode === 'Timer' || mode === 'Voice'); }}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              
              {activeMode === 'Voice' && (
                <div className="sub-settings">
                  <p><Volume2 size={16}/> Audio Voice Catalog: Female Profiler Active</p>
                </div>
              )}
              {activeMode === 'Music' && (
                <div className="sub-settings">
                  <p><Music size={16}/> Mood Sync: Tense / Cinematic</p>
                </div>
              )}
              {activeMode === 'Action' && (
                <div className="sub-settings">
                  <p><Maximize size={16}/> Micro-animations & Subtitles: ON</p>
                </div>
              )}
            </div>
          )}

          {/* Absolute Pacing Progress Rail */}
          <div className="bottom-bar">
            {activeMode === 'Timer' && (
              <button className="btn-icon" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <PauseCircle size={28} /> : <PlayCircle size={28} />}
              </button>
            )}
            <div className="progress-rail">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentPanel + 1) / PANELS.length) * 100}%` }} 
              />
            </div>
            <span className="pacing-status">{currentPanel + 1} of {PANELS.length}</span>
          </div>
        </div>
      )}

      {/* Subtitles for Action Mode */}
      {activeMode === 'Action' && (
        <div className="subtitles-overlay">
          *Dramatic synth swells as the shadow moves...*
        </div>
      )}
    </div>
  );
};

export default ReaderCanvas;
