# Testing Strategy

## Unit Tests

Vitest is used for validating the recommendation engine.

Covered scenarios:

- Cursor optimization logic
- savings calculation validation
- non-negative savings enforcement

## Manual Testing

The following workflows were manually validated:

- audit generation
- recommendation rendering
- Supabase persistence
- lead capture
- email delivery
- responsive layouts
- dynamic routing
- deployment workflows

## CI/CD

GitHub Actions automatically:

- installs dependencies
- runs tests
- validates production builds
