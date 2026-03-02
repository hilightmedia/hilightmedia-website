"use client";

import React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BoomBox,
  Clapperboard,
  Compass,
  Megaphone,
  Monitor,
  MonitorSmartphone,
  Newspaper,
} from "lucide-react";

const IconBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="p-[1.4px] rounded-2xl inline-block"
      style={{
        background: `
          linear-gradient(180deg, rgba(247,85,1,0.2) 0%, rgba(255,167,80,0.2) 100%),
          radial-gradient(63.87% 50% at 52.08% 100%, #FFFFFF 0%, rgba(255,255,255,0) 100%)
        `,
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center
                   shadow-[0_20px_60px_rgba(255,77,61,0.45)]
                   relative overflow-hidden"
      >
        <Image
          src="/home/glitter.png"
          alt=""
          width={100}
          height={100}
          className="absolute z-30 object-contain object-center"
        />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
        <div className="relative text-white">{children}</div>
      </div>
    </div>
  );
};

type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const icons: Record<
  "billboard" | "chart" | "video" | "newspaper" | "megaphone" | "mic" | "compass",
  LucideIcon
> = {
  billboard: Monitor,
  chart: MonitorSmartphone,
  video: Clapperboard,
  newspaper: Newspaper,
  megaphone: Megaphone,
  mic: BoomBox,
  compass: Compass,
};

const services: Service[] = [
  {
    title: "Outdoor Advertising",
    desc: "Large-format visibility in high-traffic locations for constant, high-impact exposure.",
    icon: icons.billboard,
  },
  {
    title: "Digital Advertising",
    desc: "Data-driven campaigns across platforms designed to maximize reach, performance, and ROI.",
    icon: icons.chart,
  },
  {
    title: "Cinema Advertising",
    desc: "High-impact storytelling on the biggest screens to captivate attention and drive brand recall.",
    icon: icons.video,
  },
  {
    title: "Newspaper Advertising",
    desc: "Credible print placements that strengthen brand presence and market authority.",
    icon: icons.newspaper,
  },
  {
    title: "Influencer Marketing",
    desc: "Authentic creator partnerships that build trust and connect brands with the right audiences.",
    icon: icons.megaphone,
  },
  {
    title: "Radio Advertising",
    desc: "Targeted audio campaigns that deliver frequency, recall, and local market reach effectively.",
    icon: icons.mic,
  },
  {
    title: "Creative & Brand Strategy",
    desc: "Strategic creative solutions tailored to your brand goals and audience behavior seamlessly.",
    icon: icons.compass,
  },
];

function ServiceCard({ title, desc, icon: Icon }: Service) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
      <IconBox>
        <Icon className="w-6 h-6" />
      </IconBox>

      <h4 className="mt-5 font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-black/60 leading-relaxed">{desc}</p>

      <button className="mt-4 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors">
        Learn more →
      </button>
    </div>
  );
}

export default function Services() {
  return (
    <section className="w-full mx-auto max-w-300 overflow-hidden flex flex-col py-15 px-6">
      <h3 className="bg-primary-500 mt-3 w-fit mx-auto px-12 py-2 text-lg text-white hover:bg-primary-600 transition-colors rounded-2xl">
        SERVICES
      </h3>

      <h2 className="text-center my-10 poppins">
        Media Services Built for Maximum Visibility
      </h2>

      <div className="bg-[#F2F2F2] rounded-2xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}

          <div className="bg-primary-500 rounded-2xl p-6 text-white shadow-[0_18px_50px_rgba(255,77,61,0.25)] flex flex-col justify-end">
            <div>
              <h4 className="text-white">360°</h4>
              <h6 className="mt-3">
                End-to-End Branding & Advertising Solutions for Complete Brand
                Growth
              </h6>
              <button className="mt-5 inline-flex items-center gap-2 bg-white text-primary-500 font-semibold px-5 py-2 rounded-full hover:bg-white/90 transition-colors">
                Enquiry Now <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}