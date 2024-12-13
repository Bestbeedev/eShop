export const MenuCategory = [
  {
    categoryName: "Home",
    path: "/",
  },
  {
    categoryName: "Categories",
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
    categoryName: "Women's",
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
    categoryName: "Men's",
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
    categoryName: "Jewelry's",
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
    categoryName: "Perfumes",
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
    categoryName: "Blogs",
    path: "/",
  },
  {
    categoryName: "Hot Offers",
    path: "/",
  },
];
