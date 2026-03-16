import Link from "next/link";
import Image from "next/image";

export default function CollectionPreviewGrid({ collections }) {
  return (
    <div className="space-y-6">
      {collections.map((item) => (
        <article
          key={item.id}
          className="group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:border-glow/35 hover:shadow-glow"
        >
          <div className="absolute inset-0 -z-10">
            <Image
              src={item.image}
              alt={item.title}
              fill
              loading="lazy"
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/45" />
          </div>

          <div className="grid min-h-[280px] items-center gap-6 p-8 md:grid-cols-[1.2fr_1fr] md:p-10">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">{item.title}</h3>
              <p className="mt-4 max-w-xl text-textSecondary">{item.description}</p>
              <Link
                href={item.href}
                prefetch
                className="mt-6 inline-flex rounded-full border border-glow/40 px-5 py-2 text-sm text-glow transition-colors duration-300 hover:bg-glow/10"
              >
                View Collection
              </Link>
            </div>
            <div className="hidden rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-textSecondary md:block">
              Category: {item.category}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
