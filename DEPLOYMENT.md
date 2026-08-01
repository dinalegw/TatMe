# TatMe Deployment

## Required Environment

```bash
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

Add provider-specific values later for media storage, maps, email, and SMS.

## Local Setup

```bash
npm install
npm run prisma:generate
npm run dev
```

## Hosting

The intended default is Vercel for the Next.js app and a managed PostgreSQL provider such as Neon, Supabase, or RDS.
