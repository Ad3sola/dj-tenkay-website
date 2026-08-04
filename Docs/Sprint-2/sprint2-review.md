# Sprint 2 Review

**Sprint Goal:** Build About, Music, and Gallery sections.
**Status:** ✅ Completed

---

## What Shipped

- `About.jsx` — Bio, stats grid, notable events table, real DJ photo
- `Music.jsx` — YouTube and TikTok channel cards with real links, 
  coming soon waveform placeholder, genre tags
- `Gallery.jsx` — Featured photo carousel (auto-cycles every 4 seconds), 
  12 event videos in a grid, fullscreen modal with audio playback, 
  left/right navigation and keyboard arrow support

---

## What Didn't Ship (and Why)

- Vercel deployment — carried over to Sprint 3
- YouTube mix embeds — no official mixes posted yet, 
  placeholder built and ready for when they drop

---

## Decisions Made This Sprint

> **Decision:** Built a fullscreen modal for video playback instead 
  of unmuting grid videos.
> **Reason:** More intentional and premium feeling — mirrors how 
  streaming platforms handle video content.

> **Decision:** Used autoplay + muted for gallery grid videos.
> **Reason:** Browser security policies block autoplay with audio. 
  Muted autoplay keeps the grid alive and engaging without 
  requiring user interaction.

> **Decision:** Featured section auto-cycles between photos 
  every 4 seconds with dot indicators.
> **Reason:** More dynamic than a static image. Keeps "Behind 
  the Decks" as a permanent title regardless of which photo 
  shows — consistent branding.

> **Decision:** Excluded large video files from GitHub tracking 
  via .gitignore.
> **Reason:** GitHub has a 100MB file size limit. Videos will 
  be migrated to YouTube embeds in Sprint 4.

---

## Lessons Learned

- Learned how to link and serve local photos and videos to a 
  React frontend using Vite's public folder structure — files 
  must live in `public/` not `src/assets/` to be accessible 
  via URL path
- Learned how to embed external social media links (YouTube, 
  TikTok) into a website in a clean, branded way
- Learned how to build an auto-cycling photo carousel in React 
  using `useState`, `useEffect`, and `setInterval`
- Learned how to build an interactive gallery section with a
  fullscreen modal, audio playback, and keyboard navigation
  using React state management
- Learned that GitHub has a 100MB file size limit — large media
  files like videos should be added to `.gitignore` and will be
  migrated to YouTube embeds in Sprint 4 for better performance
  and scalability

---

## Metrics

| Metric | Target | Actual |
|---|---|---|
| About section complete | ✅ | ✅ |
| Music section complete | ✅ | ✅ |
| Gallery with modal | ✅ | ✅ |
| Real photo in About | ✅ | ✅ |
| Vercel deployment | ✅ | ⬜ Pushed to Sprint 3 |

---

## Sprint 3 Backlog

- Deploy to Vercel
- Build booking form (frontend)
- Build FastAPI backend
- Set up PostgreSQL database
- Automated email confirmation on booking