# TatMe

**A tattoo portfolio, storefront, and booking platform — browse designs, book a session at the shop or have the artist come to you.**


> This README is the root document for the project. Every other doc (architecture, database schema, API contracts, deployment) is scaffolded from the decisions made here. Read this first before touching code.

---

## 1. What TatMe Is

TatMe is a full-stack e-commerce and booking site for a tattoo artist/studio. A visitor can:

- Browse a **design gallery** (portfolio work, available flash, custom-request examples) filtered by style, size, placement, and price range.
- View **artist profiles** (bio, specialties, rating, availability).
- **Book a session** two ways:
  - **In-shop** — client comes to the studio, picks a date/time against real calendar availability.
  - **Mobile / house-call** — artist travels to the client's location, with location capture, travel radius/fee logic, and date-specific availability windows.
- Pay a **deposit** at booking time to secure the slot.
- Sign a **digital consent/waiver form** before the session (required in most jurisdictions for tattoo work).
- Manage bookings, reschedules, and communication with the artist from a client dashboard.

On the artist/admin side, TatMe replaces the "20 emails back and forth" and DM-based scheduling that most solo artists and small studios still run on, with a single system for calendar, deposits, intake forms, and client history.

---

## 2. Why This Needs to Be Different (Market Findings)

Research into the current tattoo booking/e-commerce landscape (2026) surfaced two failure modes TatMe is explicitly built to avoid:

1. **Pretty sites, no real booking.** Most tattoo studio websites are portfolio-first with a "DM us" or contact-form-only path to booking. Visually strong, functionally a dead end — every unanswered DM is a lost client.
2. **Generic scheduling tools bolted onto a tattoo business.** Tools like Calendly or Vagaro handle *time slots* but not the things unique to tattooing: deposits tied to cancellation policy, consent/waiver forms, reference-image intake, per-artist multi-stage pipelines (consult → deposit → session → touch-up), and travel/guest-spot availability.

Patterns worth stealing, confirmed across multiple tattoo-specific platforms:

- **Deposit terms live inside the booking flow, not a follow-up message.** Amount, deadline, and cancellation/no-show policy shown and accepted at the point of booking — this is the single biggest lever against no-shows.
- **Hybrid consult model.** Offer a short virtual consult before the real session so clients aren't blocked by "next available slot is 3 weeks out." Filters out non-serious inquiries before they eat calendar time.
- **Location-aware, date-specific availability.** For travel/guest spots and house-calls, artists open a booking window scoped to a specific date range and address rather than their default calendar — this is the direct model for TatMe's "come to your place" flow.
- **Structured intake forms**, not free-text DMs: style, placement, size, reference images, budget range, collected once, attached to the booking.
- **Flash/design browsing tied directly to booking** — a client sees a design and can request that exact piece against the artist's calendar in one flow, instead of screenshotting it and DMing separately.
- **Client history as a light CRM** — repeat clients, healed photos, placement notes, preferred style — so returning clients get faster, better service.

TatMe's differentiation, stated plainly: **it's the only kind of site that treats "browse the art" and "book the session" as one continuous flow**, with the shop-vs-house-call decision, deposit, and waiver all handled before the client ever needs to send a message.

---

## 3. Core User Flows

### Client
1. Land on gallery → filter by style/size/placement → open a design or artist profile.
2. Start booking → choose **In-Shop** or **We Come to You**.
   - In-Shop: pick studio location (if multi-location) → date/time against calendar.
   - House-Call: enter address → system checks it's within the artist's travel radius for that date → pick from date-specific availability windows.
3. Fill intake form (style, placement, size, references, notes).
4. Pay deposit (Stripe) → see policy terms (amount, refund/reschedule rules) before confirming.
5. Sign digital consent/waiver.
6. Get confirmation + reminders (email/SMS) → manage/reschedule from client dashboard.

### Artist / Admin
1. Set availability: recurring shop hours + one-off travel/house-call windows tied to a date range and coverage area.
2. Review incoming bookings/consults → approve, request more info, or decline.
3. Manage flash/gallery inventory (upload, price, mark sold/available).
4. View client history, past sessions, notes, healed photos.
5. Track deposits, payouts, and revenue.
6. Manage waivers/consent records (legal record-keeping).

---

