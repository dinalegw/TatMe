# TatMe Architecture

TatMe is scaffolded as a Next.js App Router product with server-rendered public surfaces and progressively enhanced booking/admin workflows.

## Boundaries

- `app/` owns routes, layouts, and page composition.
- `components/` will hold reusable UI and workflow components as the app grows.
- `lib/` holds typed content and domain helpers.
- `app/globals.css` owns the current styling layer.

## Product Principle

The main user path is one continuous action: browse a tattoo design, choose in-shop or house-call, complete intake, pay a deposit, and sign consent.

## Near-Term Build Order

1. Split the landing, gallery, and booking sections into reusable components.
2. Add booking route groups for design selection, intake, availability, deposit, and waiver.
3. Add storage only after the product flow is confirmed.
4. Add deposit handling once the cancellation policy is final.
5. Add admin calendar, flash inventory, and client history.
