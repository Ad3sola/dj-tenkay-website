# Sprint 3 Review

**Sprint Goal:** Build a working booking form connected to a
Python FastAPI backend with PostgreSQL and automated emails.
**Status:** ✅ Completed

---

## What Shipped

- `Booking.jsx` — Full booking form with name, email, event
  type, date, and message fields
- Form validation — required fields, email format checking
- Success state — "REQUEST SENT" confirmation on screen after submit
- `main.py` — FastAPI server with POST /booking and GET /bookings
- `database.py` — PostgreSQL connection via SQLAlchemy
- `models.py` — Bookings table with all fields + auto timestamp
- `schemas.py` — Pydantic validation for incoming form data
- Resend email integration — two emails sent on every booking
- `bytenkay.com` domain purchased and verified on Resend

---

## What Didn't Ship (and Why)

- Vercel + Railway deployment — carrying over to Sprint 4
- Client email to unverified addresses — requires verified
  domain which is now set up for Sprint 4

---

## Decisions Made This Sprint

> **Decision:** Switched from Gmail SMTP to Resend for emails.
> **Reason:** Gmail SMTP kept rejecting credentials due to 
  security restrictions. Resend is a modern email API that's 
  cleaner, more reliable, and better for production use.

> **Decision:** Purchased bytenkay.com domain.
> **Reason:** Required to send emails to any address via Resend.
  Also sets up the site for a professional deployment URL 
  in Sprint 4.

> **Decision:** Used Pydantic EmailStr for email validation.
> **Reason:** Automatically validates email format before 
  it hits the database — no manual regex needed.

---

## Lessons Learned

- Learned how to integrate a third-party email API (Resend)
  into a Python backend to automatically route confirmation
  and notification emails on form submission
- Learned how to connect PostgreSQL to a FastAPI backend
  using SQLAlchemy as the ORM — including creating database
  models, sessions, and auto-generating tables on startup
- Learned how to build a full REST API with FastAPI including
  POST and GET endpoints, Pydantic validation, and automatic
  Swagger documentation at /docs
- Learned how to connect a React frontend to a Python backend 
  using the Fetch API — sending JSON data from a form and 
  handling success and error responses
- Learned that Gmail SMTP has security restrictions that block 
  programmatic access — professional projects use dedicated 
  email APIs like Resend instead
- Learned how DNS records work by purchasing bytenkay.com 
  and adding DKIM, SPF, and DMARC records to verify the 
  domain for email sending

---

## Metrics

| Metric | Target | Actual |
|---|---|---|
| Booking form live on frontend | ✅ | ✅ |
| FastAPI backend running | ✅ | ✅ |
| PostgreSQL storing bookings | ✅ | ✅ |
| Email confirmation working | ✅ | ✅ |
| Vercel deployment | ✅ | ⬜ Sprint 4 |

---

## Sprint 4 Backlog

- Deploy frontend to Vercel at bytenkay.com
- Deploy backend to Railway
- Update CORS in main.py with live Vercel URL
- Lighthouse performance audit
- Mobile responsiveness final check
- YouTube mix embeds when mixes are posted