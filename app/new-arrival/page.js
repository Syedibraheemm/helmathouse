import CatalogPage from "@/components/CatalogPage";
import { getNewArrivalProducts } from "@/data/products";

export const metadata = {
  title: "New Arrival | Helmet House",
  description: "Latest helmet and accessory drops available at Helmet House."
};

export default function NewArrivalPage() {
  const products = getNewArrivalProducts(20);

  return (
    <CatalogPage
      title="New Arrivals"
      subtitle="Explore the latest helmets and accessories recently added to Helmet House."
      products={products}
      emptyMessage="No new arrivals yet."
    />
  );
}
