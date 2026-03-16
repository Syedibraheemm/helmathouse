export const categoryLabels = {
  "full-face": "Full Face Helmets",
  modular: "Modular Helmets",
  "open-face": "Open Face Helmets",
  accessories: "Accessories"
};

// Add or edit product entries here.
// Image files should live in /public/products and be referenced as /products/<file-name>.
export const products = [
  {
    id: "helmet001",
    name: "S205",
    category: "full-face",
    price: "Rs 18500",
    image1: "/products/vec1.webp",
    image2: "/products/vec1.1.webp",
    description: "Premium racing helmet with aerodynamic shell and pinlock-ready visor.",
    featured: true,
    isNewArrival: true
  },
  {
    id: "helmet002",
    name: "LS2 Storm II",
    category: "full-face",
    price: "Rs 21200",
    image1: "/products/vec2.webp",
    image2: "/products/vec2.2.webp",
    description: "Touring-focused full face helmet with efficient ventilation and low wind noise.",
    featured: true,
    isNewArrival: false
  },
  {
    id: "helmet003",
    name: "SMK Titan Carbon",
    category: "full-face",
    price: "Rs 26800",
    image1: "/products/vec3.webp",
    image2: "/products/vec3.2.webp",
    description: "Carbon composite shell engineered for lightweight comfort and high-speed stability.",
    featured: true,
    isNewArrival: true
  },
  {
    id: "helmet004",
    name: "Airoh Valor Prime",
    category: "open-face",
    price: "Rs 19500",
    image1: "/products/open1.webp",
    image2: "/products/open1.2.webp",
    description: "Compact sports profile with aggressive lines and anti-scratch face shield.",
    featured: false,
    isNewArrival: false
  },
  {
    id: "helmet005",
    name: "HJC i90 Touring",
    category: "modular",
    price: "Rs 32400",
    image1: "/products/mod1.webp",
    image2: "/products/mod1.2.webp",
    description: "Flip-up modular build with integrated sun visor and touring comfort padding.",
    featured: true,
    isNewArrival: true
  },
  {
    id: "helmet006",
    name: "Nolan N100-6",
    category: "modular",
    price: "Rs 45800",
    image1: "/products/mod2.webp",
    image2: "/products/mod2.2.webp",
    description: "Premium modular helmet with dual-action chin guard and balanced acoustics.",
    featured: false,
    isNewArrival: false
  },
  {
    id: "helmet007",
    name: "AGV Compact ST",
    category: "modular",
    price: "Rs 35200",
    image1: "/products/mod3.webp",
    image2: "/products/mod3.2.webp",
    description: "City-to-highway modular helmet featuring streamlined shell and quick micrometric lock.",
    featured: true,
    isNewArrival: false
  },
  {
    id: "helmet008",
    name: "Shark Evo ES",
    category: "open-face",
    price: "Rs 41800",
    image1: "/products/open2.webp",
    image2: "/products/open2.2.webp",
    description: "Versatile modular design optimized for open and closed riding positions.",
    featured: false,
    isNewArrival: true
  },
  {
    id: "helmet009",
    name: "Bell Custom 500",
    category: "open-face",
    price: "Rs 23800",
    image1: "/products/open3.webp",
    image2: "/products/open3.2.webp",
    description: "Classic open face icon with premium interior and timeless street style.",
    featured: true,
    isNewArrival: false
  },
  {
    id: "acc001",
    name: "Armor Wire Lock",
    category: "accessories",
    price: "Rs 3200",
    image1: "/products/acc1.1.jpg",
    image2: "/products/acc1.jpg",
    description: "Braided wire lock system for quick parking security.",
    featured: true,
    isNewArrival: false
  },
  {
    id: "acc002",
    name: "GripFlex Riding Gloves",
    category: "accessories",
    price: "Rs 5400",
    image1: "/products/acc2.jpg",
    image2: "/products/acc2.2.jpeg",
    description: "Ventilated gloves with reinforced palm support and knuckle protection.",
    featured: true,
    isNewArrival: true
  },

  {
    id: "acc003",
    name: "AeroShield Helmet Cover",
    category: "accessories",
    price: "Rs 2100",
    image1: "/products/acc3.jpeg",
    image2: "/products/acc3.3.webp",
    description: "Dust and weather-resistant stretch cover for daily helmet protection.",
    featured: false,
    isNewArrival: false
  }
];

export const collectionPreviews = [
  {
    id: "preview-full-face",
    title: "Full Face Helmets",
    category: "full-face",
    description: "Track-inspired profiles for riders who demand full-shell confidence.",
    image: "/products/collection-full-face.svg",
    href: "/helmets/full-face"
  },
  {
    id: "preview-modular",
    title: "Modular Helmets",
    category: "modular",
    description: "Flip-up convenience engineered for long-distance touring and city rides.",
    image: "/products/collection-modular.svg",
    href: "/helmets/modular"
  },
  {
    id: "preview-open-face",
    title: "Open Face Helmets",
    category: "open-face",
    description: "Minimal silhouettes with modern materials and elevated comfort.",
    image: "/products/collection-open-face.svg",
    href: "/helmets/open-face"
  }
];

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getFeaturedHelmetProducts(limit = 6) {
  return products
    .filter((product) => product.featured && product.category !== "accessories")
    .slice(0, limit);
}

export function getFeaturedAccessories(limit = 4) {
  return products
    .filter((product) => product.featured && product.category === "accessories")
    .slice(0, limit);
}

export function getNewArrivalProducts(limit = 8) {
  return products.filter((product) => product.isNewArrival).slice(0, limit);
}

export function getProductRoute(product) {
  if (product.category === "accessories") {
    return "/accessories";
  }

  return `/helmets/${product.category}`;
}
