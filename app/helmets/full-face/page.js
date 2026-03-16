import CatalogPage from "@/components/CatalogPage";
import { getProductsByCategory } from "@/data/products";

export const metadata = {
  title: "Full Face Helmets | Helmet House",
  description: "Browse full face helmet collection at Helmet House."
};

export default function FullFacePage() {
  const products = getProductsByCategory("full-face");

  return (
    <CatalogPage
      title="Full Face Helmets"
      subtitle="Maximum coverage, track-ready aerodynamics, and trusted road protection."
      products={products}
      emptyMessage="No full face helmets available right now."
    />
  );
}
