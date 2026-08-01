# TatMe Database

The initial Prisma schema lives in `prisma/schema.prisma`.

## Core Tables

- `User`: client, artist, and admin identities.
- `ArtistProfile`: public profile, specialties, rating, travel radius, designs, and availability.
- `Design`: gallery or flash item with image, tags, price, and status.
- `Location`: studio address records.
- `Availability`: in-shop and house-call booking windows.
- `Booking`: reserved session with type, time, location, status, and linked records.
- `IntakeForm`: structured tattoo request details and reference images.
- `Deposit`: payment state and cancellation policy snapshot.
- `Waiver`: signed consent record for legal retention.

## Decisions To Confirm

- Single artist or multi-artist studio.
- Final auth provider.
- Deposit amount and refund/reschedule policy.
- Legal jurisdiction for waiver fields and retention rules.
