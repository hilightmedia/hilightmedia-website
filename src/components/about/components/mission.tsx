"use client";

import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full py-24 bg-[#ff4b2e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/about/missionBg.png"
          alt="pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-300 w-full mx-auto px-6">
        <div className="relative w-fit overflow-visible mb-8">
            <Image
            src="/about/mission1.png"
            alt="mission"
            width={600}
            height={400}
            className="w-full md:w-100 rounded-2xl"
          />
          <h2 className="absolute bottom-0 md:text-end w-full m-4 md:translate-x-10 text-white poppins">
          Our Mission
        </h2>
        </div>
        <p className="text-white/90 text-xl leading-relaxed max-w-140 mx-auto mb-8">
            At Hi-Light Media, our mission is to deeply understand our clients’
            goals and business needs, identify the right target audiences, and
            deliver advertising solutions that connect brands with users at the
            right place and time. Through strategic planning, audience insight,
            and high-impact outdoor and integrated media, we transform client
            objectives into measurable real-world results.
          </p>
          <div className="w-full flex md:justify-end">
            <Image
            src="/about/mission2.png"
            alt="billboard"
            width={500}
            height={700}
            className="w-full md:w-100 rounded-2xl"
          />
          </div>
      </div>

     
    </section>
  );
}