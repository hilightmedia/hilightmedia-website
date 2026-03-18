import ServiceCard from "./serviceCard";

type GridCard = {
  title: string;
  image: string;
  cta?: string;
};

type ServiceGridProps = {
  cards: GridCard[];
};

export default function ServiceGrid({ cards }: ServiceGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <ServiceCard
          key={card.title}
          title={card.title}
          image={card.image}
          cta={card.cta}
        />
      ))}
    </div>
  );
}