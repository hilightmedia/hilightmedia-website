import { notFound } from "next/navigation";
import { getServiceBySlug, servicesData } from "@/src/data/services";
import ServiceFeatured from "@/src/components/services/components/serviceFeatured";
import ServiceGrid from "@/src/components/services/components/serviceGrid";
import Layout from "@/src/layout";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-sm text-orange-500 font-semibold tracking-wide uppercase">
            Our Services
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {service.name}
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4 rounded-full" />
          <p className="text-gray-500 mt-3 max-w-xl text-sm">
  Explore our {service.name.toLowerCase()} solutions designed to help your brand grow effectively.
</p>
        </div>
        {service.layout === "featured" ? (
          <ServiceFeatured card={service.cards[0]} />
        ) : (
          <ServiceGrid cards={service.cards} />
        )}
      </section>
    </Layout>
  );
}