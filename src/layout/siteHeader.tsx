"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type NavChild = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href?: string;
  children?: NavChild[];
};

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    {
      name: "Services",
      children: [
        { name: "Cinema", href: "/services/cinema" },
        { name: "Digital", href: "/services/digital" },
        { name: "Influencer", href: "/services/influencer" },
        { name: "Newspaper", href: "/services/newspaper" },
        { name: "Outdoor", href: "/services/outdoor" },
        { name: "Radio", href: "/services/radio" },
        { name: "Creative & Brand Strategy", href: "/services/creative-brand-strategy" },
      ]
    },
    { name: "Contact Us", href: "/#contact" },
  ];

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isParentActive = (item: NavItem) => {
    if (!item.children) return false;
    return item.children.some((child) => pathname.startsWith(child.href));
  };

  const handleNavigate = (href: string) => {
    setMobileOpen(false);
    setDesktopServicesOpen(false);
    router.push(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
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
              className="w-8 h-auto"
            />
            <span className="text-2xl manrope bg-[linear-gradient(271.89deg,#FAB80A_22.06%,#EA6535_116.84%)] bg-clip-text text-transparent">
              Hi-Light Media
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 poppins transition-colors ${isParentActive(item)
                          ? "text-black"
                          : "text-black/80 hover:text-black"
                        }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <div
                      className={`absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-black/5 bg-white p-3 shadow-xl transition-all duration-200 ${desktopServicesOpen
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 -translate-y-2"
                        }`}
                    >
                      <div className="grid gap-1">
                        {item.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => handleNavigate(child.href)}
                            className={`rounded-xl px-4 py-3 text-left text-sm transition-colors ${isActive(child.href)
                                ? "bg-black text-white"
                                : "text-black/80 hover:bg-black/5"
                              }`}
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => item.href && router.push(item.href)}
                  className={`flex items-center poppins gap-1 transition-colors ${isActive(item.href)
                      ? "text-black"
                      : "text-black/80 hover:text-black"
                    }`}
                >
                  {item.name}
                </button>
              );
            })}
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
        className={`fixed inset-0 z-50 transition ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-[#f4f4f4] shadow-xl transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-black/10">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavigate("/")}
            >
              <Image
                src="/favicon.svg"
                alt="Hilight Media"
                width={24}
                height={24}
                priority
                className="h-6 w-6"
              />
              <span className="text-lg font-medium bg-[linear-gradient(271.89deg,#FAB80A_22.06%,#EA6535_116.84%)] bg-clip-text text-transparent">
                Hi-Light Media
              </span>
            </div>

            <button
              onClick={() => setMobileOpen(false)}
              className="text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          <div className="px-4 py-6 text-[#4b5563] text-[15px]">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className={isParentActive(item) ? "text-black" : ""}>
                          {item.name}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${mobileServicesOpen
                            ? "grid-rows-[1fr] mt-3"
                            : "grid-rows-[0fr]"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="ml-4 flex flex-col gap-2">
                            {item.children.map((child) => (
                              <button
                                key={child.name}
                                onClick={() => handleNavigate(child.href)}
                                className={`text-left text-sm ${isActive(child.href)
                                    ? "text-black font-medium"
                                    : "text-[#5b6470]"
                                  }`}
                              >
                                {child.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.name}
                    onClick={() => item.href && handleNavigate(item.href)}
                    className={`text-left ${isActive(item.href) ? "text-black" : ""
                      }`}
                  >
                    {item.name}
                  </button>
                );
              })}

              <button
                onClick={() => handleNavigate("/#contact")}
                className="mt-1 w-fit rounded-md bg-primary-500 px-5 py-2 text-sm font-medium text-white"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}