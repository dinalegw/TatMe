export type Design = {
  id: string;
  title: string;
  artist: string;
  style: string;
  placement: string;
  size: string;
  price: string;
  status: "Available" | "Booked" | "Custom";
  image: string;
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
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "blackwork-rose",
    title: "Blackwork Rose",
    artist: "Noah Ink",
    style: "Blackwork",
    placement: "Shoulder",
    size: "Large",
    price: "from GBP 320",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "minimal-moon",
    title: "Minimal Moon",
    artist: "Iris Chen",
    style: "Minimal",
    placement: "Ankle",
    size: "Small",
    price: "from GBP 95",
    status: "Custom",
    image:
      "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=900&q=80"
  }
];

export const bookingSteps = [
  "Choose shop or house-call",
  "Share placement, size, references, and budget",
  "Pay deposit and accept cancellation terms",
  "Sign consent before the session"
];
