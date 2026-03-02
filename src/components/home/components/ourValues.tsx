"use client";

import { valueSectionCards } from "@/src/lib/constants";

export default function ValuesSection() {
 

  return (
    <section className="w-full bg-[#f3f3f3] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-6xl font-bold text-[#333] mb-6 leading-tight">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            We believe in creating advertising that delivers real impact, not
            just visibility.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {valueSectionCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`rounded-3xl p-6 flex flex-col justify-between min-h-85 ${
                  card.highlight
                    ? "bg-[#ff4b2e] text-white"
                    : "bg-[#e9e9e9] text-[#333]"
                }`}
              >
                <div>
                  <Icon
                    size={36}
                    className={card.highlight ? "text-white" : "text-[#333]"}
                  />
                  <p
                    className={`mt-6 text-sm leading-relaxed ${
                      card.highlight ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {card.text}
                  </p>
                </div>

                <div className="mt-6">
                  <div
                    className={`h-0.5 w-full mb-3 ${
                      card.highlight ? "bg-white/60" : "bg-[#ff4b2e]"
                    }`}
                  />
                  <h6 className="font-semibold">{card.title}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}