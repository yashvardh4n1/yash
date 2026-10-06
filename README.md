# Yash Vardhan — Minimalist Developer Portfolio
> **Japanese Minimalism × Senbonzakura × Premium Developer Portfolio**

A personal developer portfolio built with **React + Vite + Tailwind CSS**, designed with restraint, cinematic elegance, and high performance. Inspired by the calm and blade-like grace of Kuchiki Byakuya and Senbonzakura, featuring 100% original creative assets and ready for one-click deployment on **Vercel**.

---

## 🌸 Visual & Cinematic Highlights

- **Original 8-Scene Bankai Cinematic Opening (5–8s)**:
  1. **Scene 1 (Black)**: Pitch dark screen with delicate atmospheric mist.
  2. **Scene 2 (The Sword)**: Minimalist silver & obsidian Katana silhouette glides into position.
  3. **Scene 3 (Bankai Activation)**: The blade slowly descends into the reflective floor, unleashing soft shockwave ripples and first petal luminescence.
  4. **Scene 4 (First Sakura Petals)**: A solitary soft-pink petal drifts across the screen, followed by multiplying blossoms.
  5. **Scene 5 (Senbonzakura Awakening)**: Petals accelerate into a graceful, controlled current of thousand razor-sharp flower blades.
  6. **Scene 6 (Petal Wave Climax)**: Sweeping wave of soft pink, white, and obsidian fills the viewport.
  7. **Scene 7 (Bankai Title)**: Elegant typography reveals 「 散れ 」 (Scatter) → `BANKAI` → `SENBONZAKURA`.
  8. **Scene 8 (Curtain Reveal)**: Petals part outward from center, revealing `YASH VARDHAN` and seamlessly transitioning into the clean white portfolio.
- **Session-Aware & Replayable**: Uses `sessionStorage` so the intro only runs once per browsing session, with an instant `SKIP INTRO →` button and a `BANKAI INTRO` / `Replay Bankai` trigger in the navigation bar and footer.
- **Dual-Mode Canvas Particle Engine**:
  - **Intro Mode**: High-density swirling vortex with depth-based motion blur, wave dynamics, and blade glints.
  - **Ambient Mode**: Ultra-lightweight (16 petals on desktop, 8 on mobile), gentle natural swaying, cursor avoidance deflection, and automatic pausing on inactive tabs.
  - **Accessibility**: Full respect for `prefers-reduced-motion`.
- **Japanese Minimalist Aesthetic**:
  - Off-white/ivory background (`#faf9f6`), charcoal typography (`#1c1917`), soft Sakura pink (`#fbcfe8`, `#f472b6`).
  - Red Japanese Hanko seal accents (「印」, 「学」).
  - Subtle Kanji watermarks (「桜」, 「研鑽」, 「自己紹介」, 「技術」, 「制作実績」).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animations**: Framer Motion 14 + Custom HTML5 Canvas Particle Engine
- **Icons**: Lucide React + Custom Inline SVGs
- **Typography**: Inter + Space Grotesk + Shippori Mincho (Google Fonts)
- **Deployment**: Vercel ready (`vercel.json` included)

---

## 📂 Project Architecture

```
final-yash/
├── public/
│   └── favicon.svg              # Minimalist Sakura petal SVG favicon
├── src/
│   ├── assets/                  # Static assets
│   ├── components/
│   │   ├── IntroAnimation.jsx   # 8-scene cinematic Bankai sequence
│   │   ├── CherryBlossoms.jsx   # High-FPS dual-mode canvas particle system
│   │   ├── Navbar.jsx           # Responsive nav with replay trigger & mobile menu
│   │   ├── Hero.jsx             # Minimalist hero with Japanese typography
│   │   ├── About.jsx            # Student bio, Kaizen ethos & exploration tags
│   │   ├── Education.jsx        # Hanging scroll-inspired timeline (JECRC University)
│   │   ├── Skills.jsx           # Clean cards (HTML, CSS, JS, Python, AI, GenAI...)
│   │   ├── Projects.jsx         # 3 selected project cards + interactive detail modal
│   │   ├── Achievements.jsx     # Future-ready milestones grid (Certifications, Hackathons...)
│   │   ├── Contact.jsx          # Direct email, copy-to-clipboard, form & social links
│   │   ├── SocialIcons.jsx      # Pixel-perfect SVG icons for GitHub & LinkedIn
│   │   └── Footer.jsx           # Minimal footer with Sakura hairline divider
│   ├── App.jsx                  # State coordination & session persistence
│   ├── main.jsx                 # React root
│   └── index.css                # Tailwind imports & custom theme tokens
├── vercel.json                  # Vercel SPA routing configuration
├── vite.config.js               # Vite + Tailwind v4 + React plugins
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Deployment to Vercel

### Option A: Via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Yash Vardhan Bankai Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your site will be live on a fast global edge network in seconds!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## ✏️ How to Customize Personal Details

- **LinkedIn & GitHub Links**: Edit `src/components/Contact.jsx` (lines 12–13) and `src/components/Projects.jsx`.
- **Projects**: Update or add items to the `PROJECTS` array in `src/components/Projects.jsx`.
- **Achievements**: Add certifications, hackathons, or awards to `ACHIEVEMENT_CATEGORIES` in `src/components/Achievements.jsx`.
- **Email**: Update `emailAddress` in `src/components/Contact.jsx`.

---

© 2026 Yash Vardhan • Designed with Japanese Minimalism × Senbonzakura
