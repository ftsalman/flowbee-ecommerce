export const allProducts = [
  {
    id: 1,
    label: "Apple iPhone 14 Pro Max",
    brand: "Apple",
    price: 299.99,
    category: "mobile-phones",
    images: [
      "/images/products/img6.png",
      "https://i.pinimg.com/736x/93/08/9f/93089f446b578c1bef52269e154947c0.jpg",
      "https://i.pinimg.com/736x/82/c7/22/82c722a5a7485af85df82074dce9c895.jpg",
      "/images/products/img12.png",
    ],
    rating: 4,
    specs: {
      displaySize: "6.7 in OLED, 120 Hz",
      storage: "256 GB",
      cpuCores: 6,
      mainCamera: "48 MP f/1.8 (wide) + 12 MP (ultra‑wide) + 12 MP (tele)",
      frontCamera: "12 MP f/1.9",
      batteryCapacity: "4323 mAh",
    },
  },
  {
    id: 2,
    label: "Skullcandy - Crusher ANC 2 Wireless Headphone - Red",
    brand: "Skullcandy",
    price: 289.99,
    category: "headset",
    images: ["/images/products/img2.png", "/images/products/img3.png"],
    rating: 5,
  },
  {
    id: 3,
    label: "Skullcandy - Crusher ANC 2 Wireless Headphone - White",
    brand: "Skullcandy",
    price: 279.99,
    category: "headset",
    images: ["/images/products/img3.png", "/images/products/img1.png"],
    rating: 3,
  },
  // ...more
];














// utility – converts "Skullcandy - Crusher anc 2 wireless headphone"
// // to "skullcandy-crusher-anc-2-wireless-headphone"
// export const slugify = (text) =>
//   text
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/(^-|-$)+/g, "");

// export const arrivals_data = [
//   {
//     id: 1,
//     label: "iPhone 15 Pro",
//     price: 1299,
//     image: "/images/products/img1.png",
//     rating: 5,
//   },
//   {
//     id: 2,
//     label: "Skullcandy – Crusher ANC 2 Wireless Headphone",
//     price: 299.99,
//     image: "/images/products/img4.png",
//     rating: 4,
//   },
//   {
//     id: 3,
//     label: "Logitech MX Master 3S Mouse",
//     price: 99.99,
//     image: "/images/products/img3.png",
//     rating: 5,
//   },
//   {
//     id: 4,
//     label: "Sony WH‑1000XM5 Noise‑Cancelling Headphone",
//     price: 399.99,
//     image: "/images/products/img2.png",
//     rating: 5,
//   },
// ]  // 👈 no slug yet
//   .map((p) => ({ ...p, slug: slugify(p.label) })); // adds slug automatically
