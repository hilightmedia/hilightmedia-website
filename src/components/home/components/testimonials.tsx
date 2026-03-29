"use client";

import Image from "next/image";


const testimonials = [
  {
    text: "We’ve worked with multiple vendors before, but this team was one of the most consistent in delivery.",
    name: "Zebronics",
    logo: "/home/brands/zebronics.png",
  },
  {
    text: "They were very transparent about locations, pricing, and timelines.",
    name: "Parryware",
    logo: "/home/brands/parryware.png",
  },
  {
    text: "The campaign was executed as discussed, and the communication throughout was clear.",
    name: "Lenovo",
    logo: "/home/brands/lenovo.png",
  },
  {
    text: "We saw good visibility for our brand in key areas.",
    name: "Titan Eyeplus",
    logo: "/home/brands/titan.png",
  },
  {
    text: "Their understanding of local audience movement helped us choose better advertising spots.",
    name: "Zomato",
    logo: "/home/brands/zomato.png",
  },
  {
    text: "Simple process, no complications, and the team was easy to work with.",
    name: "Unimoni",
    logo: "/home/brands/unimoni.png",
  },
  {
    text: "They delivered what was promised, which is honestly rare in this space.",
    name: "DCS Bank",
    logo: "/home/brands/dcb.png",
  },
  {
    text: "We liked how they kept us updated during the campaign.",
    name: "Malabar Gold & Diamonds",
    logo: "/home/brands/malabar.png",
  },
  {
    text: "A dependable partner for outdoor advertising requirements.",
    name: "Dr Agarwal Hospitals",
    logo: "/home/brands/agarwal.png",
  },
  {
    text: "The campaign helped us improve our visibility in the city.",
    name: "iPlanet",
    logo: "/home/brands/iplanet.png",
  },
  {
    text: "They were open to feedback and adjusted things when needed.",
    name: "Apollo Education",
    logo: "/home/brands/apollo.png",
  },
  {
    text: "They suggested locations that actually made sense for our target audience.",
    name: "The TVS School",
    logo: "/home/brands/tvs.png",
  },
  {
    text: "No over-promising—just honest work and proper execution.",
    name: "Skoda",
    logo: "/home/brands/skoda.png",
  },
  {
    text: "A reliable choice if you’re looking for outdoor advertising locally.",
    name: "Honda",
    logo: "/home/brands/honda.png",
  },
  {
    text: "We would consider working with them again.",
    name: "Spectrum Neet Academy",
    logo: "/home/brands/spectrum.png",
  },
  {
    text: "The LED screen advertising gave us good exposure.",
    name: "Anuj",
    logo: "/home/brands/anuj.png",
  },
  {
    text: "Their outdoor advertising helped increase our local presence.",
    name: "Zaara Dental",
    logo: "/home/brands/zaara.png",
  },
  {
    text: "Clear communication and timely execution made the process easy.",
    name: "Supreme Mobiles",
    logo: "/home/brands/supreme.png",
  },
  {
    text: "They understood our requirements and delivered accordingly.",
    name: "Zam Zam Sweets",
    logo: "/home/brands/Zam_Zam.png",
  },
  {
    text: "The team ensured seamless execution and strong brand recall.",
    name: "Vijay TV",
    logo: "/home/brands/vijaytv.png",
  },
  {
    text: "Professional approach and consistent performance.",
    name: "Zee Tamil",
    logo: "/home/brands/zeetamil.png",
  },
];

const marqueeItems = [...testimonials, ...testimonials];


function Stars() {
  return (
    <div className="flex items-center gap-1 text-primary-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ text, name, logo }: any) {
  return (
    <div className="shrink-0 w-80 md:w-112.5 flex flex-col md:flex-row  gap-5 p-5 rounded-2xl bg-white">

      {/* Logo */}
      <div className="w-40 h-20 flex items-center justify-center rounded-xl shrink-0">
        <Image
          src={logo}
          alt={name}
          width={120}
          height={60}
          className="object-contain w-full h-full aspect-square"
        />
      </div>

      {/* Content */}
      <div>
        <Stars />
        <p className="mt-2 text-sm text-black/70 leading-relaxed line-clamp-4">
          {text}
        </p>
        <p className="mt-3 font-semibold text-black text-sm">
          {name}
        </p>
      </div>
    </div>
  );
}


export default function Testimonials() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 overflow-hidden relative fade-section">

      {/* Heading */}
      <h3 className="bg-primary-500 w-fit mx-auto px-12 py-2 text-lg text-white rounded-2xl">
        Testimonials
      </h3>

      <h2 className="text-center my-10 text-primary-500">
        100+ Happy Customers
      </h2>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex gap-10 w-max marquee">
          {marqueeItems.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}