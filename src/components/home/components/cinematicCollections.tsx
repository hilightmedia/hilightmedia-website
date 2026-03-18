"use client";

import Image from "next/image";

const firstRowLogos = [
  "/home/collections/jailer.png",
  "/home/collections/coolie.png",
  "/home/collections/demonte.png",
  "/home/collections/vettayan.png",
  "/home/collections/ddReturns.png",
  "/home/collections/vds.png",
];

const secondRowLogos = [
  "/home/collections/pathuthala.png",
  "/home/collections/leo.png",
  "/home/collections/mamannan.png",
  "/home/collections/gattaKusthi.png",
  "/home/collections/kanguva.png",
];

export default function CinematicCollections() {
  const firstRowItems = [...firstRowLogos, ...firstRowLogos, ...firstRowLogos];
  const secondRowItems = [...secondRowLogos, ...secondRowLogos, ...secondRowLogos];

  return (
    <section className="w-full py-16 relative mb-8">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-center mb-12">Cinematic Collabations</h2>
        <Image
          src="/home/collectionsBg.png"
          alt="Collections background"
          fill
          className="object-cover"
        />
        {/* First Row - Left to Right */}
        <div className="overflow-hidden mb-8 mt-15">
          <div className="flex w-max gap-8 md:gap-12 brands-marquee-ltr">
            {firstRowItems.map((logo, i) => (
              <div
                key={`first-${i}`}
                className="shrink-0 transition-shadow h-26 w-36 inline-flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={150}
                  height={100}
                  className="object-cover max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="overflow-hidden mt-15">
          <div className="flex w-max gap-8 md:gap-12 brands-marquee-rtl">
            {secondRowItems.map((logo, i) => (
              <div key={`second-${i}`} className="shrink-0 transition-shadow h-26 w-36 inline-flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={150}
                  height={100}
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
