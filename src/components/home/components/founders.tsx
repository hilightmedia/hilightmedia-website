import { FOUNDERS } from "@/src/lib/constants";
import Image from "next/image";

const Founders = () => {
  return (
    <section className="w-full mx-auto max-w-300 overflow-hidden flex flex-col py-15 px-6">
      <h3 className="bg-primary-500 mt-3 w-fit mx-auto px-12 py-2 text-lg text-white hover:bg-primary-600 transition-colors rounded-2xl">
        OUR TEAM
      </h3>

      <h2 className="text-center my-10 poppins">
        Built by People<br/> Who Understand Media
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5 rounded-2xl">
        {FOUNDERS.map((founder) => (
          <div className="relative w-full rounded-2xl overflow-hidden" key={founder.name}>
            <Image
              src={founder.image}
              alt="Founder 1"
              width={1000}
              height={1000}
              className="object-cover max-w-full max-h-full"
            />
            <div className="absolute top-5 left-5">
              <h4 className="text-white">{founder.name}</h4>
              <h6 className="text-white">{founder.role}</h6>
            </div>
            <div className="absolute bottom-15 left-1/2 -translate-x-1/2 w-full text-center">
              <h3 className="text-[#A8DBE2]">
                {founder.slogan}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
