type Product = {
  id: number;
  title: string;
  category: string;
  price: string;
  discountedPrice: string;
  avatar: string; // URL de l'image ou chemin du fichier
};

export const bestSellers: Product[] = [
  {
    id: 1,
    title: "Baby Fabric Shoes",
    category: "baby fabric shoes",
    price: "$5.00",
    discountedPrice: "$4.00",
    avatar: "../../../src/assets/images/products/1.jpg", // Remplacez par le chemin réel de l'image
  },
  {
    id: 2,
    title: "Men's Hoodies T-Shirt",
    category: "men's hoodies t-shirt",
    price: "$17.00",
    discountedPrice: "$7.00",
    avatar: "../../../src/assets/images/products/2.jpg", // Remplacez par le chemin réel de l'image
  },
  {
    id: 3,
    title: "Girls T-Shirt",
    category: "girls t-shirt",
    price: "$5.00",
    discountedPrice: "$3.00",
    avatar: "../../../src/assets/images/products/3.jpg", // Remplacez par le chemin réel de l'image
  },
  {
    id: 4,
    title: "Woolen Hat For Men",
    category: "woolen hat for men",
    price: "$15.00",
    discountedPrice: "$12.00",
    avatar: "../../../src/assets/images/products/4.jpg", // Remplacez par le chemin réel de l'image
  },
];

