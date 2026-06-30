# Sprint 1 Plan

**Sprint Goal:** Get a live, branded hero landing page deployed at DJ Tenkay's domain.

**Duration:** 2 weeks
**Status:** 🟡 In Progress

---

## Sprint Tasks

### Setup
- [ ] Initialize React app using Vite (`npm create vite@latest`)
- [ ] Install and configure Tailwind CSS
- [ ] Create GitHub repository and push initial commit
- [ ] Set up `/docs` folder structure
- [ ] Connect repo to Vercel for auto-deployment

### Development
- [ ] Build `Nav` component — sticky navigation with DJ Tenkay name + links
- [ ] Build `Hero` component — hook line, tagline, CTA button
- [ ] Build `Footer` component — social media links (TikTok, Instagram)
- [ ] Apply brand design tokens (colors, typography, spacing)
- [ ] Ensure mobile responsiveness (375px and up)

### Documentation
- [ ] Commit `phase-0-brief.md`
- [ ] Commit `requirements.md`
- [ ] Commit `architecture.md`
- [ ] Write `sprint-1/sprint-review.md` at end of sprint

---

## Definition of Done

A Sprint 1 task is complete when:
- The feature works correctly in both desktop and mobile views
- Code is committed to GitHub with a clear commit message
- No console errors in the browser

Sprint 1 is complete when:
- The site is live at the Vercel URL (or custom domain)
- Hero section renders correctly on mobile and desktop
- GitHub repo has all `/docs` files committed
- Sprint review is written

---

## Design Tokens (Sprint 1)

| Token | Value | Usage |
|---|---|---|
| `bg-primary` | `#0A0A0A` | Main background |
| `bg-surface` | `#111111` | Card / nav background |
| `accent` | `#7C3AED` | CTA buttons, highlights (deep violet) |
| `text-primary` | `#F5F5F5` | Headlines |
| `text-muted` | `#888888` | Subtext, captions |
| `font-display` | `Bebas Neue` | Hook line, large headings |
| `font-body` | `Inter` | Body text, nav, labels |

---

## Requirements Covered This Sprint

| Requirement ID | Description |
|---|---|
| FR-01 | Hero section with hook and tagline |
| FR-08 | Social media links in footer |
| FR-09 | Sticky navigation bar |
| NFR-03 | Mobile responsive |
| NFR-07 | Modular React components |
