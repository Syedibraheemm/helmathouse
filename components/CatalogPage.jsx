import ProductGrid from "@/components/ProductGrid";
import PageHeading from "@/components/PageHeading";

export default function CatalogPage({ title, subtitle, products, emptyMessage }) {
  return (
    <section className="py-20">
      <div className="section-wrap">
        <PageHeading title={title} subtitle={subtitle} />
        <ProductGrid products={products} emptyMessage={emptyMessage} />
      </div>
    </section>
  );
}
