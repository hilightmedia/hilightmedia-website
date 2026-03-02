"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Visibility() {
    const router = useRouter();
  return (
    <section className="w-full max-w-300 mx-auto px-6 py-24">
      <Image
        src="/about/vision1.png"
        alt="vision"
        width={600}
        height={400}
        className="w-full md:w-100 rounded-2xl"
      />
      <div className="max-w-180 w-full mx-auto mt-8 relative flex xl:block flex-col justify-center">
        <h2 className="text-center poppins text-[#F84D35]">Get the Visibility Your Brand Needs with Hi-Light Media.</h2>
        <button 
        onClick={() => router.push("/#contact")}
        className="w-fit mx-auto my-8 xl:absolute left-1/2 xl:-translate-x-1/2 bg-primary-500 text-white px-5 py-2 rounded-full hover:bg-primary-600 transition-colors whitespace-nowrap">
          Enquiry Now
        </button>
      </div>
      <div className="flex justify-end">
        <Image
        src="/about/vision1.png"
        alt="vision"
        width={600}
        height={400}
        className="w-full md:w-100 rounded-2xl"
      />
      </div>
    </section>
  );
}
