import express from 'express';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'aparna-deepak-2026';

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize SQLite database
const db = new Database(path.join(dataDir, 'rsvp.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS rsvps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    guests INTEGER NOT NULL DEFAULT 1,
    attending TEXT NOT NULL DEFAULT 'yes',
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Middleware
app.use(express.json());

// --- API Routes ---

// POST /api/rsvp — Store a new RSVP (public, used by frontend form)
app.post('/api/rsvp', (req, res) => {
    try {
        const { name, guests, attending, message } = req.body;

        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const guestCount = Math.min(Math.max(parseInt(guests) || 1, 1), 10);
        const attendingValue = attending === 'no' ? 'no' : 'yes';
        const messageValue = typeof message === 'string' ? message.trim().slice(0, 500) : '';

        const stmt = db.prepare(
            'INSERT INTO rsvps (name, guests, attending, message) VALUES (?, ?, ?, ?)'
        );
        const result = stmt.run(name.trim(), guestCount, attendingValue, messageValue);

        res.json({ success: true, id: result.lastInsertRowid });
    } catch (err) {
        console.error('RSVP save error:', err);
        res.status(500).json({ error: 'Failed to save RSVP' });
    }
});

// GET /api/rsvps — Beautiful HTML dashboard (password-protected)
app.get('/api/rsvps', (req, res) => {
    const password = req.query.password;

    if (!password || password !== ADMIN_PASSWORD) {
        res.status(401).send(renderUnauthorizedPage());
        return;
    }

    try {
        const rows = db.prepare('SELECT * FROM rsvps ORDER BY created_at DESC').all() as any[];
        const stats = db.prepare(
            `SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN attending = 'yes' THEN 1 ELSE 0 END) as attending,
        SUM(CASE WHEN attending = 'no' THEN 1 ELSE 0 END) as not_attending,
        SUM(CASE WHEN attending = 'yes' THEN guests ELSE 0 END) as total_guests
      FROM rsvps`
        ).get() as any;

        res.send(renderDashboard(stats, rows));
    } catch (err) {
        console.error('RSVP fetch error:', err);
        res.status(500).json({ error: 'Failed to fetch RSVPs' });
    }
});

// --- Serve static frontend (production) ---
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`🎉 Wedding invitation server running on http://localhost:${PORT}`);
    console.log(`📊 Admin RSVPs: http://localhost:${PORT}/api/rsvps?password=${ADMIN_PASSWORD}`);
    console.log(`💾 Database: ${path.join(dataDir, 'rsvp.db')}`);
});


// =============================================
// HTML Renderers
// =============================================

