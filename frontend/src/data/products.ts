export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  images?: string[];
  category: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  badge?: string;
  slug: string;
  description?: string;
  features?: string[];
  specifications?: { label: string; value: string }[];
  sizes?: string[];
  colors?: { name: string; hex: string }[];
}

// All products database - centralized source of truth
export const allProducts: Product[] = [
  {
    id: "1",
    name: "Air Max Velocity Run",
    price: 159.99,
    salePrice: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    ],
    category: "running",
    rating: 4.5,
    reviewCount: 342,
    isNew: true,
    slug: "air-max-velocity-run",
    description:
      "Experience ultimate comfort and performance with the Air Max Velocity Run. Engineered for serious runners, these shoes feature advanced cushioning technology and breathable mesh upper for maximum airflow during intense workouts.",
    features: [
      "Advanced Air Max cushioning for superior comfort",
      "Breathable mesh upper with synthetic overlays",
      "Durable rubber outsole with flex grooves",
      "Lightweight design for enhanced performance",
      "Reflective details for low-light visibility",
    ],
    specifications: [
      { label: "Weight", value: "10.2 oz" },
      { label: "Drop", value: "10mm" },
      { label: "Support", value: "Neutral" },
      { label: "Upper Material", value: "Mesh with synthetic overlays" },
      { label: "Midsole", value: "Full-length Air Max unit" },
      { label: "Outsole", value: "Rubber with flex grooves" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    colors: [
      { name: "Black/White", hex: "#000000" },
      { name: "Navy/Orange", hex: "#1e3a8a" },
      { name: "Grey/Red", hex: "#6b7280" },
    ],
  },
  {
    id: "2",
    name: "Urban Street Classic",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    ],
    category: "lifestyle",
    rating: 4.8,
    reviewCount: 567,
    slug: "urban-street-classic",
    description:
      "Step into the streets with confidence. The Urban Street Classic combines timeless design with modern comfort, making it perfect for everyday wear.",
    features: [
      "Premium leather and suede construction",
      "Cushioned insole for all-day comfort",
      "Classic silhouette with modern updates",
      "Versatile design pairs with any outfit",
    ],
    specifications: [
      { label: "Upper Material", value: "Leather and Suede" },
      { label: "Lining", value: "Textile" },
      { label: "Insole", value: "Cushioned foam" },
      { label: "Outsole", value: "Rubber" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    colors: [
      { name: "Red/White", hex: "#dc2626" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1e3a8a" },
    ],
  },
  {
    id: "3",
    name: "Pro Basketball Elite",
    price: 189.99,
    salePrice: 149.99,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    ],
    category: "basketball",
    rating: 4.7,
    reviewCount: 289,
    badge: "Best Seller",
    slug: "pro-basketball-elite",
    description:
      "Dominate the court with Pro Basketball Elite. Designed for explosive movements and quick cuts, these shoes provide the support and traction you need.",
    features: [
      "High-top design for ankle support",
      "Responsive cushioning for quick movements",
      "Herringbone traction pattern",
      "Reinforced toe for durability",
    ],
    specifications: [
      { label: "Height", value: "High-top" },
      { label: "Cushioning", value: "Zoom Air" },
      { label: "Traction", value: "Herringbone pattern" },
      { label: "Upper", value: "Synthetic leather and mesh" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
    colors: [
      { name: "Black/Gold", hex: "#000000" },
      { name: "White/Red", hex: "#ffffff" },
    ],
  },
  {
    id: "4",
    name: "Classic White Leather",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    ],
    category: "casual",
    rating: 4.6,
    reviewCount: 412,
    slug: "classic-white-leather",
    description:
      "Timeless elegance meets everyday comfort. These classic white leather sneakers are a wardrobe essential that never goes out of style.",
    features: [
      "Premium full-grain leather",
      "Minimalist design",
      "Comfortable padded collar",
      "Easy to clean and maintain",
    ],
    specifications: [
      { label: "Upper", value: "Full-grain leather" },
      { label: "Lining", value: "Textile" },
      { label: "Insole", value: "Foam cushioned" },
      { label: "Outsole", value: "Rubber" },
    ],
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Off-White", hex: "#fafaf9" },
    ],
  },
  {
    id: "5",
    name: "High Top Canvas",
    price: 99.99,
    salePrice: 79.99,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    ],
    category: "lifestyle",
    rating: 4.4,
    reviewCount: 234,
    slug: "high-top-canvas",
    description:
      "Classic canvas high-tops with a vintage vibe. Perfect for casual outings and expressing your personal style.",
    features: [
      "Durable canvas upper",
      "Classic high-top silhouette",
      "Cushioned footbed",
      "Iconic design",
    ],
    specifications: [
      { label: "Upper", value: "Canvas" },
      { label: "Lining", value: "Canvas" },
      { label: "Insole", value: "Cushioned" },
      { label: "Outsole", value: "Rubber" },
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#ffffff" },
      { name: "Red", hex: "#dc2626" },
    ],
  },
  {
    id: "6",
    name: "Running Pro Zoom",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80",
    ],
    category: "running",
    rating: 4.9,
    reviewCount: 678,
    isNew: true,
    slug: "running-pro-zoom",
    description:
      "Professional-grade running shoes with Zoom Air technology. Built for speed and endurance.",
    features: [
      "Zoom Air cushioning",
      "Lightweight construction",
      "Breathable engineered mesh",
      "Carbon fiber plate",
    ],
    specifications: [
      { label: "Weight", value: "7.8 oz" },
      { label: "Drop", value: "8mm" },
      { label: "Type", value: "Racing" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    colors: [
      { name: "Neon Green", hex: "#84cc16" },
      { name: "Blue", hex: "#3b82f6" },
    ],
  },
  {
    id: "7",
    name: "Retro Sport Classic",
    price: 129.99,
    salePrice: 99.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    ],
    category: "retro",
    rating: 4.5,
    reviewCount: 456,
    badge: "Popular",
    slug: "retro-sport-classic",
    description:
      "Bring back the golden era of sneakers with the Retro Sport Classic. Vintage aesthetics meet modern comfort.",
    features: [
      "Retro-inspired design",
      "Premium suede and leather upper",
      "Vintage color blocking",
      "Comfortable cushioned midsole",
    ],
    specifications: [
      { label: "Upper", value: "Suede and leather" },
      { label: "Style", value: "Retro" },
      { label: "Insole", value: "Cushioned" },
      { label: "Outsole", value: "Rubber" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    colors: [
      { name: "Red/White/Blue", hex: "#dc2626" },
      { name: "Green/Yellow", hex: "#16a34a" },
    ],
  },
  {
    id: "8",
    name: "Slip-On Urban Comfort",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    ],
    category: "casual",
    rating: 4.3,
    reviewCount: 198,
    slug: "slip-on-urban-comfort",
    description:
      "Effortless style with maximum convenience. These slip-on sneakers are perfect for quick outings and laid-back days.",
    features: [
      "Easy slip-on design",
      "Elastic side panels",
      "Padded collar for comfort",
      "Lightweight construction",
    ],
    specifications: [
      { label: "Upper", value: "Canvas and elastic" },
      { label: "Style", value: "Slip-on" },
      { label: "Insole", value: "Cushioned" },
      { label: "Outsole", value: "Rubber" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1e3a8a" },
      { name: "Grey", hex: "#6b7280" },
    ],
  },
  {
    id: "9",
    name: "Performance Trail Runner",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    ],
    category: "running",
    rating: 4.7,
    reviewCount: 324,
    isNew: true,
    slug: "performance-trail-runner",
    description:
      "Conquer any terrain with the Performance Trail Runner. Built for off-road adventures with superior grip and protection.",
    features: [
      "Aggressive tread pattern",
      "Water-resistant upper",
      "Rock plate protection",
      "Enhanced stability",
    ],
    specifications: [
      { label: "Weight", value: "11.5 oz" },
      { label: "Drop", value: "6mm" },
      { label: "Type", value: "Trail" },
      { label: "Protection", value: "Rock plate" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    colors: [
      { name: "Olive/Orange", hex: "#84cc16" },
      { name: "Black/Grey", hex: "#000000" },
    ],
  },
  {
    id: "10",
    name: "Vintage Court Sneaker",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    ],
    category: "retro",
    rating: 4.4,
    reviewCount: 289,
    slug: "vintage-court-sneaker",
    description:
      "Classic court style with vintage appeal. These sneakers blend retro aesthetics with modern comfort for everyday wear.",
    features: [
      "Vintage court design",
      "Premium leather construction",
      "Herringbone outsole pattern",
      "Comfortable fit",
    ],
    specifications: [
      { label: "Upper", value: "Leather" },
      { label: "Style", value: "Court/Retro" },
      { label: "Insole", value: "Cushioned foam" },
      { label: "Outsole", value: "Rubber herringbone" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"],
    colors: [
      { name: "White/Green", hex: "#ffffff" },
      { name: "Cream/Blue", hex: "#fafaf9" },
    ],
  },
  {
    id: "11",
    name: "Athletic Performance Max",
    price: 199.99,
    salePrice: 159.99,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
    ],
    category: "basketball",
    rating: 4.8,
    reviewCount: 512,
    badge: "Best Seller",
    slug: "athletic-performance-max",
    description:
      "Maximum performance for serious athletes. These shoes deliver exceptional support and responsiveness for high-intensity play.",
    features: [
      "Maximum cushioning system",
      "Lockdown ankle support",
      "Multi-directional traction",
      "Breathable performance mesh",
    ],
    specifications: [
      { label: "Height", value: "High-top" },
      { label: "Cushioning", value: "Max Air" },
      { label: "Support", value: "Maximum" },
      { label: "Upper", value: "Performance mesh and synthetics" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
    colors: [
      { name: "Black/Red", hex: "#000000" },
      { name: "White/Blue", hex: "#ffffff" },
      { name: "Grey/Orange", hex: "#6b7280" },
    ],
  },
  {
    id: "12",
    name: "Minimalist Urban Low",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80",
    ],
    category: "casual",
    rating: 4.5,
    reviewCount: 167,
    slug: "minimalist-urban-low",
    description:
      "Less is more with the Minimalist Urban Low. Clean lines and simple design make these perfect for any casual outfit.",
    features: [
      "Minimalist aesthetic",
      "Premium canvas upper",
      "Low-profile silhouette",
      "Versatile styling",
    ],
    specifications: [
      { label: "Upper", value: "Canvas" },
      { label: "Style", value: "Minimalist" },
      { label: "Insole", value: "Basic cushion" },
      { label: "Outsole", value: "Rubber" },
    ],
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#000000" },
      { name: "Beige", hex: "#f5f5dc" },
    ],
  },
];

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find((product) => product.slug === slug);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

// Helper function to get featured products (with badges or on sale)
export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(
    (product) => product.badge || product.isNew || product.salePrice
  );
};

// Helper function to get latest products (newest 8)
export const getLatestProducts = (limit: number = 8): Product[] => {
  return allProducts.slice(0, limit);
};
