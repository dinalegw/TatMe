import Image from "next/image";
import {
  CalendarDays,
  Check,
  ChevronRight,
  Filter,
  MapPin,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { bookingSteps, designs } from "@/lib/gallery";

const filters = ["Fine line", "Blackwork", "Minimal", "Sleeve", "Flash"];
const modes = ["In-shop", "We come to you"];
const studioFeatures = [
  {
    title: "Availability",
    Icon: CalendarDays,
    copy: "Recurring shop hours plus one-off travel windows."
  },
  {
    title: "Deposits",
    Icon: ReceiptText,
    copy: "Stripe references and policy snapshots per booking."
  },
  {
    title: "Consent",
    Icon: ShieldCheck,
    copy: "Signed waiver records tied to the client session."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/92 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="font-display text-2xl font-semibold" href="#">
            TatMe
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 md:flex">
            <a href="#gallery">Gallery</a>
            <a href="#booking">Booking</a>
            <a href="#admin">Studio</a>
          </nav>
          <a
            className="inline-flex h-10 items-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-paper transition hover:bg-ember"
            href="#booking"
          >
            <CalendarDays size={17} />
            Book
          </a>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590246814883-57c5110ba2c5?auto=format&fit=crop&w=1800&q=80"
          alt="Tattoo artist preparing a client's arm in a studio"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,21,21,.88),rgba(21,21,21,.48),rgba(21,21,21,.08))]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-paper">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-paper/12 px-3 py-1 text-sm font-semibold ring-1 ring-paper/22">
              <Sparkles size={16} />
              Portfolio, booking, deposits, and waivers
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              TatMe
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-paper/86">
              Browse real tattoo work, reserve the exact piece or custom idea,
              and choose a studio session or house-call without moving the
              conversation into DMs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ember px-5 text-sm font-bold text-white shadow-soft transition hover:bg-[#a93d2a]"
                href="#gallery"
              >
                Browse designs
                <ChevronRight size={18} />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-paper px-5 text-sm font-bold text-ink transition hover:bg-bone"
                href="#booking"
              >
                <MapPin size={18} />
                Start booking
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">
              Browse the art
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold">
              Pick a design, then book it.
            </h2>
          </div>
          <div className="flex min-h-12 flex-wrap items-center gap-2">
            <button className="inline-flex h-10 items-center gap-2 rounded-md border border-ink/15 bg-white px-3 text-sm font-semibold">
              <Filter size={16} />
              Filters
            </button>
            {filters.map((filter) => (
              <button
                className="h-10 rounded-md border border-ink/10 bg-white px-3 text-sm font-medium text-ink/72 hover:border-ember hover:text-ember"
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {designs.map((design) => (
            <article
              className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft"
              key={design.id}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={design.image}
                  alt={`${design.title} tattoo design`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-paper px-3 py-1 text-xs font-bold text-ink">
                  {design.status}
                </span>
              </div>
              <div className="space-y-4 p-5">
                <div>
                  <h3 className="text-xl font-bold">{design.title}</h3>
                  <p className="mt-1 text-sm text-ink/64">
                    {design.artist} · {design.style}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <span className="rounded-md bg-bone px-2 py-2">{design.placement}</span>
                  <span className="rounded-md bg-bone px-2 py-2">{design.size}</span>
                  <span className="rounded-md bg-bone px-2 py-2">{design.price}</span>
                </div>
                <a
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-ink text-sm font-bold text-paper transition hover:bg-ember"
                  href="#booking"
                >
                  Request this piece
                  <ChevronRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" className="bg-ink py-14 text-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">
              Booking flow
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold">
              Studio chair or doorstep session.
            </h2>
            <p className="mt-4 leading-7 text-paper/72">
              TatMe keeps the client moving from design selection to intake,
              calendar, deposit, and consent with the policy visible before they
              confirm.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {modes.map((mode) => (
              <div className="rounded-lg border border-paper/12 bg-paper/8 p-5" key={mode}>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-paper text-ink">
                  {mode === "In-shop" ? <CalendarDays size={21} /> : <MapPin size={21} />}
                </div>
                <h3 className="mt-4 text-xl font-bold">{mode}</h3>
                <p className="mt-2 text-sm leading-6 text-paper/70">
                  {mode === "In-shop"
                    ? "Match the artist's studio availability and reserve a chair with a deposit."
                    : "Validate travel radius, apply date-specific windows, and collect the client address."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {bookingSteps.map((step, index) => (
            <div className="rounded-lg border border-paper/12 bg-paper/8 p-4" key={step}>
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-ember text-sm font-bold">
                {index + 1}
              </div>
              <p className="text-sm font-semibold leading-6">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="admin" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {studioFeatures.map(({ title, Icon, copy }) => (
            <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft" key={title}>
              <Icon className="text-fern" size={25} />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/64">{copy}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-fern">
                <Check size={16} />
                Admin ready
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink/10 px-4 py-8 text-center text-sm text-ink/60">
        TatMe foundation scaffold
      </footer>
    </main>
  );
}
