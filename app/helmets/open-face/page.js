import CatalogPage from "@/components/CatalogPage";
import { getProductsByCategory } from "@/data/products";

export const metadata = {
  title: "Open Face Helmets | Helmet House",
  description: "Browse open face helmet collection at Helmet House."
};

export default function OpenFacePage() {
  const products = getProductsByCategory("open-face");

  return (
    <CatalogPage
      title="Open Face Helmets"
      subtitle="Classic silhouettes with modern comfort and urban-ready airflow."
      products={products}
      emptyMessage="No open face helmets available right now."
    />
  );
}
