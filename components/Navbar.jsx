"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Menu, X, Youtube } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import { socialLinks } from "@/data/store";

const primaryLinks = [
  { href: "/", label: "HOME PAGE" },
  { href: "/new-arrival", label: "NEW ARRIVAL" }
];

const secondaryLinks = [
  { href: "/accessories", label: "ACCESSORIES" },
  { href: "/size-guide", label: "SIZE GUIDE" },
  { href: "/contact", label: "CONTACT" },
  { href: "/store-locator", label: "STORE LOCATOR" }
];

const helmetLinks = [
  { href: "/helmets/full-face", label: "Full Face Helmets" },
  { href: "/helmets/modular", label: "Modular Helmets" },
  { href: "/helmets/open-face", label: "Open Face Helmets" }
];

const socials = [
  { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
  { icon: Youtube, href: socialLinks.youtube, label: "YouTube" },
  { icon: Facebook, href: socialLinks.facebook, label: "Facebook" }
];

function isActivePath(currentPath, href) {
  return currentPath === href || (href !== "/" && currentPath.startsWith(href));
}

function DesktopLink({ href, label, currentPath }) {
  const active = isActivePath(currentPath, href);

  return (
    <Link
      href={href}
      prefetch
      className={`text-[11px] tracking-[0.15em] transition-colors duration-300 ${
        active ? "text-glow" : "text-textSecondary hover:text-textPrimary"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownCloseTimer = useRef(null);

  const openHelmetDropdown = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setDropdownOpen(true);
  };

  const closeHelmetDropdown = () => {
    dropdownCloseTimer.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 140);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (dropdownCloseTimer.current) {
        clearTimeout(dropdownCloseTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    const allRoutes = [
      ...primaryLinks.map((link) => link.href),
      ...secondaryLinks.map((link) => link.href),
      ...helmetLinks.map((link) => link.href)
    ];

    allRoutes.forEach((route) => router.prefetch(route));
  }, [router]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 h-20 w-full transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <nav className="section-wrap flex h-full items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-6">
          <Logo />
          <ul className="hidden items-center gap-4 xl:flex xl:gap-6">
            {primaryLinks.map((item) => (
              <li key={item.label}>
                <DesktopLink href={item.href} label={item.label} currentPath={pathname} />
              </li>
            ))}
            <li
              className="relative -mb-2 pb-2"
              onMouseEnter={openHelmetDropdown}
              onMouseLeave={closeHelmetDropdown}
            >
              <button
                type="button"
                onClick={() => {
                  if (dropdownOpen) {
                    closeHelmetDropdown();
                  } else {
                    openHelmetDropdown();
                  }
                }}
                className={`text-[11px] tracking-[0.15em] transition-colors duration-300 ${
                  pathname.startsWith("/helmets")
                    ? "text-glow"
                    : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                HELMET
              </button>

              <div
                className={`absolute left-0 top-full mt-1 min-w-[220px] rounded-2xl border border-white/10 bg-surface/95 p-3 shadow-glow transition-all duration-300 ${
                  dropdownOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                {helmetLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch
                    className="block rounded-lg px-3 py-2 text-sm text-textSecondary transition-colors duration-300 hover:bg-white/[0.04] hover:text-glow"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
            {secondaryLinks.map((item) => (
              <li key={item.label}>
                <DesktopLink href={item.href} label={item.label} currentPath={pathname} />
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <SearchBar />
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-textSecondary transition-all duration-300 hover:scale-105 hover:border-glow/35 hover:text-glow hover:shadow-glow"
                aria-label={item.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-textPrimary xl:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="section-wrap glass-nav border-t border-white/10 py-4 xl:hidden">
          <div className="flex flex-col gap-3">
            {primaryLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch
                className={`text-sm transition-colors duration-300 ${
                  isActivePath(pathname, item.href)
                    ? "text-glow"
                    : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <p className="mt-2 text-xs tracking-[0.2em] text-textSecondary">HELMET</p>
            {helmetLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className={`text-sm transition-colors duration-300 ${
                  pathname === item.href ? "text-glow" : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {secondaryLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch
                className={`text-sm transition-colors duration-300 ${
                  isActivePath(pathname, item.href)
                    ? "text-glow"
                    : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2">
              <SearchBar mobile />
            </div>

            <div className="mt-3 flex items-center gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-textSecondary transition-all duration-300 hover:scale-105 hover:border-glow/35 hover:text-glow"
                    aria-label={item.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
