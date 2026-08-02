# TatMe Architecture

TatMe is a Next.js App Router MVP with a client-side booking workflow and a browser-local studio queue.

## Boundaries

- `app/` owns routes, layouts, and page composition.
- `components/TatmeMvp.tsx` owns the current interactive MVP surface.
- `lib/` holds typed content, booking request types, slot data, and seed data.
- `app/globals.css` owns the current styling layer.

## Product Principle

The main user path is one continuous action: browse a tattoo design, choose in-shop or house-call, complete intake, pay a deposit, and sign consent.

## MVP Scope

- Gallery filtering by tattoo style.
- Design selection that pre-fills placement, size, and budget guidance.
- Booking request form for client details, date, time, shop/house-call mode, notes, consent, and deposit acknowledgement.
- Requests are saved in `localStorage` under `tatme-bookings`.
- Studio dashboard view shows pending/confirmed booking requests and lets the studio confirm a request locally.

## Near-Term Build Order

1. Add real persistence for booking requests.
2. Add auth for clients and studio admins.
3. Add payment provider integration for deposits.
4. Add digital signature capture and waiver export.
5. Add AI-assisted intake triage for style, size, budget, and artist matching.
