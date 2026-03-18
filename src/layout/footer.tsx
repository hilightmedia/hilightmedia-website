"use client";

import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter()
  return (
    <footer className="bg-[#1F1817] text-white">
   

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
           {/* CTA Banner */}
      <div className="bg-linear-to-r from-[#FF6B4A] to-[#FFA366] py-8 px-6 mb-12 rounded-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h4 className="text-white max-w-125">
            We help brands stand out in high-impact urban spaces.
          </h4>
          <button 
          className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
          onClick={()=>router.push('/#contact')}
          >
            Start Your Campaign
          </button>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/favicon.svg"
                alt="Hi-Light Media logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl manrope bg-[linear-gradient(271.89deg,#FAB80A_22.06%,#EA6535_116.84%)] bg-clip-text text-transparent">
                Hi-Light Media
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              HiLight Media is a full-service advertising agency specializing in outdoor, print, digital, and integrated media solutions. We help brands achieve maximum visibility through strategic placements, creative execution, and data-driven planning.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#FFA366] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFA366] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#our-works" className="hover:text-[#FFA366] transition-colors">
                  Our Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4"/>
                <a href="mailto:hilightmedia.mdu@gmail.com" className="hover:text-[#FFA366] transition-colors">
                  hilightmedia.mdu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4"/>
                <a href="tel:+918056383377" className="hover:text-[#FFA366] transition-colors">
                  +91 8056383377
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4"/>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA366] transition-colors">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="h-4 w-4"/>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA366] transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-white font-semibold mb-4">SUBSCRIBE TO NEWSLETTER</h5>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFA366]"
              />
              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#FF6B4A] to-[#FFA366] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;