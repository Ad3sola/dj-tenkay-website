# Sprint 1 Review

**Sprint Goal:** Get a live, branded hero landing page deployed at DJ Tenkay's domain.
**Status:** ✅ Completed

---

## What Shipped

- `Nav.jsx` — Sticky navigation with DJ Tenkay branding, desktop links, 
  and a mobile hamburger menu
- `Hero.jsx` — Full hero section with hook line, tagline, genre tags, 
  dual CTAs, social links, and scroll indicator
- `Footer.jsx` — Footer with social media links and copyright
- Design system established — dark color palette, Bebas Neue display font, 
  Inter body font, and violet accent color (#7C3AED)
- GitHub repository live at github.com/Ad3sola/dj-tenkay-website with 
  full /docs folder committed

---

## What Didn't Ship (and Why)

- **Vercel deployment** — Site is running locally but not yet deployed 
  to a public URL. Pushed to Sprint 2 because environment setup and 
  Git authentication took longer than anticipated this sprint.
- **Mobile responsiveness audit** — Components are built with responsive 
  classes but a full mobile test hasn't been completed yet.

---

## Decisions Made This Sprint

> **Decision:** Used Vite instead of Create React App to scaffold the 
  frontend.
> **Reason:** Vite is faster, lighter, and what most modern companies 
  are using for React projects. Better prepares me for real engineering 
  environments.

> **Decision:** Modeled the visual aesthetic after Spotify and Apple 
  Music dark UI.
> **Reason:** Both platforms are music-first experiences that feel 
  immersive and premium. This aligns with DJ Tenkay's brand and makes 
  the site feel familiar to a music audience.

> **Decision:** Used Bebas Neue for the display font.
> **Reason:** Bold, condensed, and raw — matches the underground 
  aesthetic of the brand. Seen widely in streetwear and music branding.

> **Decision:** Used Tailwind CSS for styling instead of plain CSS.
> **Reason:** Utility-first approach speeds up development and is 
  used at companies like Vercel, Linear, and GitHub. Good skill to 
  build for software engineering roles.

---

## Lessons Learned

- **Git authentication** — GitHub no longer accepts passwords for 
  pushes. Learned how to generate and use a Personal Access Token (PAT) 
  to authenticate. Also learned the importance of running `git init` 
  inside the project folder, not the home directory.
- **Project structure matters early** — Spent time reorganizing files 
  that were placed in the wrong directories. Going forward, folder 
  structure will be set up before any files are created.
- **Thinking before building** — Researching reference sites 
  (Spotify, Apple Music, Pz', Øway) before writing any code gave the 
  design a clear direction and saved time during development.

---

## Metrics

| Metric | Target | Actual |
|---|---|---|
| Hero page live locally | ✅ | ✅ |
| GitHub repo with docs committed | ✅ | ✅ |
| Modular React components built | ✅ | ✅ |
| Vercel deployment | ✅ | ⬜ Pushed to Sprint 2 |
| Mobile responsiveness audit | ✅ | ⬜ Pushed to Sprint 2 |
| Lighthouse performance score | 90+ | ⬜ Pending deployment |

---

## Sprint 2 Backlog

- Deploy to Vercel and confirm public URL is live
- Complete mobile responsiveness audit
- Build About section
- Build Music / mixes embed (SoundCloud or Mixcloud)
- Build Gallery section