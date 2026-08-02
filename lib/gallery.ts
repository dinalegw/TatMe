export type Design = {
  id: string;
  title: string;
  artist: string;
  style: string;
  placement: string;
  size: string;
  price: string;
  deposit: string;
  status: "Available" | "Booked" | "Custom";
  image: string;
  description: string;
};

export const designs: Design[] = [
  {
    id: "fern-serpent",
    title: "Fern Serpent",
    artist: "Mara Vale",
    style: "Fine line",
    placement: "Forearm",
    size: "Medium",
    price: "from GBP 180",
    deposit: "GBP 45",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=900&q=80",
    description:
      "Fine-line botanical serpent with soft movement and room for placement-specific adjustments."
  },
  {
    id: "blackwork-rose",
    title: "Blackwork Rose",
    artist: "Noah Ink",
    style: "Blackwork",
    placement: "Shoulder",
    size: "Large",
    price: "from GBP 320",
    deposit: "GBP 80",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80",
    description:
      "Bold blackwork rose designed for shoulder, upper arm, or upper back placement."
  },
  {
    id: "minimal-moon",
    title: "Minimal Moon",
    artist: "Iris Chen",
    style: "Minimal",
    placement: "Ankle",
    size: "Small",
    price: "from GBP 95",
    deposit: "GBP 25",
    status: "Custom",
    image:
      "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=900&q=80",
    description:
      "Minimal lunar mark that can be adapted for ankle, wrist, rib, or behind-ear placement."
  },
  {
    id: "script-memory",
    title: "Script Memory",
    artist: "Mara Vale",
    style: "Script",
    placement: "Rib",
    size: "Small",
    price: "from GBP 120",
    deposit: "GBP 30",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80",
    description:
      "Custom script piece for short names, dates, or personal phrases with stencil preview."
  }
];

export const bookingSteps = [
  "Choose shop or house-call",
  "Share placement, size, references, and budget",
  "Pay deposit and accept cancellation terms",
  "Sign consent before the session"
];

export type BookingMode = "In-shop" | "House-call";

export type BookingRequest = {
  id: string;
  designId: string;
  designTitle: string;
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
  status: "Pending review" | "Confirmed";
  createdAt: string;
};

export const availableSlots = [
  "10:00",
  "12:30",
  "15:00",
  "17:30"
];

export const seedRequests: BookingRequest[] = [
  {
    id: "seed-1001",
    designId: "blackwork-rose",
    designTitle: "Blackwork Rose",
    clientName: "Amara King",
    email: "amara@example.com",
    phone: "+44 7000 000001",
    mode: "In-shop",
    date: "2026-08-08",
    time: "12:30",
    placement: "Shoulder",
    size: "Large",
    budget: "GBP 350",
    address: "",
    notes: "Wants a darker rose with a little extra leaf work.",
    consentAccepted: true,
    depositAccepted: true,
    status: "Confirmed",
    createdAt: "2026-08-01T18:20:00.000Z"
  },
  {
    id: "seed-1002",
    designId: "minimal-moon",
    designTitle: "Minimal Moon",
    clientName: "Jules Carter",
    email: "jules@example.com",
    phone: "+44 7000 000002",
    mode: "House-call",
    date: "2026-08-10",
    time: "15:00",
    placement: "Ankle",
    size: "Small",
    budget: "GBP 120",
    address: "Hackney, London",
    notes: "Needs a quiet setup and aftercare instructions.",
    consentAccepted: true,
    depositAccepted: false,
    status: "Pending review",
    createdAt: "2026-08-02T08:10:00.000Z"
  }
];
