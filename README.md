# 💍 Aparna & Deepak — Wedding Invitation

A beautifully crafted digital Hindu wedding invitation web app, featuring rich animations, custom SVG avatars, event details, and an RSVP system.

## ✨ Features

- **Animated invitation cards** with gold mandala backgrounds, floating petals, and peacock peacock-feather border ornaments
- **Live countdown timer** to the wedding day
- **Custom SVG avatars** for the bride (Aparna) and groom (Deepak) in traditional Indian attire
- **RSVP form** with backend storage (SQLite)
- **Password-protected admin dashboard** to view all RSVP responses
- **Share as image** — capture the invitation as a PNG via native share or download
- **Google Maps** integration for venue

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 20
- npm

### Install

```bash
npm install
```

### Development

Start the Express backend (RSVP API):

```bash
npm run server
```

In a separate terminal, start the Vite dev server:

```bash
npm run dev
```

App: http://localhost:3000  
Admin dashboard: http://localhost:3002/api/rsvps?password=aparna-deepak-2026

### Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description | Default |
|---|---|---|
| `ADMIN_PASSWORD` | Password for the RSVP admin page | `aparna-deepak-2026` |
| `PORT` | Port for the Express server | `3001` |
| `GEMINI_API_KEY` | Optional Gemini AI key | *(blank)* |

---

## 🌐 Deploying

### GitHub Pages (Static — no RSVP backend)

This repo is pre-configured for GitHub Pages deployment via GitHub Actions.

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Push to `main` — the workflow auto-builds and deploys

Live URL: `https://<your-username>.github.io/wedding-invitation/`

> ⚠️ **Note:** GitHub Pages only serves static files. The RSVP form won't save data on GitHub Pages. For full RSVP functionality, deploy the Express server separately (see below).

### Full Deployment (Static + RSVP backend)

Deploy to any Node.js host (Railway, Render, Fly.io, VPS):

```bash
npm start
# This builds the frontend and starts the Express server
```

The Express server serves the Vite build AND handles RSVP API requests from a single process.

---

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Home.tsx          # Home page with countdown & avatars
│   │   ├── Page1.tsx         # Main invitation card
│   │   ├── Page2.tsx         # Events page
│   │   ├── RSVPForm.tsx      # RSVP form
│   │   ├── Shared.tsx        # Mandala, garland, border, petals
│   │   ├── DeitySection.tsx  # Deity images
│   │   └── Layout.tsx        # Header & bottom nav
│   ├── App.tsx               # Routing & share functionality
│   └── index.css             # Animations & theme tokens
├── server.ts                 # Express backend (RSVP API & admin)
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions — auto-deploy to Pages
└── data/                     # SQLite DB (gitignored, auto-created)
```

---

## 🛡️ Security

- RSVP data is never exposed in the frontend bundle
- Admin dashboard is password-protected (`ADMIN_PASSWORD` env var)
- All user input in the dashboard is HTML-escaped on the server
- `.env` files are gitignored

---

## 📸 Screenshots

| Home | Invitation Card | Events | RSVP |
|---|---|---|---|
| Countdown, avatars, garland | Mandala bg, animate names | Event timeline | Animated form |
