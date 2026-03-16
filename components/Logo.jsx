import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <span className="relative h-12 w-14 overflow-hidden rounded-md border border-white/15 bg-black/30 sm:h-14 sm:w-16">
        <Image
          src="/logo.png"
          alt="Helmet House logo"
          fill
          priority
          sizes="(max-width: 640px) 56px, 64px"
          className="object-contain"
        />
      </span>
    </Link>
  );
}
