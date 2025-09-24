import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
const imgIQAR = "/pessoas/Picture12.jpg";
const imgLDAR = "/pessoas/Picture13.jpg";
const imgEM = "/pessoas/Picture14.jpg";

const items = [
  {
    title: "IQAR",
    image: imgIQAR,
    description:
      "Inventário de Qualidade do Ar e emissões atmosféricas com métodos reconhecidos.",
    link: "#",
  },
  {
    title: "LDAR",
    image: imgLDAR,
    description:
      "Programa de detecção e reparo de vazamentos para redução de emissões fugitivas.",
    link: "#",
  },
  {
    title: "Emissões",
    image: imgEM,
    description:
      "Determinação de emissão de poluentes por amostragens isocinéticas ou métodos contínuos.",
    link: "#",
  },
];

export function OfferingsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">O que oferecemos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 80}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img src={item.image} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                  <a href={item.link} className="btn-hero inline-block px-6 py-3">Saiba mais</a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


