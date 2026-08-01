# TatMe API Contract

TatMe should prefer Server Actions for form mutations that stay inside the app and route handlers for external callbacks such as Stripe webhooks.

## Planned Actions

- `createBookingRequest`: creates a pending booking from design, artist, type, selected time, and location.
- `submitIntakeForm`: attaches structured intake answers and reference images.
- `createDepositIntent`: creates a Stripe payment intent for the required deposit.
- `signWaiver`: stores consent text, legal name, signature reference, and timestamp.
- `updateAvailabilityWindow`: lets artists manage shop or house-call windows.

## Planned Route Handlers

- `POST /api/webhooks/stripe`: reconciles deposit status, refunds, and failures.
- `POST /api/webhooks/notifications`: optional callback endpoint for email/SMS delivery providers.
