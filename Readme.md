# TatMe

TatMe is a tattoo booking MVP for artists and studios. It combines portfolio discovery, flash/design selection, booking intake, deposit and consent acknowledgement, and a lightweight studio review queue in one flow.

The product goal is simple: help a client choose a tattoo, share the details a studio needs, and create a booking request without moving the conversation into DMs.

## Current Status

TatMe is currently a frontend-only Next.js demo. It is useful for validating the booking journey, studio workflow, and product direction before adding production services such as authentication, database persistence, payments, notifications, and AI-assisted intake.

Current booking requests are stored in the browser with `localStorage` under the key `tatme-bookings`.

## MVP Features

- Public tattoo gallery with style filters.
- Design cards with artist, style, placement, size, price, deposit, and availability metadata.
- Design selection that pre-fills booking guidance.
- Client booking form for contact details, session type, date, time, placement, size, budget, address, and notes.
- Support for in-shop and house-call request modes.
- Deposit-policy and digital-consent acknowledgement fields.
- Studio dashboard with pending and confirmed booking requests.
- Local confirmation action for studio review.

## Tech Stack

- Next.js 14 App Router
- React 18
- TypeScript
- npm
- Global CSS
- Remote demo images



## Getting Started

Install dependencies:

```bash
npm install
```
Run the development server:

```bash
npm run dev
```
Open the app:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

Start a production server after building:

```bash
npm run start
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server. |
| `npm run build` | Build the app for production. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run the Next.js lint command. |

## Project Structure

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
├── Readme.md
├── package.json
└── package-lock.json
```

## Key Files

| File | Responsibility |
| --- | --- |
| `app/page.tsx` | Renders the TatMe MVP surface. |
| `components/TatmeMvp.tsx` | Owns the gallery, booking form, local request storage, and studio queue UI. |
| `lib/gallery.ts` | Holds typed demo data, booking request types, available slots, and seed requests. |
| `app/globals.css` | Contains the current visual system and responsive layout styles. |
| `API.md` | Captures planned server and AI action contracts. |
| `ARCHITECTURE.md` | Documents current boundaries and near-term build order. |
| `DATABASE.md` | Defines future product entities and persistence notes. |
| `DEPLOYMENT.md` | Notes deployment assumptions and environment setup. |

## Demo Flow

### Client

1. Browse the tattoo gallery.
2. Filter designs by style.
3. Select a design.
4. Choose in-shop or house-call booking.
5. Fill out intake details.
6. Accept deposit and consent acknowledgements.
7. Submit the booking request.

### Studio

1. Review requests in the studio queue.
2. Check client, design, placement, size, budget, date, time, and notes.
3. Confirm pending requests from the dashboard.

## Current Limitations

- No backend API is connected yet.
- No production database or ORM is configured yet.
- No authentication or studio admin roles are implemented yet.
- No real payment processor is connected yet.
- No digital signature capture or waiver export exists yet.
- No AI triage or artist matching is connected yet.

## Recommended Next Build Order

1. Add real persistence for booking requests.
2. Add client and studio authentication.
3. Add artist profiles and availability windows.
4. Add deposit payment handling.
5. Add waiver signing and consent record retention.
6. Add notifications for booking updates.
7. Add AI-assisted intake triage for style, placement, size, budget, risk notes, and missing details.

## Deployment Notes

The intended default host is Vercel for the Next.js application. The current MVP does not require a production database, but future production releases should add managed storage for bookings, users, deposits, waivers, media, and notifications.

See `DEPLOYMENT.md` for environment details.

## Verification

Use the following commands before shipping changes:

```bash
npm run lint

npm run build
```
