"use client";

import Image from "next/image";

const TopPicks = () => {
  return (
    <section id="our-works" className="w-full mx-auto max-w-7xl overflow-hidden flex flex-col py-15 px-6">
      <h3 className="bg-primary-500 mt-3 w-fit mx-auto px-12 py-2 text-lg text-white hover:bg-primary-600 transition-colors rounded-2xl">
        OUR WORK
      </h3>

      <h2 className="text-center my-10 poppins">Top Picks</h2>

      <div className="shadow-[0_18px_50px_rgba(0,0,0,0.08)] rounded-2xl w-full p-6 grid grid-cols-1 md:grid-cols-2 bg-[#F2F2F2] border-1 border-[#FFFFFF] gap-6">
        <Image
          src="/home/topPicks/radio.png"
          alt=""
          width={1200}
          height={800}
          className="w-full object-cover"
          priority
        />
        <div className="flex flex-col gap-4">
            <span className="px-4 py-1 rounded-full w-fit bg-primary-500 text-white text-xs font-semibold">
                2025
              </span>

              <h3 className="text-black/85">
                Radio Advertising
              </h3>

              <p className="text-black/70">
                We executed a high-impact outdoor advertising campaign for Temple
                City Hotel in Madurai, focusing on strategic billboard placements
                across prime city locations. The campaign was designed to capture
                the attention of visitors and create a sense of excitement and
                excitement.
              </p>

        </div>
      </div>

      {/* <div className="mt-2">
        <div className="bg-[#F2F2F2] rounded-3xl p-4 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
          <div className="bg-white rounded-3xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
            <div className="rounded-2xl overflow-hidden bg-black/5">
              <Image
                src="/home/top-picks.jpg"
                alt=""
                width={1200}
                height={800}
                className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover"
                priority
              />
            </div>

            <div className="px-1 sm:px-2">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold tracking-widest">
                2025
              </span>

              <h3 className="mt-4 text-3xl sm:text-4xl font-semibold text-black/85">
                Radio Advertising
              </h3>

              <p className="mt-2 text-primary-500 font-medium">Temple City</p>

              <p className="mt-5 text-sm sm:text-base text-black/60 leading-relaxed max-w-xl">
                We executed a high-impact outdoor advertising campaign for Temple
                City Hotel in Madurai, focusing on strategic billboard placements
                across prime city locations. The campaign was designed to capture
                attention from daily commuters, travelers, and local audiences,
                strengthening brand recall and footfall.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default TopPicks;
