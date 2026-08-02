# TatMe API Contract

TatMe is Next.js-only for this scaffold. Future mutations should prefer Server Actions for forms that stay inside the app and route handlers only when an external callback is needed.

## Planned Actions

- `createBookingRequest`: creates a pending booking from design, artist, type, selected time, and location.
- `submitIntakeForm`: attaches structured intake answers and reference images.
- `createDepositRecord`: stores a deposit requirement once payment handling is chosen.
- `signWaiver`: stores consent text, legal name, signature reference, and timestamp.
- `updateAvailabilityWindow`: lets artists manage shop or house-call windows.

## Planned Route Handlers

- `POST /api/webhooks/payments`: reconciles deposit status, refunds, and failures once a payment provider is chosen.
- `POST /api/webhooks/notifications`: optional callback endpoint for email/SMS delivery providers.
