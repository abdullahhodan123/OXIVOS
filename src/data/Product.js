import boysShoes1 from "../assets/images/boys_shoes1.jpg";
import ladisShoes1 from "../assets/images/ladis_shoes1.jpg";
import ladisShoes2 from "../assets/images/ladis_shoes_2.jpg";
import ladisShoes3 from "../assets/images/ladis_shoes3.jpg";
import headphone from "../assets/images/headphone.jpg";
import headphone2 from "../assets/images/headphn2.jpg";
import watch2 from "../assets/images/watch2.jpg";
import watch3 from "../assets/images/watch3.jpg";
import waterBottle from "../assets/images/water_bottle.jpg";
import perfume from "../assets/images/perfum.avif";
import lipstick from "../assets/images/lipstick.jpg";
import toy1 from "../assets/images/toy1.jpg";
import toy2 from "../assets/images/toy2.jpg";
import toy3 from "../assets/images/toy3.jpg";

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    category: "Shoes",
    price: 2490,
    image: boysShoes1,
    rating: 4.5,
    colors: ["White", "Black"],
    sizes: ["8", "9", "10", "11"],
    inStock: true,
    quantity: 10,
    description:
      "Premium quality sneakers with comfortable cushioning and durable sole. Perfect for everyday wear and casual outings.",
  },
  {
    id: 2,
    name: "Elegant Heels",
    category: "Shoes",
    price: 3200,
    image: ladisShoes1,
    rating: 4.7,
    colors: ["Black", "Red"],
    sizes: ["5", "6", "7", "8"],
    inStock: true,
    quantity: 8,
    description:
      "Stylish and comfortable heels designed for special occasions. Features a padded insole for all-day comfort.",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Shoes",
    price: 2890,
    image: ladisShoes2,
    rating: 4.3,
    colors: ["Pink", "White", "Gray"],
    sizes: ["5", "6", "7", "8", "9"],
    inStock: true,
    quantity: 15,
    description:
      "Lightweight running shoes with breathable mesh upper and responsive cushioning for maximum performance.",
  },
  {
    id: 4,
    name: "Casual Flats",
    category: "Shoes",
    price: 1890,
    image: ladisShoes3,
    rating: 4.6,
    colors: ["Beige", "Black"],
    sizes: ["5", "6", "7", "8"],
    inStock: false,
    quantity: 0,
    description:
      "Versatile casual flats that pair with any outfit. Made with soft leather and flexible sole for comfortable walking.",
  },
  {
    id: 5,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 4500,
    image: headphone,
    rating: 4.8,
    colors: ["Black", "White", "Blue"],
    sizes: [],
    inStock: true,
    quantity: 20,
    description:
      "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality.",
  },
  {
    id: 6,
    name: "Studio Headphones",
    category: "Electronics",
    price: 6200,
    image: headphone2,
    rating: 4.9,
    colors: ["Black", "Silver"],
    sizes: [],
    inStock: true,
    quantity: 5,
    description:
      "Professional-grade studio headphones with hi-res audio support, memory foam ear cups, and detachable cable.",
  },
  {
    id: 7,
    name: "Classic Watch",
    category: "Accessories",
    price: 5500,
    image: watch2,
    rating: 4.4,
    colors: ["Gold", "Silver"],
    sizes: [],
    inStock: true,
    quantity: 12,
    description:
      "Timeless analog watch with stainless steel case, sapphire crystal glass, and genuine leather strap.",
  },
  {
    id: 8,
    name: "Sport Watch",
    category: "Accessories",
    price: 3800,
    image: watch3,
    rating: 4.2,
    colors: ["Black", "Blue", "Green"],
    sizes: [],
    inStock: true,
    quantity: 18,
    description:
      "Water-resistant sport watch with fitness tracking, heart rate monitor, and GPS capabilities.",
  },
  {
    id: 9,
    name: "Insulated Bottle",
    category: "Lifestyle",
    price: 890,
    image: waterBottle,
    rating: 4.6,
    colors: ["Silver", "Black", "Blue"],
    sizes: [],
    inStock: true,
    quantity: 30,
    description:
      "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.",
  },
  {
    id: 10,
    name: "Luxury Perfume",
    category: "Beauty",
    price: 7500,
    image: perfume,
    rating: 4.7,
    colors: [],
    sizes: ["50ml", "100ml"],
    inStock: true,
    quantity: 7,
    description:
      "Exquisite luxury fragrance with notes of jasmine, sandalwood, and musk. Long-lasting scent for day and night.",
  },
  {
    id: 11,
    name: "Matte Lipstick",
    category: "Beauty",
    price: 650,
    image: lipstick,
    rating: 4.5,
    colors: ["Red", "Pink", "Nude", "Berry"],
    sizes: [],
    inStock: true,
    quantity: 25,
    description:
      "Creamy matte lipstick with long-lasting formula. Enriched with vitamin E for smooth, hydrated lips all day.",
  },
  {
    id: 12,
    name: "Building Blocks Set",
    category: "Toys",
    price: 1200,
    image: toy1,
    rating: 4.8,
    colors: ["Multicolor"],
    sizes: [],
    inStock: true,
    quantity: 14,
    description:
      "Creative building blocks set with 200+ pieces. Helps develop imagination, motor skills, and problem-solving abilities.",
  },
  {
    id: 13,
    name: "Remote Control Car",
    category: "Toys",
    price: 2200,
    image: toy2,
    rating: 4.3,
    colors: ["Red", "Blue"],
    sizes: [],
    inStock: true,
    quantity: 9,
    description:
      "High-speed remote control car with rechargeable battery, LED lights, and durable body. Perfect for outdoor play.",
  },
  {
    id: 14,
    name: "Plush Teddy Bear",
    category: "Toys",
    price: 950,
    image: toy3,
    rating: 4.9,
    colors: ["Brown", "White"],
    sizes: ["Small", "Medium", "Large"],
    inStock: true,
    quantity: 22,
    description:
      "Super soft plush teddy bear made with premium materials. Hypoallergenic and safe for all ages.",
  },
];

export default products;
