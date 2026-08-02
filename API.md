# TatMe API Contract

TatMe is Next.js-only for this MVP. Current booking requests are stored in browser `localStorage`, so no server API is required yet.

## Current Client Actions

- Select a design.
- Filter designs by style.
- Submit a booking request after intake, consent, and deposit acknowledgement.
- Confirm a pending request in the studio queue.

## Planned Server Actions

- `createBookingRequest`: creates a pending booking from design, artist, type, selected time, and location.
- `submitIntakeForm`: attaches structured intake answers and reference images.
- `createDepositRecord`: stores a deposit requirement once payment handling is chosen.
- `signWaiver`: stores consent text, legal name, signature reference, and timestamp.
- `updateAvailabilityWindow`: lets artists manage shop or house-call windows.

## Planned AI Actions

- `triageIntake`: extracts style, placement, size, risk notes, and missing details from client notes.
- `recommendArtist`: matches a request to artists by style, availability, and travel radius.
- `draftClientReply`: drafts a studio approval or follow-up message from booking context.

## Planned Route Handlers

- `POST /api/webhooks/payments`: reconciles deposit status, refunds, and failures once a payment provider is chosen.
- `POST /api/webhooks/notifications`: optional callback endpoint for email/SMS delivery providers.
