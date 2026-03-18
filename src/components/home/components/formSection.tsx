"use client";

import { services } from "@/src/lib/constants";
import Image from "next/image";

export default function FormSection() {

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        
        {/* LEFT SERVICES GRID */}
        <div className="grid grid-cols-7">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative ${service.color} flex flex-col justify-between hover:scale-[1.03] hover:shadow-2xl perspective-distant hover:z-10 hover:rounded-md overflow-hidden`}
            >
              {/* Vertical Title */}
              <div className="flex-1 flex items-center justify-center min-h-[275px]">
                <p className="text-white text-lg lg:text-xl font-medium -rotate-90 whitespace-nowrap">
                  {service.title}
                </p>
              </div>

              {/* Bottom Image */}
              <div className="relative w-full h-44">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-fill"
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT FORM */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Let’s level up your <br /> brand, together
          </h2>

          <p className="text-gray-500 mb-8">
            You can reach us anytime via yourmail
          </p>

          <form className="space-y-5">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="IN  +91 9087654321"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                How can we help?
              </label>
              <textarea
                placeholder="Tell us a little about the project..."
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff4b2e] hover:bg-[#e84328] text-white font-medium py-4 rounded-md transition"
            >
              Get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}