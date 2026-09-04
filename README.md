# DJ Tenkay — Official Website

> **"You don't want 100, you want Tenkay."**
> *Open-format. Every genre. Every room. One name.*

A full-stack personal business website for DJ Tenkay — an open-format DJ specializing in Afrobeats, Amapiano, and Trap. Built from scratch using React, Tailwind CSS, and Python (FastAPI) following an Agile development methodology.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) + Tailwind CSS |
| Backend | Python — FastAPI |
| Database | PostgreSQL |
| Deployment (Frontend) | Vercel |
| Deployment (Backend) | Railway |
| Version Control | Git + GitHub |

---

## Project Structure

```
dj-tenkay-website/
├── README.md
├── docs/
│   ├── phase-0-brief.md        # Brand discovery & brief
│   ├── requirements.md         # Functional & non-functional requirements
│   ├── architecture.md         # System design & architecture diagram
│   └── sprint-1/
│       ├── sprint-plan.md      # Sprint goals, tasks, definition of done
│       └── sprint-review.md    # What shipped, decisions made, lessons learned
├── frontend/                   # React + Tailwind app
└── backend/                    # FastAPI Python backend
```

---

## Development Methodology

This project is built using **Agile** with 2-week sprints. Each sprint has a documented plan and review inside `/docs`. This mirrors professional engineering workflows and provides a clear record of how the project evolved.

---

## Sprint Progress

| Sprint | Goal | Status |
|---|---|---|
| Sprint 1 | Hero landing page — live at domain | Completed ✅ |
| Sprint 2 | Content sections — About, Music, Gallery | Completed ✅|
| Sprint 3 | Booking form + FastAPI backend + PostgreSQL | Completed ✅ |
| Sprint 4 | Animations, polish, Docker, full deployment | Completed ✅ |

---

## Getting Started (Local Development)

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## About DJ Tenkay

DJ Tenkay is an open-format DJ with a specialty in Afrobeats, Amapiano, and Trap music, also exploring R&B, Pop, and House. Available for major events (ASA Weekend, college events, weddings) and private events (birthdays, pool parties, cookouts, graduations).
