# Sprint 3 Plan

**Sprint Goal:** 
Build a working booking form connected to a
Python FastAPI backend with PostgreSQL database and
automated email confirmation.

**Duration:** 2 weeks
**Status:** 🟡 In Progress

---

## Sprint Tasks

### Frontend
- [ ] Build `Booking.jsx` component
- [ ] Form fields: name, email, event type, date, message
- [ ] Client-side form validation
- [ ] Success message on submission
- [ ] Error message if submission fails

### Backend
- [ ] Set up FastAPI project in `/backend`
- [ ] Create `POST /booking` endpoint
- [ ] Pydantic model for form validation
- [ ] Connect to PostgreSQL database
- [ ] Create bookings table
- [ ] Store form submissions in database
- [ ] Send automated confirmation email to client
- [ ] Send notification email to DJ Tenkay

### Deployment
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Railway
- [ ] Connect frontend to live backend URL

---

## Definition of Done

- Someone can fill out the booking form on the live site
- Submission is saved to PostgreSQL database
- Client receives an automated confirmation email
- DJ Tenkay receives a notification email with booking details

---

## Requirements Covered This Sprint

| Requirement ID | Description |
|---|---|
| FR-05 | Booking inquiry form |
| FR-06 | Automated email confirmation |
| SR-01 | PostgreSQL stores submissions |
| SR-02 | FastAPI sends confirmation email |
| SR-03 | REST API POST endpoint |
| SR-04 | Frontend + backend validation |