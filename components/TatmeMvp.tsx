"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  availableSlots,
  BookingMode,
  BookingRequest,
  bookingSteps,
  Design,
  designs,
  seedRequests
} from "@/lib/gallery";

type BookingFormState = {
  clientName: string;
  email: string;
  phone: string;
  mode: BookingMode;
  date: string;
  time: string;
  placement: string;
  size: string;
  budget: string;
  address: string;
  notes: string;
  consentAccepted: boolean;
  depositAccepted: boolean;
};

const filters = ["All", "Fine line", "Blackwork", "Minimal", "Script"];

const initialForm: BookingFormState = {
  clientName: "",
  email: "",
  phone: "",
  mode: "In-shop",
  date: "2026-08-08",
  time: availableSlots[0],
  placement: "",
  size: "",
  budget: "",
  address: "",
  notes: "",
  consentAccepted: false,
  depositAccepted: false
};

function makeRequestId() {
  return `tatme-${Date.now().toString(36)}`;
}

function requestIsValid(form: BookingFormState) {
  const hasAddress = form.mode === "In-shop" || form.address.trim().length > 4;

  return (
    form.clientName.trim().length > 1 &&
    form.email.includes("@") &&
    form.phone.trim().length > 5 &&
    form.date.length > 0 &&
    form.time.length > 0 &&
    form.placement.trim().length > 1 &&
    form.size.trim().length > 1 &&
    form.budget.trim().length > 1 &&
    hasAddress &&
    form.consentAccepted &&
    form.depositAccepted
  );
}

