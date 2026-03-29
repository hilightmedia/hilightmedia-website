"use client";

import Image from "next/image";

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

const mid = Math.ceil(allLogos.length / 2);

const firstRowLogos = allLogos.slice(0, mid);
const secondRowLogos = allLogos.slice(mid);

export default function BrandsTrustSection() {
  
  const firstRowItems = [...firstRowLogos, ...firstRowLogos, ...firstRowLogos];
  const secondRowItems = [...secondRowLogos, ...secondRowLogos, ...secondRowLogos];

  return (
    <section className="w-full py-16 relative mb-8">
      <div className="max-w-7xl mx-auto px-6 ">
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
                className="shrink-0 p-6 h-30 w-50 inline-flex items-center"
              >
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={1000}
                  height={1000}
                  className="object-contain w-full h-full"
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
                className="shrink-0 transition-shadow p-6 h-30 w-50 inline-flex items-center"
              >
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={120}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}