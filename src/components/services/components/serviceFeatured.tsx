import Image from "next/image";
import Link from "next/link";

type FeaturedCard = {
  title: string;
  image: string;
  description?: string;
  bullets?: string[];
  cta?: string;
};

type ServiceFeaturedProps = {
  card: FeaturedCard;
};

export default function ServiceFeatured({
  card,
}: ServiceFeaturedProps) {
  return (
    <div className="rounded-2xl shadow-xs shadow-[#E9E7E7] bg-[#F8F8F4] border border-[#E9E7E7] p-5 md:p-6">
      <div className="grid items-start gap-8 xl:grid-cols-[1.6fr_1fr]">
        <div className="relative overflow-hidden rounded-2xl bg-white">
          <Image
            src={card.image}
            alt={card.title}
            width={1200}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-semibold text-black/80 poppins">
            {card.title}
          </h1>

          {card.description && (
            <p className="mt-3 text-black/60 leading-8 text-base poppins">{card.description}</p>
          )}

          {card.bullets && (
            <ul className="mt-5 list-disc space-y-2 pl-5 text-black/65 text-base poppins">
              {card.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <Link
            href="/#contact"
            className="mt-6 inline-flex w-fit rounded-md bg-[#EA6535] px-6 py-3 text-white shadow hover:opacity-90"
          >
            {card.cta || "Enquiry Now"}
          </Link>
        </div>
      </div>
    </div>
  );
}