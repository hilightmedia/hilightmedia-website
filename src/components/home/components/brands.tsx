"use client";

import Image from "next/image";

const firstRowLogos = [
  "/home/brands/zomato.png",
  "/home/brands/lenovo.png",
  "/home/brands/zebronics.png",
  "/home/brands/unimoni.png",
  "/home/brands/dcb.png",
  "/home/brands/parryware.png",
];

const secondRowLogos = [
  "/home/brands/tvs.png",
  "/home/brands/agarwals.png",
  "/home/brands/titanEye.png",
  "/home/brands/honda.png",
  "/home/brands/tata.png",
  "/home/brands/skoda.png",
  "/home/brands/anuj.png",
];

export default function BrandsTrustSection() {
  
  const firstRowItems = [...firstRowLogos, ...firstRowLogos];
  const secondRowItems = [...secondRowLogos, ...secondRowLogos];

  return (
    <section className="w-full py-16 relative mb-8">
      <div className="max-w-300 mx-auto px-6 ">
        <Image
          src="/home/brandsBg.png"
          alt="Brand logo"
          width={1200}
          height={600}
          className="object-fill absolute mx-auto inset-0"
        />
        <h2 className="text-center mb-8">
          Brand That Trust Us
        </h2>

        {/* First Row - Left to Right */}
        <div className="overflow-hidden mb-8">
          <div className="flex w-max gap-8 md:gap-12 brands-marquee-ltr">
            {firstRowItems.map((logo, i) => (
              <div
                key={`first-${i}`}
                className="shrink-0 transition-shadow p-6 h-24 w-40"
              >
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={120}
                  height={60}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="overflow-hidden">
          <div className="flex w-max gap-8 md:gap-12 brands-marquee-rtl">
            {secondRowItems.map((logo, i) => (
              <div
                key={`second-${i}`}
                className="shrink-0 transition-shadow p-6 h-24 w-40"
              >
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={120}
                  height={60}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}