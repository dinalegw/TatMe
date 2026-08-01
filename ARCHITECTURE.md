# TatMe Architecture

TatMe is scaffolded as a Next.js App Router product with server-rendered public surfaces and progressively enhanced booking/admin workflows.

## Boundaries

- `app/` owns routes, layouts, and page composition.
- `components/` will hold reusable UI and workflow components as the app grows.
- `lib/` holds typed data access, validation, auth helpers, payment helpers, and domain utilities.
- `prisma/` owns the relational schema and migrations.

## Product Principle

The main user path is one continuous action: browse a tattoo design, choose in-shop or house-call, complete intake, pay a deposit, and sign consent.

## Near-Term Build Order

1. Replace static gallery data with Prisma-backed artists and designs.
2. Add booking route groups for design selection, intake, availability, deposit, and waiver.
3. Add Auth.js or Clerk once user role decisions are confirmed.
4. Add Stripe checkout/payment intent handling for deposits.
5. Add admin calendar, flash inventory, and client history.