function renderUnauthorizedPage(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Denied — Wedding RSVP</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Outfit', sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #FDB931, #FFD700);
      padding: 20px;
    }
    .card {
      background: white;
      border-radius: 24px;
      padding: 48px;
      text-align: center;
      max-width: 420px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    }
    .icon { font-size: 48px; margin-bottom: 16px; }
    h1 { color: #9F1239; font-size: 24px; margin-bottom: 8px; }
    p { color: #78716c; line-height: 1.6; }
    .hint {
      margin-top: 20px;
      padding: 12px 16px;
      background: #FFF7ED;
      border-radius: 12px;
      font-size: 14px;
      color: #9A3412;
      border: 1px solid #FFEDD5;
    }
    code { background: #FEE2E2; padding: 2px 6px; border-radius: 4px; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">🔒</div>
    <h1>Access Denied</h1>
    <p>You need the admin password to view RSVP responses.</p>
    <div class="hint">
      Add <code>?password=your-password</code> to the URL to access the dashboard.
    </div>
  </div>
</body>
</html>`;
}

function renderDashboard(stats: any, rsvps: any[]): string {
    const attendingList = rsvps.filter(r => r.attending === 'yes');
    const notAttendingList = rsvps.filter(r => r.attending === 'no');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RSVP Dashboard — Aparna & Deepak Wedding</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Amita:wght@400;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Outfit', sans-serif;
      background: linear-gradient(135deg, #FEF3C7, #FDE68A, #FEF3C7);
      min-height: 100vh;
      color: #1c1917;
    }

    /* Header */
    .header {
      background: linear-gradient(135deg, #7f1d1d, #991b1b);
      color: #FEF3C7;
      padding: 32px 24px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .header::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .header h1 {
      font-family: 'Amita', cursive;
      font-size: 28px;
      position: relative;
    }
    .header p {
      opacity: 0.8;
      font-size: 14px;
      margin-top: 4px;
      position: relative;
    }
    .header .badge {
      display: inline-block;
      margin-top: 12px;
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(8px);
      padding: 6px 16px;
      border-radius: 50px;
      font-size: 13px;
      position: relative;
      border: 1px solid rgba(255,255,255,0.1);
    }

    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 24px 16px 60px;
    }

    /* Stats Grid */
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin: -40px 0 32px;
      position: relative;
      z-index: 1;
    }
    .stat-card {
      background: white;
      border-radius: 20px;
      padding: 24px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border: 1px solid #f5f5f4;
      transition: transform 0.2s;
    }
    .stat-card:hover { transform: translateY(-2px); }
    .stat-icon { font-size: 28px; margin-bottom: 8px; }
    .stat-number {
      font-size: 36px;
      font-weight: 700;
      color: #7f1d1d;
      line-height: 1;
    }
    .stat-label {
      font-size: 13px;
      color: #a8a29e;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 4px;
      font-weight: 500;
    }

    /* Section */
    .section {
      margin-bottom: 28px;
    }
    .section-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 18px;
      font-weight: 700;
      color: #44403c;
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e7e5e4;
    }
    .section-count {
      background: #7f1d1d;
      color: white;
      font-size: 12px;
      padding: 2px 10px;
      border-radius: 50px;
      font-weight: 600;
    }

    /* RSVP Cards */
    .rsvp-list {
      display: grid;
      gap: 12px;
    }
    .rsvp-card {
      background: white;
      border-radius: 16px;
      padding: 20px 24px;
      display: flex;
      align-items: flex-start;
      gap: 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      border: 1px solid #f5f5f4;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .rsvp-card:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    }
    .rsvp-avatar {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 700;
      color: white;
      flex-shrink: 0;
    }
    .rsvp-avatar.yes { background: linear-gradient(135deg, #059669, #10b981); }
    .rsvp-avatar.no { background: linear-gradient(135deg, #dc2626, #ef4444); }
    .rsvp-info { flex: 1; min-width: 0; }
    .rsvp-name {
      font-weight: 700;
      font-size: 16px;
      color: #1c1917;
    }
    .rsvp-meta {
      display: flex;
      gap: 16px;
      font-size: 13px;
      color: #a8a29e;
      margin-top: 4px;
      flex-wrap: wrap;
    }
    .rsvp-meta span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .rsvp-message {
      margin-top: 8px;
      padding: 10px 14px;
      background: #FAFAF9;
      border-radius: 10px;
      font-size: 14px;
      color: #57534e;
      line-height: 1.5;
      border-left: 3px solid #E7E5E4;
      font-style: italic;
    }
    .rsvp-status {
      padding: 4px 12px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 600;
      flex-shrink: 0;
    }
    .rsvp-status.yes { background: #ECFDF5; color: #059669; }
    .rsvp-status.no { background: #FEF2F2; color: #DC2626; }

    .empty {
      text-align: center;
      padding: 48px 24px;
      color: #a8a29e;
      font-size: 15px;
    }
    .empty-icon { font-size: 48px; margin-bottom: 12px; }

    /* Footer */
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #a8a29e;
    }

    @media (max-width: 600px) {
      .stats { grid-template-columns: repeat(2, 1fr); }
      .rsvp-card { flex-direction: column; gap: 10px; }
      .rsvp-status { align-self: flex-start; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>💌 Aparna & Deepak</h1>
    <p>Wedding RSVP Dashboard</p>
    <div class="badge">🗓️ 20th April 2026 • Pratapgarh, UP</div>
  </div>

  <div class="container">
    <!-- Stats -->
    <div class="stats">
      <div class="stat-card">
        <div class="stat-icon">📬</div>
        <div class="stat-number">${stats.total || 0}</div>
        <div class="stat-label">Total Responses</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🎉</div>
        <div class="stat-number">${stats.attending || 0}</div>
        <div class="stat-label">Attending</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">😔</div>
        <div class="stat-number">${stats.not_attending || 0}</div>
        <div class="stat-label">Can't Make It</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-number">${stats.total_guests || 0}</div>
        <div class="stat-label">Expected Guests</div>
      </div>
    </div>

    ${rsvps.length === 0 ? `
      <div class="empty">
        <div class="empty-icon">📭</div>
        <p>No RSVPs received yet.<br/>Share the invitation to start collecting responses!</p>
      </div>
    ` : `
      <!-- Attending -->
      ${attendingList.length > 0 ? `
        <div class="section">
          <div class="section-title">
            <span>🎉 Attending</span>
            <span class="section-count">${attendingList.length}</span>
          </div>
          <div class="rsvp-list">
            ${attendingList.map(r => renderRsvpCard(r)).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Not Attending -->
      ${notAttendingList.length > 0 ? `
        <div class="section">
          <div class="section-title">
            <span>😔 Unable to Attend</span>
            <span class="section-count">${notAttendingList.length}</span>
          </div>
          <div class="rsvp-list">
            ${notAttendingList.map(r => renderRsvpCard(r)).join('')}
          </div>
        </div>
      ` : ''}
    `}
  </div>

  <div class="footer">
    Wedding RSVP Dashboard • Aparna & Deepak • 20 April 2026
  </div>
</body>
</html>`;
}

function renderRsvpCard(r: any): string {
    const initial = (r.name || '?')[0].toUpperCase();
    const date = new Date(r.created_at + 'Z');
    const formattedDate = date.toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
    });
    const escapedName = escapeHtml(r.name);
    const escapedMessage = r.message ? escapeHtml(r.message) : '';

    return `
    <div class="rsvp-card">
      <div class="rsvp-avatar ${r.attending}">${initial}</div>
      <div class="rsvp-info">
        <div class="rsvp-name">${escapedName}</div>
        <div class="rsvp-meta">
          <span>👥 ${r.guests} guest${r.guests > 1 ? 's' : ''}</span>
          <span>🕐 ${formattedDate}</span>
        </div>
        ${escapedMessage ? `<div class="rsvp-message">"${escapedMessage}"</div>` : ''}
      </div>
      <span class="rsvp-status ${r.attending}">${r.attending === 'yes' ? '✓ Attending' : '✗ Declined'}</span>
    </div>
  `;
}

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
