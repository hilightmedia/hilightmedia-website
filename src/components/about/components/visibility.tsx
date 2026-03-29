"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Visibility() {
  const router = useRouter();
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <Image
        src="/about/vision1.png"
        alt="vision"
        width={600}
        height={400}
        className="w-full md:w-100 rounded-2xl"
      />
      <div className="md:mx-auto my-10 max-w-180 w-full flex flex-col justify-center">
        <h2 className=" text-[#F84D35] poppins mb-3">
          Get the Visibility Your Brand Needs with Hi-Light Media.
        </h2>
        <button
          className="bg-primary-500 text-white px-5 py-2 rounded-full hover:bg-primary-600 transition-colors max-w-[140px]"
          onClick={() => router.push("/#contact")}>
          Enquiry Now
        </button>
      </div>

      <Image
        src="/about/vision1.png"
        alt="vision"
        width={600}
        height={400}
        className="w-full md:w-100 rounded-2xl ml-auto"
      />

    </section>
  );
}
