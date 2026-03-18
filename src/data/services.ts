export type ServiceCard = {
  title: string;
  image: string;
  description?: string;
  bullets?: string[];
  cta?: string;
};

export type ServicePageData = {
  slug: string;
  name: string;
  layout: "featured" | "grid";
  cards: ServiceCard[];
};

export const servicesData: ServicePageData[] = [
  {
    slug: "cinema",
    name: "Cinema",
    layout: "featured",
    cards: [
      {
        title: "All Qube Theatres",
        image: "/services/cinema/qube.png",
        description:
          "We offer end-to-end PAN–Tamil Nadu cinema advertising solutions powered by Qube Cinema, enabling brands to connect with audiences across metros, cities, towns, and district-level theatres at unmatched scale and precision. By leveraging Qube’s extensive digital cinema network, we ensure your brand is showcased in a high-impact, distraction-free environment, where attention is guaranteed and recall is maximized.",
        bullets: [
          "Your Brand. Every Screen. Across Tamil Nadu.",
          "Big Screen Advertising That Reaches All of Tamil Nadu",
          "From Cities to Districts — Your Brand Everywhere",
          "Cinema Advertising at a Statewide Scale",
        ],
        cta: "Enquiry Now",
      },
    ],
  },
  {
    slug: "digital",
    name: "Digital",
    layout: "grid",
    cards: [
      { title: "Instagram", image: "/services/digital/instagram.png", cta: "Enquiry Now" },
      { title: "Facebook", image: "/services/digital/facebook.png", cta: "Enquiry Now" },
      { title: "Google (SEO)", image: "/services/digital/google-seo.png", cta: "Enquiry Now" },
      { title: "Web Development", image: "/services/digital/web-development.png", cta: "Enquiry Now" },
      { title: "Social Media Handling", image: "/services/digital/social-media-handling.png", cta: "Enquiry Now" },
      { title: "Linkedin", image: "/services/digital/linkedin.png", cta: "Enquiry Now" },
      { title: "X (Twitter)", image: "/services/digital/twitter.png", cta: "Enquiry Now" },
      { title: "Google My Business", image: "/services/digital/google-my-business.png", cta: "Enquiry Now" },
    ],
  },
  {
    slug: "influencer",
    name: "Influencer",
    layout: "grid",
    cards: [
      { title: "Education", image: "/services/influencer/education.png", cta: "Enquiry Now" },
      { title: "Healthcare", image: "/services/influencer/healthcare.png", cta: "Enquiry Now" },
      { title: "Finance", image: "/services/influencer/finance.png", cta: "Enquiry Now" },
      { title: "Retail", image: "/services/influencer/retail.png", cta: "Enquiry Now" },
      { title: "Manufacturing", image: "/services/influencer/manufacturing.png", cta: "Enquiry Now" },
      { title: "Real Estate", image: "/services/influencer/real-estate.png", cta: "Enquiry Now" },
    ],
  },
  {
    slug: "newspaper",
    name: "Newspaper",
    layout: "grid",
    cards: [
      { title: "Times Of India", image: "/services/newspaper/times-of-india.png", cta: "Enquiry Now" },
      { title: "The Hindu", image: "/services/newspaper/the-hindu.png", cta: "Enquiry Now" },
      { title: "Dinamalar", image: "/services/newspaper/dinamalar.png", cta: "Enquiry Now" },
      { title: "Daily Thanthi", image: "/services/newspaper/daily-thanthi.png", cta: "Enquiry Now" },
      { title: "Indian Express", image: "/services/newspaper/indian-express.png", cta: "Enquiry Now" },
    ],
  },
  {
    slug: "outdoor",
    name: "Outdoor",
    layout: "grid",
    cards: [
      { title: "LED Screen", image: "/services/outdoor/led-screen.png", cta: "Enquiry Now" },
      { title: "Hoardings", image: "/services/outdoor/hoardings.png", cta: "Enquiry Now" },
      { title: "Bus Shelter", image: "/services/outdoor/bus-shelter.png", cta: "Enquiry Now" },
      { title: "Displays (DOOH)", image: "/services/outdoor/displays-dooh.png", cta: "Enquiry Now" },
      { title: "Displays (DOOH Indoors)", image: "/services/outdoor/displays-dooh-indoors.png", cta: "Enquiry Now" },
      { title: "Pole Kiosk", image: "/services/outdoor/pole-kiosk.png", cta: "Enquiry Now" },
      { title: "Bus Back", image: "/services/outdoor/bus-back.png", cta: "Enquiry Now" },
      { title: "Auto Back", image: "/services/outdoor/auto-back.png", cta: "Enquiry Now" },
      { title: "Vans", image: "/services/outdoor/vans.png", cta: "Enquiry Now" },
      { title: "Bus Wrap", image: "/services/outdoor/bus-wrap.png", cta: "Enquiry Now" },
      { title: "Add on Wheels", image: "/services/outdoor/add-on-wheels.png", cta: "Enquiry Now" },
      { title: "LED Vehicles", image: "/services/outdoor/led-vehicles.png", cta: "Enquiry Now" },
    ],
  },
  {
    slug: "radio",
    name: "Radio",
    layout: "grid",
    cards: [
      { title: "Suriyan FM", image: "/services/radio/suriyan-fm.png", cta: "Enquiry Now" },
      { title: "AIR", image: "/services/radio/air.png", cta: "Enquiry Now" },
      { title: "Radio Mirchi", image: "/services/radio/radio-mirchi.png", cta: "Enquiry Now" },
      { title: "Radio City", image: "/services/radio/radio-city.png", cta: "Enquiry Now" },
      { title: "Radio Hello", image: "/services/radio/radio-hello.png", cta: "Enquiry Now" },
    ],
  },
  {
    slug: "creative-brand-strategy",
    name: "Creative & Brand Strategy",
    layout: "grid",
    cards: [
      {
        title: "Impressions Engaging Reach",
        image: "/services/creative-brand-strategy/impressions-engaging-reach.png",
        cta: "Enquiry Now",
      },
      {
        title: "Budget",
        image: "/services/creative-brand-strategy/budget.png",
        cta: "Enquiry Now",
      },
      {
        title: "Brand Focused",
        image: "/services/creative-brand-strategy/brand-focused.png",
        cta: "Enquiry Now",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((service) => service.slug === slug);
}