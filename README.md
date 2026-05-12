# SpendPilot

AI infrastructure cost optimization platform that audits AI tooling spend and generates actionable savings recommendations.

## Features

- AI tooling audit workflow
- Recommendation engine
- Savings calculations
- AI-generated optimization summaries
- Persistent audit storage
- Shareable audit URLs
- Lead capture workflow
- Transactional email delivery
- Responsive SaaS dashboard UI

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Supabase
- Google Gemini API
- Resend
- Zustand
- Vitest
- Vercel

## Architecture

### Frontend

- App Router architecture
- Server Components for audit rendering
- Client Components for interactive workflows
- Zustand state management

### Backend

- Next.js API Routes
- Supabase PostgreSQL storage
- AI summary generation with Gemini
- Transactional emails with Resend

### Recommendation Engine

Rule-based optimization system that analyzes:

- subscription plans
- team size
- monthly spend
- usage patterns

and generates optimization recommendations.

## Local Development

```bash
npm install
npm run dev

Environment Variables

NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_role_key
GEMINI_API_KEY=your_gemini_api_key
RESEND_API_KEY=your_resend_api_key

Deployment : Production deployment handled through Vercel.

Future Improvements

ML-based recommendation engine
Rate limiting
Advanced analytics
Vendor benchmarking
SOC2-ready audit logging
Multi-org support
```
