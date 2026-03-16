import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import { socialLinks, storeInfo } from "@/data/store";

export const metadata = {
  title: "Contact | Helmet House",
  description: "Contact Helmet House for product inquiries and store support."
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="section-wrap">
        <PageHeading
          title="Contact Helmet House"
          subtitle="Reach us on phone or WhatsApp for helmet availability and guidance."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-surface p-7">
            <h2 className="text-2xl font-semibold">Store Contact</h2>
            <a
              href={`tel:${storeInfo.phone}`}
              className="mt-5 flex items-center gap-3 text-textSecondary transition-colors duration-300 hover:text-glow"
            >
              <Phone size={18} />
              {storeInfo.phone}
            </a>
            <a
              href={storeInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-accent px-5 py-2 text-sm text-glow transition-colors duration-300 hover:bg-accent/10"
            >
              Chat on WhatsApp
            </a>

            <div className="mt-8">
              <p className="mb-3 text-sm tracking-[0.14em] text-textSecondary">ADDRESS</p>
              <div className="space-y-1 text-sm text-textSecondary">
                {storeInfo.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7">
            <h2 className="text-2xl font-semibold">Social Media</h2>
            <div className="mt-5 space-y-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-textSecondary transition-colors duration-300 hover:text-glow"
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-textSecondary transition-colors duration-300 hover:text-glow"
              >
                <Youtube size={18} />
                YouTube
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-textSecondary transition-colors duration-300 hover:text-glow"
              >
                <Facebook size={18} />
                Facebook
              </a>
              <div className="pt-4 text-sm text-textSecondary">
                <p className="mb-2 flex items-center gap-2">
                  <MapPin size={16} />
                  Rawalpindi Store
                </p>
                <p>{storeInfo.addressLines.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
