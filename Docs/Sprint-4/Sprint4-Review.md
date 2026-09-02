# Sprint 4 Review

**Sprint Goal:** Deploy the full stack to production and 
polish the site for real users.
**Status:** ✅ Completed

---

## What Shipped

- Frontend deployed to Vercel at bytenkay.com
- Backend deployed to Railway with Python 3.13
- PostgreSQL database provisioned on Railway
- Custom domain bytenkay.com connected to Vercel via 
  Namecheap DNS records
- CORS configured to allow requests from bytenkay.com 
  and www.bytenkay.com
- Live stats bar showing real-time booking count from 
  PostgreSQL via /stats endpoint
- YouTube mix embedded in Music section
- Meta tags and Open Graph updated for proper link previews
- railway.toml configured with correct start command
- About photo added to public assets

---

## What Didn't Ship (and Why)

- Live booking count display — Stats component built and 
  endpoint working but frontend fetch URL needs debugging. 
  Pushed to backlog.
- Calendar/events section — planned feature pushed to 
  post-launch backlog
- TTU Springfest video — 262MB exceeds GitHub's 100MB 
  limit. Will be migrated to YouTube embed in a future update.

---

## Decisions Made This Sprint

> **Decision:** Used Vercel for frontend and Railway 
  for backend instead of a single hosting provider.
> **Reason:** Vercel is purpose-built for React/Vite 
  frontends with zero-config deployment and automatic 
  CI/CD on every GitHub push. Railway handles Python 
  backends and PostgreSQL cleanly on a free tier.

> **Decision:** Used railway.toml to define the start command.
> **Reason:** Railway couldn't auto-detect the uvicorn 
  start command without explicit configuration. The 
  railway.toml file gives Railway exact instructions 
  for how to run the app.

> **Decision:** Switched DATABASE_URL from local PostgreSQL 
  to Railway PostgreSQL.
> **Reason:** The local database is only accessible on 
  your machine. Railway provides a cloud-hosted PostgreSQL 
  instance with a public connection URL accessible 
  from anywhere.

> **Decision:** Added explicit CORS origins including 
  both bytenkay.com and www.bytenkay.com.
> **Reason:** Browsers treat these as different origins. 
  Missing www caused booking form submissions to be 
  blocked by CORS policy in production.

---

## Lessons Learned

*Fill this in with what you learned this sprint*

---

## Metrics

| Metric | Target | Actual |
|---|---|---|
| Frontend deployed to Vercel | ✅ | ✅ |
| Backend deployed to Railway | ✅ | ✅ |
| Custom domain connected | ✅ | ✅ |
| Booking form works on live site | ✅ | ✅ |
| Emails sending in production | ✅ | ✅ |
| Live stats bar | ✅ | ⬜ Debugging |
| Meta tags updated | ✅ | ✅ |

---

## Post-Launch Backlog

- Fix live booking count display
- Add upcoming events / calendar section
- Migrate large videos to YouTube embeds
- Lighthouse performance audit
- Add Instagram feed or latest posts section
- Update Music section as new mixes drop