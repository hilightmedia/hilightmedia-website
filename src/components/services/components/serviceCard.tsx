import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  image: string;
  cta?: string;
};

export default function ServiceCard({
  title,
  image,
  cta = "Enquiry Now",
}: ServiceCardProps) {
  return (
    <article className="rounded-2xl shadow-sm shadow-[#E9E7E7] border border-[#E9E7E7] bg-[#F8F8F4] p-3">
      <div className="overflow-hidden rounded-2xl bg-white">
        <Image
          src={image}
          alt={title}
          width={920}
          height={612}
          className="w-full object-cover m-auto"
        />
      </div>

      <div className="pt-3">
        <h2 className="text-xl font-semibold text-black/80">{title}</h2>

        <Link
          href="/#contact"
          className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#EA6535] px-5 py-3 text-sm text-white shadow hover:opacity-90"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}