## 4. Proposed Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | Server Components for gallery/SEO-heavy pages, Server Actions for booking mutations, streaming for fast perceived load on image-heavy pages |
| Language | **TypeScript** | Type safety across booking/payment logic where correctness matters |
| Styling | **Tailwind CSS** | Fast iteration, easy to enforce a consistent dark/edgy or clean/fine-art visual identity depending on brand direction |
| Database | **PostgreSQL** | Relational integrity for bookings, availability windows, payments |
| ORM | **Prisma** | Type-safe queries, migrations |
| Auth | **Auth.js (NextAuth) or Clerk** | Client + artist/admin roles, session-protected routes |
| Payments | **Stripe** | Deposit collection, refund/cancellation logic, payout tracking |
| Media | **Cloud image storage (e.g. Cloudflare Images / S3 + CDN)** | Gallery and reference-image uploads need fast, optimized delivery |
| Notifications | **Email (Resend/Postmark) + SMS (Twilio)** | Booking confirmations, reminders, waiver requests |
| Maps/Location | **Mapbox or Google Maps API** | House-call radius validation, address capture |
| Hosting | **Vercel** (app) + managed Postgres (Neon/Supabase/RDS) | Matches Next.js deployment model |

This is a starting recommendation, not a locked decision — flag before implementation if you want a different stack (e.g. Supabase for auth+db+storage combined).




---




## 5. Domain Model (High-Level)

Core entities the database schema will be built around:

- **User** — base account (client or artist/admin role)
- **ArtistProfile** — bio, specialties, styles, rating, shop location(s)
- **Design** — gallery piece / flash: image(s), style tags, size, price, status (available/booked/sold), linked artist
- **Location** — studio address(es); or a travel-window record with address + radius + date range for house-calls
- **Availability** — recurring shop hours + one-off date-specific windows (shop or travel)
- **Booking** — client, artist, design (optional), type (in-shop/house-call), datetime, location/address, status (pending/confirmed/completed/cancelled)
- **IntakeForm** — style, placement, size, references, notes, linked to a booking
- **Deposit/Payment** — amount, status, Stripe reference, refund/cancellation terms snapshot
- **Waiver** — signed consent record, timestamp, linked to booking (legal record)
- **Review** — post-session client feedback, linked to artist and booking

Full schema with fields, relations, and constraints will live in `DATABASE.md`.




---





## 6. Project Structure (Planned)

```
tatme/
├── README.md                 ← you are here
├── ARCHITECTURE.md           ← system design, folder conventions, server/client boundaries
├── DATABASE.md                ← full Prisma schema + ERD
├── API.md                     ← route handlers / server actions contract
├── DEPLOYMENT.md              ← environment setup, hosting, CI/CD
├── app/
│   ├── (marketing)/            ← gallery, artist profiles, public pages
│   ├── (booking)/               ← booking flow (shop / house-call), intake, payment, waiver
│   ├── (client-dashboard)/       ← client bookings, reschedule, history
│   ├── (admin)/                  ← artist/admin: calendar, flash management, clients, payouts
│   └── api/                       ← route handlers (webhooks: Stripe, SMS/email)
├── components/
├── lib/                           ← db client, auth, payments, validation schemas
├── prisma/
│   └── schema.prisma
└── public/
```


---




## 7. Build Phases

1. **Foundation** — Next.js scaffold, DB schema, auth, base layout/design system.
2. **Gallery & Artist Profiles** — public browsing experience, image pipeline.
3. **Booking Engine** — availability logic (shop + house-call), intake form, calendar.
4. **Payments & Waivers** — Stripe deposits, cancellation policy enforcement, digital consent.
5. **Dashboards** — client dashboard, artist/admin dashboard (calendar, flash inventory, client CRM).
6. **Notifications** — email/SMS confirmations and reminders.
7. **Polish & Launch** — performance (Core Web Vitals, image optimization), SEO, mobile QA, deployment.



---




## 8. Open Questions (Answer Before Scaffolding Begins)

- Single artist or multi-artist studio? (Affects auth roles, calendar complexity, payout splitting.)
- One shop location, or multiple?
- What's the actual deposit/cancellation policy (amount, refund window)? This needs to be defined before the booking flow is built, not after.
- Brand direction: dark/edgy aesthetic vs. clean fine-art/spa aesthetic — this drives the whole design system (see market research above; both are proven to convert, but they target different clients).
- Jurisdiction for waiver/consent form legal requirements (varies by country/state).




---




## 9. Getting Started (once scaffolding begins)

```bash
npx create-next-app@latest tatme --typescript --tailwind --app
cd tatme
npm install prisma @prisma/client
npx prisma init
```
