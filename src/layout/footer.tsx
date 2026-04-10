"use client";

import { Facebook, Instagram, Mail, Phone, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { API_URL } from "../lib/constants";

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!email.trim() || subscribed) return;

    try {
      setLoading(true);
      setApiError("");

      const res = await fetch(API_URL + "/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setApiError(data?.message || "Something went wrong");
        return;
      }

      setSubscribed(true);
      setEmail("");
    } catch {
      setApiError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#1F1817] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-linear-to-r from-[#FF6B4A] to-[#FFA366] py-8 px-6 mb-12 rounded-2xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <h4 className="text-white max-w-125">
              We help brands stand out in high-impact urban spaces.
            </h4>
            <button
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
              onClick={() => router.push("/#contact")}
            >
              Start Your Campaign
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#FFA366] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services/cinema" className="hover:text-[#FFA366] transition-colors">
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

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:hilightmedia.mdu@gmail.com"
                  className="hover:text-[#FFA366] transition-colors"
                >
                  hilightmedia.mdu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+918056383377"
                  className="hover:text-[#FFA366] transition-colors"
                >
                  +91 8056383377
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://www.instagram.com/hilight_media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA366] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="h-4 w-4" />
                <a
                  href="https://www.facebook.com/profile.php?id=100087118800188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA366] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">SUBSCRIBE TO NEWSLETTER</h5>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || subscribed}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFA366] disabled:opacity-70"
              />

              {apiError && (
                <p className="text-sm text-red-300">{apiError}</p>
              )}

              {subscribed ? (
                <div className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 rounded-full bg-white/20 p-1.5">
                      <CheckCircle2 className="h-5 w-5 text-green-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        You’re subscribed
                      </p>
                      <p className="mt-1 text-xs text-gray-200">
                        Thanks for joining our newsletter.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-[#FF6B4A] to-[#FFA366] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;