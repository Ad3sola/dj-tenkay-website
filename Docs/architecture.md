# System Architecture

**Project:** DJ Tenkay Official Website
**Version:** 1.0 (Updated each sprint as architecture evolves)

---

## Architecture Diagram

```
[ Browser / User ]
        |
        ▼
┌─────────────────────────┐
│  React + Tailwind CSS   │  ← Hosted on Vercel
│  (Frontend)             │
│                         │
│  Components:            │
│  - Hero                 │
│  - Nav                  │
│  - About                │
│  - Music                │
│  - Gallery              │
│  - Booking Form         │
│  - Testimonials         │
│  - Footer               │
└────────────┬────────────┘
             │
             │ HTTP REST API (JSON)
             ▼
┌─────────────────────────┐
│  FastAPI (Python)       │  ← Hosted on Railway
│  (Backend)              │
│                         │
│  Routes:                │
│  POST /booking          │
│  GET  /bookings (admin) │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  PostgreSQL Database    │  ← Hosted on Railway
│                         │
│  Tables:                │
│  - bookings             │
└─────────────────────────┘
             │
             ▼
┌─────────────────────────┐
│  Email Service          │
│  (SMTP / SendGrid)      │  ← Triggered by FastAPI on booking
└─────────────────────────┘
```

---

## Tech Stack Decisions

### Frontend — React + Vite + Tailwind CSS
**Why React:** Industry standard for frontend engineering roles. Component-based architecture maps directly to the modular requirements (NFR-07). Largest hiring demand in frontend.

**Why Vite:** Faster dev server than Create React App. Used widely in modern projects.

**Why Tailwind:** Utility-first CSS used at companies like Vercel, Linear, GitHub. Faster iteration, no context switching between CSS files.

### Backend — Python FastAPI
**Why FastAPI:** Modern, async Python web framework. Used at Uber, Netflix, Microsoft. Automatic API documentation via Swagger UI (great for portfolio). Faster than Flask for API workloads.

**Why Python:** Aligns with existing Python experience and is the most common language in data, backend, and automation roles.

### Database — PostgreSQL
**Why PostgreSQL:** Industry standard relational database. Supported natively on Railway. Scales well and pairs naturally with SQLAlchemy ORM in Python.

### Deployment
**Frontend → Vercel:** Zero-config React deployment. Auto-deploys on every GitHub push (CI/CD built in).

**Backend → Railway:** Simple Python/PostgreSQL hosting with free tier. Connects to GitHub for auto-deploy.

---

## Data Model

### bookings table
| Column | Type | Description |
|---|---|---|
| id | SERIAL PRIMARY KEY | Auto-incrementing ID |
| name | VARCHAR(100) | Client full name |
| email | VARCHAR(150) | Client email address |
| event_type | VARCHAR(100) | e.g. Birthday, Wedding, College Event |
| event_date | DATE | Requested event date |
| message | TEXT | Additional details from client |
| created_at | TIMESTAMP | Auto-set on submission |

---

## API Endpoints

| Method | Endpoint | Description | Status |
|---|---|---|---|
| POST | /booking | Submit a booking inquiry | Planned (Sprint 3) |
| GET | /bookings | List all bookings (admin) | Planned (Sprint 4) |

---

## CI/CD Pipeline

```
Developer pushes code to GitHub
        │
        ▼
GitHub triggers Vercel build (frontend)
GitHub triggers Railway deploy (backend)
        │
        ▼
Auto-deploy live within ~60 seconds
```

*Set up in Sprint 1 for frontend, Sprint 3 for backend.*
