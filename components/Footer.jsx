import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { socialLinks, storeInfo } from "@/data/store";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/new-arrival", label: "New Arrival" },
  { href: "/helmets/full-face", label: "Full Face Helmets" },
  { href: "/helmets/modular", label: "Modular Helmets" },
  { href: "/helmets/open-face", label: "Open Face Helmets" },
  { href: "/accessories", label: "Accessories" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/contact", label: "Contact" },
  { href: "/store-locator", label: "Store Locator" }
];

export default function Footer() {
  return (
    <footer className="border-t border-glow/25 bg-base py-10">
      <div className="section-wrap">
        <div className="mb-8 h-[1px] w-full bg-gradient-to-r from-transparent via-glow/60 to-transparent" />
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold tracking-[0.2em] text-glow">HELMET HOUSE</p>
            <p className="mt-3 max-w-sm text-sm text-textSecondary">
              Premium helmet and accessories showcase designed to make browsing and ordering simple.
            </p>
            <p className="mt-4 text-sm text-textSecondary">{storeInfo.phone}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-textSecondary transition-colors duration-300 hover:text-glow"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="text-sm text-textSecondary lg:text-right">
            {storeInfo.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <div className="mt-4 flex gap-3 lg:justify-end">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] p-2 transition-colors duration-300 hover:border-glow/35 hover:text-glow"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] p-2 transition-colors duration-300 hover:border-glow/35 hover:text-glow"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] p-2 transition-colors duration-300 hover:border-glow/35 hover:text-glow"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs tracking-[0.12em] text-textSecondary">
          © {new Date().getFullYear()} Helmet House. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
