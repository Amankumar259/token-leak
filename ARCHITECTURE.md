# SpendPilot Architecture

## Overview

SpendPilot is a SaaS platform for analyzing and optimizing AI tooling spend across engineering and knowledge teams.

The platform combines:

- rule-based optimization
- AI-generated summaries
- persistent audit storage
- transactional workflows

into a production-style full-stack architecture.

---

## System Flow

User Input
→ Audit Engine
→ Recommendation Generation
→ Savings Calculation
→ AI Summary Generation
→ Database Persistence
→ Public Results Rendering
→ Lead Capture
→ Transactional Email

---

## Frontend Architecture

### Framework

- Next.js App Router
- React Server Components
- TypeScript

### State Management

- Zustand for lightweight shared client state

### Styling

- Tailwind CSS
- custom glassmorphism design system

---

## Backend Architecture

### API Layer

- Next.js Route Handlers

### Database

- Supabase PostgreSQL

### AI Layer

- Google Gemini API

### Email Infrastructure

- Resend transactional email API

---

## Recommendation Engine

Rule-based engine that evaluates:

- subscription tiers
- seat counts
- monthly spend
- usage patterns

and generates:

- optimized plans
- estimated savings
- rationale explanations

---

## Production Considerations

### Current Protections

- Honeypot spam prevention
- Server-side secrets
- Dynamic route rendering

### Future Improvements

- Rate limiting
- Authentication
- RBAC
- Audit encryption
- Vendor-specific pricing APIs
