export const MenuCategory = [
  {
    categoryName: "HOME",
    path: "/",
  },
  {
    categoryName: "CATEGORIES",
    path: "/",
    children: [
      {
        name: "Electronics",
        avatar: "../../src/assets/images/electronics-banner-1.jpg",
        options: [
          { type: "Desktop" },
          { type: "Laptop" },
          { type: "Camera" },
          { type: "Tablet" },
          { type: "Headphone" },
        ],
      },
      {
        name: "Men's",
        avatar: "../../src/assets/images/mens-banner.jpg",
        options: [
          { type: "Formal" },
          { type: "Casual" },
          { type: "Sports" },
          { type: "Jacket" },
          { type: "Sunglasses" },
        ],
      },
      {
        name: "Women's",
        avatar: "../../src/assets/images/womens-banner.jpg",
        options: [
          { type: "Formal" },
          { type: "Casual" },
          { type: "Perfume" },
          { type: "Cosmetics" },
          { type: "Bags" },
        ],
      },
      {
        name: "Electronics",
        avatar: "../../src/assets/images/electronics-banner-2.jpg",
        options: [
          { type: "Smart TV" },
          { type: "Keyboard" },
          { type: "Mouse" },
          { type: "Tablet" },
          { type: "Microphone" },
        ],
      },
    ],
  },
  {
    categoryName: "WOMEN'S",
    path: "/",
    children: [
      {
        name: "",
        avatar: undefined,
        options: [
          { type: "Dress & Frock" },
          { type: "Earrings" },
          { type: "Necklace" },
          { type: "Makeup Kit" },
        ],
      },
    ],
  },
  {
    categoryName: "MEN'S",
    path: "/",
    children: [
      {
        name: "",
        avatar: undefined,
        options: [
          { type: "Shirt" },
          { type: "Shorts & Jeans" },
          { type: "Safety Shoes" },
          { type: "Wallet" },
        ],
      },
    ],
  },
  {
    categoryName: "JEWELRY'S",
    path: "/",
    children: [
      {
        name: "",
        avatar: undefined,
        options: [
          { type: "Earrings" },
          { type: "Couple Rings" },
          { type: "Necklace" },
          { type: "Bracelets" },
        ],
      },
    ],
  },
  {
    categoryName: "PERFUMES",
    path: "/",
    children: [
      {
        name: "",
        avatar: undefined,
        options: [
          { type: "Clothes Perfume" },
          { type: "Deodorant" },
          { type: "Flower Fragrance" },
          { type: "Air Freshener" },
        ],
      },
    ],
  },
  {
    categoryName: "BLOGS",
    path: "/",
  },
  {
    categoryName: "HOT OFFERS",
    path: "/",
  },
];
