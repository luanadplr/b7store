import { HomeBadge } from "@/components/home/badge";
import { Banners } from "@/components/home/banners";
import { data } from "@/data";
import { Badge } from "@/types/Badge";

export default function Page() {
  const badges: Badge[] = [
    {
      image: "/assets/ui/truck-line.png",
      text: "Frete grátis",
      description: "Para todo o Nordeste.",
    },
    {
      image: "/assets/ui/discount-percent-line.png",
      text: "Muitas ofertas",
      description: "Ofertas imbatíveis.",
    },
    {
      image: "/assets/ui/arrow-left-right-line.png",
      text: "Troca fácil",
      description: "No período de 30 dias.",
    },
  ];

  return (
    <div>
      <Banners list={data.banners} />
      <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
        {badges.map((badge, index) => (
          <HomeBadge
            key={index}
            image={badge.image}
            text={badge.text}
            description={badge.description}
          />
        ))}
      </div>
    </div>
  );
}
