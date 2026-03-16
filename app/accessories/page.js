import CatalogPage from "@/components/CatalogPage";
import { getProductsByCategory } from "@/data/products";

export const metadata = {
  title: "Accessories | Helmet House",
  description: "Browse rider accessories at Helmet House."
};

export default function AccessoriesPage() {
  const products = getProductsByCategory("accessories");

  return (
    <CatalogPage
      title="Accessories"
      subtitle="Wire locks, riding gloves, intercom systems, and helmet covers."
      products={products}
      emptyMessage="No accessories available right now."
    />
  );
}
