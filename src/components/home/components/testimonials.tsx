"use client";

import Image from "next/image";

const testimonials = [
  {
    rating: 5,
    text: `“The team delivered a campaign that was not only creative but strategically aligned with our business goals. We saw measurable growth in brand visibility”`,
    name: "Name",
    role: "Business",
    avatar: "/testimonials/t1.png",
  },
  {
    rating: 5,
    text: `“From concept to execution, their attention to detail and understanding of our market made a real difference. A reliable partner for long-term brand building.”`,
    name: "Name",
    role: "Business",
    avatar: "/testimonials/t2.png",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1 text-primary-500">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  avatar,
  rating,
  text,
  name,
  role,
}: {
  avatar: string;
  rating: number;
  text: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6">
      <div className="w-36 h-36 rounded-2xl bg-black/5 overflow-hidden shrink-0">
        <Image
          src={"/founders/karthik.png"}
          alt=""
          width={220}
          height={220}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-md">
        <Stars count={rating} />
        <p className="mt-3 text-black/70 leading-relaxed">{text}</p>

        <div className="mt-4 flex items-center gap-3 text-sm">
          <span className="font-semibold text-black">{name}</span>
          <span className="text-black/40">{role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full mx-auto max-w-7xl overflow-hidden py-15 px-6">

      <h3 className="bg-primary-500 mt-3 w-fit mx-auto px-12 py-2 text-lg text-white hover:bg-primary-600 transition-colors rounded-2xl">
        {" "}
        Testimonials{" "}
      </h3>{" "}
      <h2 className="text-center my-10 noto-serif font-extralight text-primary-500">
        100 + Happy Customers
      </h2>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-start">
        {testimonials.map((t) => (
          <TestimonialCard key={t.text} {...t} />
        ))}
      </div>
    </section>
  );
}