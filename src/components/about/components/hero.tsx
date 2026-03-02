"use client";

import Image from "next/image";

export default function Hero() {
  const logos = [
    "/about/clients/iplanet.png",
    "/about/clients/vijay.png",
    "/about/clients/tvs.png",
    "/about/clients/tata.png",
    "/about/clients/reliance.png",
    "/about/clients/tvsSchool.png",
  ];

  return (
    <section className="w-full pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <Image
          src="/about/heroBg.png"
          alt="pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-300 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="flex flex-col gap-4">
          <h2>
            Join Us To Amplify Your 
            Brand Visibility, 
            Dominate Urban Spaces, 
            And Drive Real-World 
            Impact.
          </h2>

          <p>
            At HiLight Media, we help brands connect with audiences through
            high-impact outdoor advertising and integrated media solutions.
            From strategic billboard placements to city-wide campaigns, we turn
            everyday spaces into powerful brand touchpoints that deliver
            measurable growth.
          </p>

          <div className="mb-6 text-sm text-[#ff4b2e] font-medium">
            Join 100+ companies already growing
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 max-w-md">
            {logos.map((logo, i) => (
              <div key={i} className="relative h-10 w-full">
                <Image
                  src={logo}
                  alt="brand logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl p-4">
          <div className="bg-[#ff4b2e] absolute inset-0 z-[-1] -translate-y-4 translate-x-4 rounded-2xl"></div>
          <div className="rounded-xl">
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