export default function TatmeMvp() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState<Design>(designs[0]);
  const [form, setForm] = useState<BookingFormState>({
    ...initialForm,
    placement: designs[0].placement,
    size: designs[0].size,
    budget: designs[0].price.replace("from ", "")
  });
  const [requests, setRequests] = useState<BookingRequest[]>(seedRequests);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("tatme-bookings");

    if (stored) {
      setRequests(JSON.parse(stored) as BookingRequest[]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tatme-bookings", JSON.stringify(requests));
  }, [requests]);

  const filteredDesigns = useMemo(() => {
    if (activeFilter === "All") {
      return designs;
    }

    return designs.filter((design) => design.style === activeFilter);
  }, [activeFilter]);

  const selectedRequests = requests.filter(
    (request) => request.designId === selectedDesign.id
  );
  const confirmedCount = requests.filter(
    (request) => request.status === "Confirmed"
  ).length;
  const pendingCount = requests.length - confirmedCount;

  function selectDesign(design: Design) {
    setSelectedDesign(design);
    setForm((current) => ({
      ...current,
      placement: design.placement,
      size: design.size,
      budget: design.price.replace("from ", "")
    }));
    setNotice(`${design.title} selected for booking.`);
  }

  function updateField<Key extends keyof BookingFormState>(
    key: Key,
    value: BookingFormState[Key]
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!requestIsValid(form)) {
      setNotice("Complete the required booking, consent, and deposit fields.");
      return;
    }

    const nextRequest: BookingRequest = {
      id: makeRequestId(),
      designId: selectedDesign.id,
      designTitle: selectedDesign.title,
      clientName: form.clientName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      mode: form.mode,
      date: form.date,
      time: form.time,
      placement: form.placement.trim(),
      size: form.size.trim(),
      budget: form.budget.trim(),
      address: form.address.trim(),
      notes: form.notes.trim(),
      consentAccepted: form.consentAccepted,
      depositAccepted: form.depositAccepted,
      status: "Pending review",
      createdAt: new Date().toISOString()
    };

    setRequests((current) => [nextRequest, ...current]);
    setNotice(`Booking request received for ${selectedDesign.title}.`);
    setForm({
      ...initialForm,
      placement: selectedDesign.placement,
      size: selectedDesign.size,
      budget: selectedDesign.price.replace("from ", "")
    });
  }

  function confirmRequest(id: string) {
    setRequests((current) =>
      current.map((request) =>
        request.id === id ? { ...request, status: "Confirmed" } : request
      )
    );
  }

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
            <a href="#dashboard">Studio</a>
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
          <p className="eyebrow">MVP: gallery, booking, consent, deposit, studio queue</p>
          <h1>TatMe</h1>
          <p className="heroCopy">
            A tattoo booking MVP where clients choose a design, submit intake,
            accept consent and deposit terms, then land directly in the studio
            review queue.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="#gallery">
              Browse designs
            </a>
            <a className="secondaryAction" href="#booking">
              Start booking
            </a>
          </div>
          <div className="mvpStats" aria-label="MVP status">
            <span>{designs.length} designs</span>
            <span>{requests.length} requests</span>
            <span>{confirmedCount} confirmed</span>
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
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "activeFilter" : ""}
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="designGrid">
          {filteredDesigns.map((design) => (
            <article
              className={`designCard ${
                selectedDesign.id === design.id ? "selectedCard" : ""
              }`}
              key={design.id}
            >
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
                <p>{design.description}</p>
                <div className="designMeta">
                  <span>{design.placement}</span>
                  <span>{design.size}</span>
                  <span>{design.price}</span>
                </div>
                <button
                  className="cardAction"
                  type="button"
                  onClick={() => selectDesign(design)}
                >
                  Select for booking
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" className="bookingSection">
        <div className="bookingIntro mvpBookingIntro">
          <div>
            <p className="sectionKicker">Booking flow</p>
            <h2>{selectedDesign.title}</h2>
            <p>
              {selectedDesign.price} · deposit {selectedDesign.deposit}. The
              MVP captures the essentials a studio needs before approval.
            </p>
            {notice ? <p className="notice">{notice}</p> : null}
            <div className="stepGrid compactSteps">
              {bookingSteps.map((step, index) => (
                <article className="stepCard" key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>

          <form className="bookingForm" onSubmit={submitBooking}>
            <div className="formSplit">
              <label>
                Name
                <input
                  value={form.clientName}
                  onChange={(event) => updateField("clientName", event.target.value)}
                  placeholder="Client name"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="client@email.com"
                />
              </label>
            </div>
            <div className="formSplit">
              <label>
                Phone
                <input
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="+44..."
                />
              </label>
              <label>
                Session type
                <select
                  value={form.mode}
                  onChange={(event) =>
                    updateField("mode", event.target.value as BookingMode)
                  }
                >
                  <option>In-shop</option>
                  <option>House-call</option>
                </select>
              </label>
            </div>
            <div className="formSplit">
              <label>
                Date
                <input
                  type="date"
                  value={form.date}
                  onChange={(event) => updateField("date", event.target.value)}
                />
              </label>
              <label>
                Time
                <select
                  value={form.time}
                  onChange={(event) => updateField("time", event.target.value)}
                >
                  {availableSlots.map((slot) => (
                    <option key={slot}>{slot}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="formSplit">
              <label>
                Placement
                <input
                  value={form.placement}
                  onChange={(event) => updateField("placement", event.target.value)}
                />
              </label>
              <label>
                Size
                <input
                  value={form.size}
                  onChange={(event) => updateField("size", event.target.value)}
                />
              </label>
            </div>
            <label>
              Budget
              <input
                value={form.budget}
                onChange={(event) => updateField("budget", event.target.value)}
              />
            </label>
            {form.mode === "House-call" ? (
              <label>
                House-call address
                <input
                  value={form.address}
                  onChange={(event) => updateField("address", event.target.value)}
                  placeholder="Area, postcode, or full address"
                />
              </label>
            ) : null}
            <label>
              Notes and references
              <textarea
                value={form.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                placeholder="Style tweaks, reference links, health/accessibility notes"
              />
            </label>
            <label className="checkRow">
              <input
                type="checkbox"
                checked={form.depositAccepted}
                onChange={(event) =>
                  updateField("depositAccepted", event.target.checked)
                }
              />
              I accept the {selectedDesign.deposit} deposit policy.
            </label>
            <label className="checkRow">
              <input
                type="checkbox"
                checked={form.consentAccepted}
                onChange={(event) =>
                  updateField("consentAccepted", event.target.checked)
                }
              />
              I confirm I can sign the digital tattoo consent form before the
              session.
            </label>
            <button className="submitButton" type="submit">
              Submit booking request
            </button>
          </form>
        </div>
      </section>

      <section id="dashboard" className="section dashboardSection">
        <div className="sectionHeader">
          <div>
            <p className="sectionKicker">Studio dashboard</p>
            <h2>Booking queue and client context.</h2>
          </div>
          <div className="dashboardStats">
            <span>{pendingCount} pending</span>
            <span>{confirmedCount} confirmed</span>
          </div>
        </div>

        <div className="dashboardGrid">
          <article className="selectedPanel">
            <h3>Selected design</h3>
            <p>{selectedDesign.title}</p>
            <strong>{selectedDesign.artist}</strong>
            <span>{selectedRequests.length} request(s) for this design</span>
          </article>

          <div className="requestList">
            {requests.map((request) => (
              <article className="requestCard" key={request.id}>
                <div>
                  <p className="requestMeta">
                    {request.date} · {request.time} · {request.mode}
                  </p>
                  <h3>{request.clientName}</h3>
                  <p>
                    {request.designTitle} for {request.placement}, {request.size}
                  </p>
                  <p>{request.notes || "No extra notes yet."}</p>
                </div>
                <div className="requestActions">
                  <span className={request.status === "Confirmed" ? "confirmed" : ""}>
                    {request.status}
                  </span>
                  <a href={`mailto:${request.email}`}>{request.email}</a>
                  {request.status !== "Confirmed" ? (
                    <button type="button" onClick={() => confirmRequest(request.id)}>
                      Confirm
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">TatMe MVP · Next.js + npm</footer>
    </main>
  );
}
