import Link from "next/link";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import PageHeading from "@/components/PageHeading";
import CollectionPreviewGrid from "@/components/CollectionPreviewGrid";
import {
  collectionPreviews,
  getFeaturedAccessories,
  getFeaturedHelmetProducts,
  getNewArrivalProducts
} from "@/data/products";

export const metadata = {
  title: "Helmet House | Home",
  description: "Helmet House premium helmets, accessories, and latest arrivals."
};

export default function HomePage() {
  const featuredHelmets = getFeaturedHelmetProducts(6);
  const featuredAccessories = getFeaturedAccessories(4);
  const newArrivals = getNewArrivalProducts(4);

  return (
    <>
      <Hero />

      <section className="py-20">
        <div className="section-wrap">
          <PageHeading
            title="Featured Helmets"
            subtitle="A curated lineup of popular full face, modular, and open face models."
          />
          <ProductGrid products={featuredHelmets} />
          <div className="mt-8">
            <Link
              href="/helmets/full-face"
              className="inline-flex rounded-full border border-glow/40 px-6 py-3 text-sm text-glow transition-colors duration-300 hover:bg-glow/10"
            >
              View All Helmets
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="section-wrap">
          <PageHeading
            title="Helmet Collections"
            subtitle="Browse category previews and jump to detailed product pages."
          />
          <CollectionPreviewGrid collections={collectionPreviews} />
        </div>
      </section>

      <section className="py-20">
        <div className="section-wrap">
          <PageHeading
            title="Accessories Preview"
            subtitle="Essential add-ons for security, communication, and all-weather riding."
          />
          <ProductGrid products={featuredAccessories} />
          <div className="mt-8">
            <Link
              href="/accessories"
              className="inline-flex rounded-full border border-glow/40 px-6 py-3 text-sm text-glow transition-colors duration-300 hover:bg-glow/10"
            >
              View Accessories
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="section-wrap">
          <PageHeading
            title="New Arrivals Preview"
            subtitle="Fresh helmet drops and newly listed riding essentials."
          />
          <ProductGrid products={newArrivals} />
          <div className="mt-8">
            <Link
              href="/new-arrival"
              className="inline-flex rounded-full border border-glow/40 px-6 py-3 text-sm text-glow transition-colors duration-300 hover:bg-glow/10"
            >
              View New Arrivals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
