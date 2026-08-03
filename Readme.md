# TatMe

TatMe is a polished tattoo-booking MVP that combines portfolio browsing, design selection, booking intake, consent/deposit acknowledgement, and a studio review queue in one experience.

The goal is simple: let a client discover tattoo work, choose a design, and start a real booking request without leaving the site or switching into DMs.

## What the MVP includes

TatMe currently offers a working demo experience with:

- A public tattoo gallery with style filtering
- Design cards that pre-fill placement, size, and budget guidance
- A booking form for client details, session type, date/time, placement, size, budget, address, and notes
- Deposit-policy and digital-consent acknowledgement steps
- A studio dashboard showing pending and confirmed requests
- Local persistence of requests in the browser via `localStorage`

## Current stack

- Next.js 14 App Router
- React 18
- TypeScript
- npm
- Plain global CSS
- Remote image assets for the demo experience

This MVP does not yet include a database, authentication, payments, or AI-assisted intake.

## Project structure

```text
TatMe/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── TatmeMvp.tsx
├── lib/
│   └── gallery.ts
├── API.md
├── ARCHITECTURE.md
├── DATABASE.md
├── DEPLOYMENT.md
├── package.json
└── package-lock.json
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

## Demo flow

### Client side

1. Browse the gallery.
2. Filter designs by style.
3. Select a tattoo design.
4. Choose in-shop or house-call booking.
5. Fill out the intake form and accept the required acknowledgements.
6. Submit the request.

### Studio side

1. Review incoming requests in the dashboard queue.
2. See the client, design, session details, placement, size, and notes.
3. Confirm requests from the same interface.

## Notes on current state

Booking requests are stored locally in the browser under the key `tatme-bookings`, which makes the demo easy to run without a backend. The next phase will likely add database persistence, authentication, real availability, payment handling, and digital waivers.

## Verification

The current MVP has been built successfully with:

```bash
npm run build
```
