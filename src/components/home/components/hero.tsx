"use client";

import { Lora } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeroCarousel from "./heroCarousel";
import { useEffect, useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
  variable: "--font-lora",
  display: "swap",
});

const carouselImages = [
  "/home/c1.png",
  "/home/c2.png",
  "/home/c3.png",
  "/home/c4.png",
  "/home/c5.png",
  "/home/c6.png",
  "/home/c7.png",
];

function InlineImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block mx-2 align-middle overflow-hidden rounded-lg"
      style={{ width: "80px", height: "58.13px" }}
    >
      <span
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          width: `${carouselImages.length * 80}px`,
          transform: `translateX(-${index * 80}px)`,
        }}
      >
        {carouselImages.map((src, i) => (
          <span
            key={i}
            className="relative shrink-0"
            style={{ width: "80px", height: "58.13px" }}
          >
            <Image
              src={src}
              alt={`carousel ${i}`}
              fill
              className="object-cover rounded-lg"
            />
          </span>
        ))}
      </span>
    </span>
  );
}

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="w-full mx-auto max-w-7xl overflow-hidden flex flex-col pt-20 pb-10 px-6 relative">
      <h1 className="poppins text-center leading-snug">
        From <br className="inline-block sm:hidden" />{" "}
        <span className={`${lora.className} italic mx-2`}>Advertising</span> to
        <br />
        Urban <InlineImageCarousel /> <br className="inline-block sm:hidden" />
        Influence
      </h1>

      <p className="my-8 max-w-180 mx-auto text-center">
        We help brands move beyond visibility to become a meaningful part of
        Urban India&apos;s culture, conversations, and everyday influence.
      </p>

      <button
        onClick={() => {
          router.push("/#contact");
        }}
        className="bg-primary-500 mt-3 w-fit mx-auto px-8 py-2 text-lg text-white hover:bg-primary-600 transition-colors rounded-lg"
      >
        Explore Media Services
      </button>

      <div className="mt-14 w-screen relative left-1/2 -translate-x-1/2">
        <HeroCarousel />
      </div>
    </section>
  );
}