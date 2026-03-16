import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-14">
      <div className="absolute inset-0 -z-20 bg-radial-green opacity-80" />
      <div className="absolute -left-24 top-8 -z-10 h-[280px] w-[280px] animate-drift rounded-full bg-glow/20 blur-3xl" />
      <div className="absolute -right-16 bottom-5 -z-10 h-[300px] w-[300px] animate-drift rounded-full bg-accent/15 blur-3xl" />

      <div className="section-wrap grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="mb-5 text-xs tracking-[0.3em] text-glow">HELMET HOUSE</p>
          <h1 className="headline-gradient text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Ride with Protection. Ride with Style.
          </h1>
          <p className="mt-6 max-w-xl text-base text-textSecondary sm:text-lg">
            Discover premium motorcycle helmets and riding accessories curated for everyday riders
            and performance enthusiasts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/helmets/full-face"
              prefetch
              className="rounded-full border border-accent px-6 py-3 text-sm tracking-[0.12em] text-glow transition-all duration-300 hover:bg-accent/10 hover:shadow-glow"
            >
              Explore Helmets
            </Link>
            <Link
              href="/new-arrival"
              prefetch
              className="rounded-full border border-white/20 px-6 py-3 text-sm tracking-[0.12em] text-textPrimary transition-colors duration-300 hover:border-glow/40 hover:text-glow"
            >
              New Arrivals
            </Link>
          </div>
        </div>

        <div className="relative mx-auto max-w-[560px]">
          <div className="absolute inset-0 -z-10 mx-auto h-[80%] w-[80%] rounded-full bg-glow/20 blur-3xl" />
          <Image
            src="/products/heroimage.jpg"
            alt="Helmet House premium helmet hero"
            width={1100}
            height={860}
            priority
            className="h-auto w-full rounded-3xl object-cover shadow-soft transition-transform duration-700 hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
}
