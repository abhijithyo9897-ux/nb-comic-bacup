import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Database } from 'lucide-react';
import './PolicyPages.css';
import './DatabaseSchema.css';

const DatabaseSchema = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content policy-page database-schema">
      <header className="policy-header glass-panel">
        <button className="btn-icon" onClick={() => navigate(-1)}><ChevronLeft size={28} /></button>
        <h2>PostgreSQL Schema Blueprint</h2>
      </header>

      <div className="policy-content animate-fade-in">
        <section className="glass-panel">
          <div className="section-title">
            <Database className="section-icon" />
            <h3>1. User Identity & Global Preferences</h3>
          </div>
          <p>Handles strict authentication protocols and stores global state settings to initialize user sessions seamlessly.</p>
          
          <div className="table-container">
            <h4>Table: users</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>user_id</td><td>UUID</td><td>PRIMARY KEY</td><td>Unique identifier for the account.</td></tr>
                <tr><td>email</td><td>VARCHAR(255)</td><td>UNIQUE, NOT NULL</td><td>Login credential.</td></tr>
                <tr><td>password_hash</td><td>VARCHAR(255)</td><td>NOT NULL</td><td>Encrypted access token.</td></tr>
                <tr><td>mfa_enabled</td><td>BOOLEAN</td><td>DEFAULT FALSE</td><td>Toggles multi-factor authentication routing.</td></tr>
                <tr><td>subscription_tier</td><td>VARCHAR(50)</td><td>DEFAULT 'free'</td><td>Maps to billing and access control matrices.</td></tr>
                <tr><td>created_at</td><td>TIMESTAMP</td><td>DEFAULT NOW()</td><td>Account origin timestamp.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h4>Table: user_preferences</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>preference_id</td><td>UUID</td><td>PRIMARY KEY</td><td>Unique settings identifier.</td></tr>
                <tr><td>user_id</td><td>UUID</td><td>FOREIGN KEY (users)</td><td>Binds settings to a specific user.</td></tr>
                <tr><td>default_play_mode</td><td>VARCHAR(20)</td><td>DEFAULT 'simple'</td><td>Values: simple, voice, timer, action, music.</td></tr>
                <tr><td>base_wpm</td><td>INTEGER</td><td>DEFAULT 200</td><td>Baseline Words-Per-Minute for the Timer Mode cadence.</td></tr>
                <tr><td>eq_profile_target</td><td>VARCHAR(50)</td><td>NULLABLE</td><td>Hardware audio routing target for the Spatial Audio Engine.</td></tr>
                <tr><td>ui_theme</td><td>VARCHAR(20)</td><td>DEFAULT 'dark_mode'</td><td>Dashboard interface state.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-panel">
          <div className="section-title">
            <Database className="section-icon" />
            <h3>2. Core Intellectual Property Vault</h3>
          </div>
          <p>Organizes the top-level comic book entities, establishing a clean hierarchy between a master series and its individual issues.</p>
          
          <div className="table-container">
            <h4>Table: comics_series</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>series_id</td><td>UUID</td><td>PRIMARY KEY</td><td>Unique series identifier.</td></tr>
                <tr><td>title</td><td>VARCHAR(255)</td><td>NOT NULL</td><td>Global name of the franchise.</td></tr>
                <tr><td>publisher_tag</td><td>VARCHAR(100)</td><td>NOT NULL</td><td>e.g., DC, Marvel, Image, Independent.</td></tr>
                <tr><td>status</td><td>VARCHAR(50)</td><td>DEFAULT 'ongoing'</td><td>Series lifecycle state.</td></tr>
                <tr><td>total_issues</td><td>INTEGER</td><td>DEFAULT 0</td><td>Auto-incremented volume count.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h4>Table: issues_metadata</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>issue_id</td><td>UUID</td><td>PRIMARY KEY</td><td>Unique chapter identifier.</td></tr>
                <tr><td>series_id</td><td>UUID</td><td>FOREIGN KEY (comics_series)</td><td>Links to parent series.</td></tr>
                <tr><td>issue_number</td><td>INTEGER</td><td>NOT NULL</td><td>Sequential chapter index.</td></tr>
                <tr><td>cover_art_url</td><td>VARCHAR(512)</td><td>NOT NULL</td><td>High-res cloud bucket path for the dashboard hero.</td></tr>
                <tr><td>page_count</td><td>INTEGER</td><td>NOT NULL</td><td>Absolute frame volume.</td></tr>
                <tr><td>aggregate_views</td><td>BIGINT</td><td>DEFAULT 0</td><td>Real-time traffic metric for the Trending feed.</td></tr>
                <tr><td>global_rating</td><td>DECIMAL(3,1)</td><td>DEFAULT 0.0</td><td>10-point scale review aggregation.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-panel">
          <div className="section-title">
            <Database className="section-icon" />
            <h3>3. Production Matrix & Payout Ledger</h3>
          </div>
          <p>Handles the attribution for internal and external talent, mapped to distinct phases of asset creation.</p>
          
          <div className="table-container">
            <h4>Table: creators_roster</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>creator_id</td><td>UUID</td><td>PRIMARY KEY</td><td>Unique talent identifier.</td></tr>
                <tr><td>display_name</td><td>VARCHAR(150)</td><td>NOT NULL</td><td>Public attribution name.</td></tr>
                <tr><td>primary_role</td><td>VARCHAR(50)</td><td>NOT NULL</td><td>Values: writer, sketcher, colorist, letterer, voice_artist, etc.</td></tr>
                <tr><td>payout_vector</td><td>VARCHAR(50)</td><td>NOT NULL</td><td>Ledger structure: salary, incentive, company_account, share_holding.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h4>Table: issue_attributions (Join Table)</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>issue_id</td><td>UUID</td><td>FOREIGN KEY (issues_metadata)</td><td>The comic issue.</td></tr>
                <tr><td>creator_id</td><td>UUID</td><td>FOREIGN KEY (creators_roster)</td><td>The assigned talent.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-panel">
          <div className="section-title">
            <Database className="section-icon" />
            <h3>4. Action Mode & Cinematic Media Engine</h3>
          </div>
          <p>The granular, frame-by-frame data structure required to sync graphics with audio stems and spatial coordinates.</p>
          
          <div className="table-container">
            <h4>Table: pages_frames</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>page_id</td><td>UUID</td><td>PRIMARY KEY</td><td>Unique panel identifier.</td></tr>
                <tr><td>issue_id</td><td>UUID</td><td>FOREIGN KEY (issues_metadata)</td><td>Parent chapter linkage.</td></tr>
                <tr><td>sequence_index</td><td>INTEGER</td><td>NOT NULL</td><td>Page order routing.</td></tr>
                <tr><td>base_image_url</td><td>VARCHAR(512)</td><td>NOT NULL</td><td>Static fallback WebP/AVIF file.</td></tr>
                <tr><td>word_count</td><td>INTEGER</td><td>DEFAULT 0</td><td>Feed variable for the Timer Mode algorithm.</td></tr>
                <tr><td>kinematic_json</td><td>JSONB</td><td>NULLABLE</td><td>X/Y coordinates for GSAP Action Mode animations.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h4>Table: media_sync_assets</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>asset_id</td><td>UUID</td><td>PRIMARY KEY</td><td>Unique media track identifier.</td></tr>
                <tr><td>page_id</td><td>UUID</td><td>FOREIGN KEY (pages_frames)</td><td>Bound to specific panels.</td></tr>
                <tr><td>asset_type</td><td>VARCHAR(50)</td><td>NOT NULL</td><td>Values: voice_male, bgm, sfx, subtitle.</td></tr>
                <tr><td>trigger_timestamp</td><td>JSONB</td><td>NOT NULL</td><td>Microsecond execution marks for audio parity.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-panel">
          <div className="section-title">
            <Database className="section-icon" />
            <h3>5. Dashboard Telemetry & User Library</h3>
          </div>
          <p>Tracks where a user is in a given comic, populates their saved vault, and feeds data back into pacing algorithms.</p>
          
          <div className="table-container">
            <h4>Table: user_library</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>library_id</td><td>UUID</td><td>PRIMARY KEY</td><td>Unique library entry.</td></tr>
                <tr><td>user_id</td><td>UUID</td><td>FOREIGN KEY (users)</td><td>Dashboard owner.</td></tr>
                <tr><td>issue_id</td><td>UUID</td><td>FOREIGN KEY (issues_metadata)</td><td>Saved asset.</td></tr>
                <tr><td>status_flag</td><td>VARCHAR(20)</td><td>DEFAULT 'wishlist'</td><td>Values: wishlist, reading, completed.</td></tr>
                <tr><td>offline_cached</td><td>BOOLEAN</td><td>DEFAULT FALSE</td><td>Sync status for local device storage.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h4>Table: reading_telemetry</h4>
            <table>
              <thead>
                <tr><th>Column Name</th><th>Data Type</th><th>Constraints / Relations</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>session_id</td><td>UUID</td><td>PRIMARY KEY</td><td>Unique reading instance.</td></tr>
                <tr><td>user_id</td><td>UUID</td><td>FOREIGN KEY (users)</td><td>The active reader.</td></tr>
                <tr><td>issue_id</td><td>UUID</td><td>FOREIGN KEY (issues_metadata)</td><td>The active book.</td></tr>
                <tr><td>current_page_index</td><td>INTEGER</td><td>DEFAULT 1</td><td>Immediate spawn point upon resuming.</td></tr>
                <tr><td>active_mode</td><td>VARCHAR(20)</td><td>NOT NULL</td><td>Logs which mode was used.</td></tr>
                <tr><td>total_duration</td><td>INTERVAL</td><td>NOT NULL</td><td>Tracks aggregate screen time.</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DatabaseSchema;
