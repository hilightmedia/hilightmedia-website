"use client";

import Image from "next/image";

export default function Hero() {
  const allLogos = [
    "/home/brands/zomato.png",
    "/home/brands/lenovo.png",
    "/home/brands/zebronics.png",
    "/home/brands/unimoni.png",
    "/home/brands/dcb.png",
    "/home/brands/parryware.png",
    "/home/brands/vijaytv.png",
    "/home/brands/zeetamil.png",
    "/home/brands/tvs.png",
    "/home/brands/agarwal.png",
    "/home/brands/titan.png",
    "/home/brands/honda.png",
    "/home/brands/tata.png",
    "/home/brands/skoda.png",
    "/home/brands/anuj.png",
    "/home/brands/malabar.png",
    "/home/brands/iplanet.png",
    "/home/brands/apollo.png",
    "/home/brands/spectrum.png",
    "/home/brands/zaara.png",
    "/home/brands/supreme.png",
    "/home/brands/Zam_Zam.png",
  ];

  // duplicate for seamless loop
  const marqueeLogos = [...allLogos, ...allLogos];

  return (
    <section className="w-full pt-24 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <Image
          src="/about/heroBg.png"
          alt="pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* LEFT */}
        <div className="flex flex-col gap-4">
          <h2>
            Join Us To Amplify Your Brand Visibility, Dominate Urban Spaces, And
            Drive Real-World Impact.
          </h2>

          <p>
            At HiLight Media, we help brands connect with audiences through
            high-impact outdoor advertising and integrated media solutions.
          </p>

          <div className="mb-4 text-sm text-[#ff4b2e] font-medium">
            Join 100+ companies already growing
          </div>

          {/* 🚀 MARQUEE */}
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max marquee gap-10 hover:[animation-play-state:paused]">
              {marqueeLogos.map((logo, i) => (
                <div key={i} className="relative h-10 w-[120px] shrink-0">
                  <Image
                    src={logo}
                    alt="brand logo"
                    fill
                    className="object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>

            {/* gradient fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative rounded-3xl p-4">
          <div className="bg-[#ff4b2e] absolute inset-0 z-[-1] -translate-y-4 translate-x-4 rounded-2xl"></div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/about/hero.png"
              alt="billboard"
              width={1000}
              height={1500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}