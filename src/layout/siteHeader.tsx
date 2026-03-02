"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";




export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/"},
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#ffffff] border-b border-black/5">
        <div className="max-w-300 mx-auto flex items-center justify-between px-6 py-3">
          <div
            className="flex items-center cursor-pointer gap-4"
            onClick={() => router.push("/")}
          >
            <Image
              src="/favicon.svg"
              alt="Hilight Media"
              width={180}
              height={50}
              priority
              className="w-8  h-auto"
            />
            <span className="text-2xl manrope bg-[linear-gradient(271.89deg,#FAB80A_22.06%,#EA6535_116.84%)] bg-clip-text text-transparent">Hi-Light Media</span>
          </div>

          <nav className="hidden md:flex h-full items-center gap-10 font-medium text-[#5B6736]">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => router.push(item.href)}
                className={`flex items-center poppins gap-1 transition-colors ${
                  isActive(item.href)
                    ? "text-black"
                    : "text-black/80 hover:text-black"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex">
            <button
              onClick={() => router.push("/#contact")}
              className="bg-primary-500 poppins hover:bg-primary-600 text-white px-8 py-2 rounded-full font-medium transition-colors"
            >
              Enquire Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle Menu"
              onClick={() => setMobileOpen(true)}
              className="text-[#5B6736]"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute top-0 left-0 h-full w-65 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
            <Image
              src="/favicon.svg"
              alt="Hilight Media"
              width={180}
              height={50}
              priority
              className="h-7 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-[#5B6736]"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-5 px-5 py-6 text-[#5B6736] font-medium">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setMobileOpen(false);
                  router.push(item.href);
                }}
                className="flex items-center gap-2 text-left"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => {
                setMobileOpen(false);
                router.push("/#contact");
              }}
              className="text-primary-500 hover:text-primary-600 transition-colors underline"
            >
             Enquire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}