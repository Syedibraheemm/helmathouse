import Image from "next/image";
import { storeInfo } from "@/data/store";
const whatsappBase = storeInfo.whatsappUrl.split("?")[0];

export default function ProductCard({ product }) {
  const orderMessage = encodeURIComponent(
    `Hello, I want to inquire about the ${product.name}.`
  );

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-4 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-glow/40 hover:shadow-glow">
      <div className="relative h-[250px] overflow-hidden rounded-2xl bg-black/40">
        <Image
          src={product.image1}
          alt={product.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
        />
        <Image
          src={product.image2}
          alt={`${product.name} alternate angle`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
      </div>

      <div className="pt-5">
        <h3 className="text-xl font-semibold text-textPrimary">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-textSecondary">{product.description}</p>
        <p className="mt-3 text-lg font-medium text-glow">{product.price}</p>

        <a
          href={`${whatsappBase}?text=${orderMessage}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-full border border-accent px-5 py-2 text-sm font-medium text-glow transition-all duration-300 hover:bg-accent/10 hover:shadow-glow"
        >
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
