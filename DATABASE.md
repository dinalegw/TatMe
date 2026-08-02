# TatMe Data Notes

This scaffold is Next.js-only for now, so there is no database adapter or ORM wired in.

## Future Entities

- `User`: client, artist, and admin identities.
- `ArtistProfile`: bio, specialties, rating, shop locations, and travel radius.
- `Design`: gallery or flash item with image, tags, price, and availability status.
- `Availability`: in-shop and house-call booking windows.
- `Booking`: reserved session with type, time, location, status, and linked records.
- `IntakeForm`: structured tattoo request details and reference images.
- `Deposit`: payment state and cancellation policy snapshot.
- `Waiver`: signed consent record for legal retention.

These are captured as product requirements only. Add storage later when the app is ready for real persistence.
