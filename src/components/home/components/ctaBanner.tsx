"use client";

import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="w-full mx-auto max-w-300 overflow-hidden px-6 py-14">
      <div className="relative w-full rounded-3xl overflow-hidden min-h-115">
        {/* Background */}
        <Image
          src="/home/ctaBg.svg"
          alt="CTA background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Spinning Ring */}
        <Image
          src="/home/ctaRing.png"
          alt=""
          aria-hidden="true"
          width={600}
          height={600}
          className="absolute left-1/2 top-3
             -translate-x-1/2  
             w-250 h-250 max-w-none
             object-contain 
             cta-ring-spin"
          priority
        />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 translate-y-1/4">
          <h2 className="text-white poppins text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Let’s Plan Your <br className="hidden sm:block" />
            Campaign
          </h2>

          <button className="mt-6 bg-white text-primary-500 font-semibold px-8 py-3 rounded-lg shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:bg-white/95 transition-colors">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
