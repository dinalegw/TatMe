import Image from "next/image";
import { bookingSteps, designs } from "@/lib/gallery";

const filters = ["Fine line", "Blackwork", "Minimal", "Sleeve", "Flash"];
const modes = [
  {
    title: "In-shop",
    copy: "Match the artist's studio availability and reserve a chair with a deposit.",
    icon: "C"
  },
  {
    title: "We come to you",
    copy: "Validate travel radius, apply date-specific windows, and collect the client address.",
    icon: "M"
  }
];
const studioFeatures = [
  {
    title: "Availability",
    icon: "A",
    copy: "Recurring shop hours plus one-off travel windows."
  },
  {
    title: "Deposits",
    icon: "D",
    copy: "Payment references and policy snapshots per booking."
  },
  {
    title: "Consent",
    icon: "W",
    copy: "Signed waiver records tied to the client session."
  }
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="headerInner">
          <a className="brand" href="#">
            TatMe
          </a>
          <nav className="mainNav" aria-label="Primary navigation">
            <a href="#gallery">Gallery</a>
            <a href="#booking">Booking</a>
            <a href="#admin">Studio</a>
          </nav>
          <a className="headerButton" href="#booking">
            Book
          </a>
        </div>
      </header>

      <section className="hero">
        <Image
          src="https://images.unsplash.com/photo-1590246814883-57c5110ba2c5?auto=format&fit=crop&w=1800&q=80"
          alt="Tattoo artist preparing a client's arm in a studio"
          fill
          priority
          className="heroImage"
          sizes="100vw"
        />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">Portfolio, booking, deposits, and waivers</p>
          <h1>TatMe</h1>
          <p className="heroCopy">
            Browse real tattoo work, reserve the exact piece or custom idea,
            and choose a studio session or house-call without moving the
            conversation into DMs.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="#gallery">
              Browse designs
            </a>
            <a className="secondaryAction" href="#booking">
              Start booking
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="sectionHeader">
          <div>
            <p className="sectionKicker">Browse the art</p>
            <h2>Pick a design, then book it.</h2>
          </div>
          <div className="filterBar" aria-label="Design filters">
            <button type="button">Filters</button>
            {filters.map((filter) => (
              <button type="button" key={filter}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="designGrid">
          {designs.map((design) => (
            <article className="designCard" key={design.id}>
              <div className="designImageWrap">
                <Image
                  src={design.image}
                  alt={`${design.title} tattoo design`}
                  fill
                  className="designImage"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <span>{design.status}</span>
              </div>
              <div className="designBody">
                <div>
                  <h3>{design.title}</h3>
                  <p>
                    {design.artist} · {design.style}
                  </p>
                </div>
                <div className="designMeta">
                  <span>{design.placement}</span>
                  <span>{design.size}</span>
                  <span>{design.price}</span>
                </div>
                <a className="cardAction" href="#booking">
                  Request this piece
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" className="bookingSection">
        <div className="bookingIntro">
          <div>
            <p className="sectionKicker">Booking flow</p>
            <h2>Studio chair or doorstep session.</h2>
            <p>
              TatMe keeps the client moving from design selection to intake,
              calendar, deposit, and consent with the policy visible before they
              confirm.
            </p>
          </div>
          <div className="modeGrid">
            {modes.map((mode) => (
              <article className="modeCard" key={mode.title}>
                <span className="iconMark">{mode.icon}</span>
                <h3>{mode.title}</h3>
                <p>{mode.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="stepGrid">
          {bookingSteps.map((step, index) => (
            <article className="stepCard" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="admin" className="section">
        <div className="featureGrid">
          {studioFeatures.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <span className="featureIcon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
              <strong>Admin ready</strong>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">TatMe foundation scaffold</footer>
    </main>
  );
}
