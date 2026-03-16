import { MapPin } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import { storeInfo } from "@/data/store";

export const metadata = {
  title: "Store Locator | Helmet House",
  description: "Find Helmet House store location in Rawalpindi."
};

export default function StoreLocatorPage() {
  const mapUrl = `https://www.google.com/maps?q=${storeInfo.mapQuery}&output=embed`;

  return (
    <section className="py-20">
      <div className="section-wrap">
        <PageHeading
          title="Store Locator"
          subtitle="Visit Helmet House for in-person sizing and product guidance."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-7">
            <div className="mb-4 inline-flex rounded-full border border-glow/30 bg-glow/10 p-3 text-glow shadow-glow">
              <MapPin size={20} />
            </div>
            <h2 className="text-2xl font-semibold">Helmet House</h2>
            <div className="mt-4 space-y-1 text-sm text-textSecondary">
              {storeInfo.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a
              href={`https://maps.google.com/?q=${storeInfo.mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-glow/40 px-5 py-2 text-sm text-glow transition-colors duration-300 hover:bg-glow/10"
            >
              Open in Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Helmet House Map"
              src={mapUrl}
              loading="lazy"
              className="h-[380px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
