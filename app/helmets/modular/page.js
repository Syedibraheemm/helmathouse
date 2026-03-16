import CatalogPage from "@/components/CatalogPage";
import { getProductsByCategory } from "@/data/products";

export const metadata = {
  title: "Modular Helmets | Helmet House",
  description: "Browse modular helmet collection at Helmet House."
};

export default function ModularPage() {
  const products = getProductsByCategory("modular");

  return (
    <CatalogPage
      title="Modular Helmets"
      subtitle="Flip-up flexibility designed for touring comfort and everyday convenience."
      products={products}
      emptyMessage="No modular helmets available right now."
    />
  );
}
