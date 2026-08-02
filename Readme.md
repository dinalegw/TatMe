# TatMe

**TatMe is a Next.js MVP for a tattoo portfolio, booking, consent, deposit, and studio review flow.**

The product idea is simple: a client should be able to browse tattoo work and start a real booking request in one continuous flow, without screenshotting a design and moving the conversation into DMs.

---

## Current MVP

TatMe currently runs as a **Next.js + TypeScript + npm** app. It does not use a database yet. Booking requests are saved in the browser with `localStorage` under the key `tatme-bookings`.

The MVP includes:

- Public tattoo gallery with style filters.
- Design selection that pre-fills placement, size, and budget guidance.
- Booking request form with client details, in-shop vs house-call mode, date/time, placement, size, budget, address, and notes.
- Deposit-policy acknowledgement.
- Digital consent readiness acknowledgement.
- Studio dashboard queue with pending and confirmed booking requests.
- Local request confirmation from the dashboard.

---

## Tech Stack

| Layer | Current Choice |
|---|---|
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Package manager | npm |
| Styling | Plain global CSS |
| Persistence | Browser `localStorage` for MVP demo data |
| Images | `next/image` with remote Unsplash demo assets |

No Tailwind, Prisma, database, auth provider, payment provider, or AI provider is currently wired into the app.

---

## Project Structure

```text
TatMe/
├── app/
│   ├── globals.css          # App-wide styling
│   ├── layout.tsx           # Root layout and metadata
│   └── page.tsx             # Home route renders the MVP component
├── components/
│   └── TatmeMvp.tsx         # Interactive MVP: gallery, booking, dashboard
├── lib/
│   └── gallery.ts           # Typed design data, booking types, seed requests
├── API.md                   # Current client actions and planned API/AI actions
├── ARCHITECTURE.md          # MVP architecture notes
├── DATABASE.md              # Data notes and future entities
├── DEPLOYMENT.md            # Local and deployment notes
├── package.json
└── package-lock.json
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

---

## Core User Flow

### Client

1. Browse the gallery.
2. Filter designs by style.
3. Select a tattoo design.
4. Choose in-shop or house-call booking.
5. Enter contact details, date/time, placement, size, budget, and notes.
6. Accept the deposit-policy acknowledgement.
7. Confirm digital-consent readiness.
8. Submit the booking request.

### Studio

1. Review incoming requests in the dashboard queue.
2. See client, design, date/time, session type, placement, size, and notes.
3. Confirm pending requests locally.

---

## Product Direction

TatMe is designed to avoid the common tattoo-site failure mode: beautiful portfolio, weak booking path. The product should keep the art, intake, deposit, consent, and studio review process connected.

Important future capabilities:

- Real database persistence for bookings, clients, designs, and artists.
- Client and studio authentication.
- Real availability calendar for in-shop and house-call windows.
- Payment provider integration for deposits.
- Digital signature capture and waiver export.
- Email/SMS confirmations and reminders.
- Admin tools for flash inventory, client history, healed photos, and payouts.
- AI-assisted intake triage for style, placement, size, budget, risk notes, and missing information.

---

## Future Data Model

The likely production entities are:

- `User`
- `ArtistProfile`
- `Design`
- `Availability`
- `Booking`
- `IntakeForm`
- `Deposit`
- `Waiver`
- `Review`

For the MVP, these are represented by typed in-app data in `lib/gallery.ts` and browser-local booking requests.

---

## Open Decisions

- Single artist or multi-artist studio?
- One shop location or multiple?
- Exact deposit amount and cancellation/reschedule policy?
- Waiver jurisdiction and legal retention requirements?
- Payment provider choice?
- Auth provider choice?
- AI provider and intake triage design?

---

## Current Verification

The MVP has been verified with:

```bash
npm run build
```
