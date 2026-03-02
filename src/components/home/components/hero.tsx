"use client";

import { Lora } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeroCarousel from "./heroCarousel";

const lora = Lora({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
  variable: "--font-lora",
  display: "swap",
});

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="w-full mx-auto max-w-300 overflow-hidden flex flex-col pt-20 pb-10 px-6 relative">
      <h1 className="poppins text-center leading-snug">
        From <br className="inline-block sm:hidden" />{" "}
        <span className={`${lora.className} italic mx-2`}>Advertising</span> to
        <br />
        Urban{" "}
        <Image
          src="/home/subHeading.png"
          alt="logo"
          width={100}
          height={100}
          className="inline-block w-20 mx-2 rounded-lg"
        />{" "}
        <br className="inline-block sm:hidden" />
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

      {/* 3D Card Carousel */}
      <div className="mt-14 w-screen relative left-1/2 -translate-x-1/2">
        <HeroCarousel />
      </div>
    </section>
  );
}