# Requirements Document

**Project:** DJ Tenkay Official Website
**Version:** 1.0
**Last Updated:** Sprint 1

---

## 1. Functional Requirements — User Facing

| ID | Requirement | Sprint Target |
|---|---|---|
| FR-01 | User can view the hero section with hook line and tagline | Sprint 1 |
| FR-02 | User can read DJ Tenkay's bio, genres, and event types | Sprint 2 |
| FR-03 | User can listen to embedded mixes (SoundCloud / Mixcloud) | Sprint 2 |
| FR-04 | User can browse a photo and video gallery of past events | Sprint 2 |
| FR-05 | User can submit a booking inquiry form with name, email, event type, and date | Sprint 3 |
| FR-06 | User receives an automated email confirmation after submitting a booking inquiry | Sprint 3 |
| FR-07 | User can read testimonials from past clients | Sprint 3 |
| FR-08 | User can navigate to DJ Tenkay's social media profiles (TikTok, Instagram) | Sprint 1 |
| FR-09 | User can navigate between all sections via a sticky navigation bar | Sprint 1 |

---

## 2. Functional Requirements — System

| ID | Requirement | Sprint Target |
|---|---|---|
| SR-01 | System stores booking form submissions in a PostgreSQL database | Sprint 3 |
| SR-02 | System sends automated confirmation email via FastAPI on form submission | Sprint 3 |
| SR-03 | System exposes a REST API POST endpoint to receive booking form data | Sprint 3 |
| SR-04 | System validates all form inputs on both frontend and backend | Sprint 3 |
| SR-05 | System provides an admin view to list all booking inquiries | Sprint 4 |

---

## 3. Non-Functional Requirements

| ID | Category | Requirement | Sprint Target |
|---|---|---|---|
| NFR-01 | Performance | Page initial load under 3 seconds on standard connection | Sprint 4 |
| NFR-02 | Reliability | 99%+ uptime via Vercel deployment | Sprint 4 |
| NFR-03 | Usability | Site is fully responsive on mobile (375px and up) | Sprint 1 |
| NFR-04 | SEO | Each page has meta title, description, and OG image | Sprint 4 |
| NFR-05 | Accessibility | All images have alt text; contrast ratios meet WCAG AA | Sprint 2 |
| NFR-06 | Security | Form inputs sanitized; API rate limited to prevent spam | Sprint 3 |
| NFR-07 | Maintainability | Codebase uses modular React components | Sprint 1 |

---

## 4. Test Case Matrix

| Requirement ID | Test Case ID | Description |
|---|---|---|
| FR-05 | TC-01 | User submits booking form with valid data |
| FR-05 | TC-02 | User submits booking form with missing required fields |
| FR-06 | TC-03 | Confirmation email is received after valid form submission |
| SR-01 | TC-04 | Booking data is saved correctly in the database |
| SR-03 | TC-05 | API POST endpoint returns 200 on valid submission |
| SR-03 | TC-06 | API POST endpoint returns 422 on invalid/missing data |
| NFR-03 | TC-07 | Site renders correctly on 375px mobile viewport |

*Test cases will be documented in full in `/docs/sprint-3/` when backend is built.*

---

## 5. Out of Scope (Current Version)

- User authentication / login
- Online payment processing
- Real-time chat
- Multi-language support

*These may be added to the backlog in future sprints.*
