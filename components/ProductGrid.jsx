import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products, emptyMessage = "No products available right now." }) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-textSecondary">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
