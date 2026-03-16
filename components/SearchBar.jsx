"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";

function resolveProductRoute(product) {
  if (product.category === "accessories") {
    return "/accessories";
  }

  return `/helmets/${product.category}`;
}

export default function SearchBar({ mobile = false }) {
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const [open, setOpen] = useState(mobile);
  const [query, setQuery] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    if (mobile) {
      return;
    }

    const handleOutsideClick = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mobile]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if ((!open && !mobile) || searchItems.length > 0) {
      return;
    }

    let active = true;
    import("@/data/products").then((module) => {
      if (!active) {
        return;
      }

      const items = module.products.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image1: product.image1,
        description: product.description,
        route: resolveProductRoute(product)
      }));
      setSearchItems(items);
    });

    return () => {
      active = false;
    };
  }, [open, mobile, searchItems.length]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return [];
    }

    return searchItems.filter((item) => {
      return (
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
    });
  }, [query, searchItems]);

  const isExpanded = open || mobile;
  const hasQuery = query.trim().length > 0;

  return (
    <div ref={wrapperRef} className={`relative ${mobile ? "w-full" : "w-auto"}`}>
      <div className={`flex items-center ${mobile ? "w-full" : ""}`}>
        {!mobile && (
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-textSecondary transition-all duration-300 hover:border-glow/40 hover:text-glow hover:shadow-glow"
            aria-label="Open product search"
          >
            <Search size={16} />
          </button>
        )}

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isExpanded ? (mobile ? "ml-0 w-full opacity-100" : "ml-2.5 w-[260px] opacity-100") : "ml-0 w-0 opacity-0"
          }`}
        >
          <div className="flex items-center rounded-full border border-white/10 bg-black/60 px-3 py-2">
            <Search size={15} className="text-textSecondary" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search helmets or accessories..."
              className="w-full bg-transparent px-2 text-sm text-textPrimary outline-none placeholder:text-textSecondary"
            />
            {!!query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="rounded-full p-1 text-textSecondary transition-colors duration-300 hover:text-glow"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {isExpanded && hasQuery && (
        <div
          className={`absolute z-[70] mt-3 max-h-[380px] overflow-auto rounded-2xl border border-white/10 bg-surface/95 p-3 shadow-glow ${
            mobile ? "left-0 right-0" : "right-0 w-[360px]"
          }`}
        >
          {results.length > 0 ? (
            <div className="space-y-3">
              {results.slice(0, 8).map((product) => (
                <Link
                  key={product.id}
                  href={product.route}
                  prefetch
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-2 transition-colors duration-300 hover:border-glow/40"
                >
                  <div className="relative h-14 w-16 overflow-hidden rounded-lg">
                    <Image
                      src={product.image1}
                      alt={product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-textPrimary">{product.name}</p>
                    <p className="text-xs text-textSecondary">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-textSecondary">
              No products found. Please try another search.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
