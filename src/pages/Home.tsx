import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Leaf, 
  Award, 
  Users, 
  TrendingUp, 
  Globe,
  Factory,
  Truck,
  Building2,
  Ship,
  Wrench,
  HardHat
} from "lucide-react";
import heroImage from "@/assets/hero-refinery.jpg";
import { ParallaxHero } from "@/components/ParallaxHero";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { AnimatedText } from "@/components/AnimatedText";
import { LogosCarousel } from "@/components/LogosCarousel";
import { OfferingsSection } from "@/components/OfferingsSection";

const stats = [
  { number: "15", label: "Anos de experiência", icon: Award },
  { number: "8000%", label: "Crescimento em faturamento", icon: TrendingUp },
  { number: "33ª", label: "Colocação ranking Exame", icon: Globe },
  { number: "100+", label: "Clientes atendidos", icon: Users },
];

const services = [
  {
    icon: Leaf,
    title: "Meio Ambiente",
    description: "Qualidade do ar, áreas impactadas, avaliação de ruído e licenciamento ambiental.",
    items: ["LDAR", "PTS", "Procon Fumaça Preta", "Áreas Impactadas", "Ruído Extramuros", "Licenciamento"]
  },
  {
    icon: Shield,
    title: "Segurança do Trabalho",
    description: "Gestão de SMS, HAZOP, higiene ocupacional, auditorias e treinamentos especializados.",
    items: ["Gestão de SMS", "HAZOP", "Higiene Ocupacional", "Auditorias", "Treinamentos"]
  },
  {
    icon: Award,
    title: "Representação Dräger",
    description: "Equipamentos e soluções de segurança e detecção de gases da marca Dräger.",
    items: ["Detectores de Gases", "Equipamentos de Proteção", "Calibração", "Manutenção"]
  }
];

const segments = [
  { icon: Factory, name: "Petroquímica" },
  { icon: Building2, name: "Indústria" },
  { icon: Ship, name: "Offshore" },
  { icon: Truck, name: "Termoelétrica" },
  { icon: Wrench, name: "Siderurgia" },
  { icon: HardHat, name: "Construção Civil" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxHero backgroundUrl={heroImage}>
        <AnimatedText
          as="h1"
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-success"
          text="Melhores soluções – Vamos trabalhar juntos?"
        />
        <Reveal delayMs={80}>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Mantenha sua empresa protegida: com serviços de segurança do trabalho, 
            saúde e meio ambiente alinhados com a estratégia da sua empresa.
          </p>
        </Reveal>
      </ParallaxHero>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Reveal key={index} delayMs={index * 80} className="text-center space-y-4">
                <div className="flex justify-center">
                  <stat.icon className="h-12 w-12 text-success" />
                </div>
                <div className="text-3xl md:text-4xl font-bold">
                  {/* Extrai número e sufixo/prefixo */}
                  {(() => {
                    const match = String(stat.number).match(/^(\D*)(\d+)(\D*)$/);
                    const prefix = match?.[1] ?? "";
                    const num = match?.[2] ?? String(stat.number).replace(/\D/g, "");
                    const suffix = match?.[3] ?? "";
                    return (
                      <>
                        {prefix}
                        <CountUp end={parseInt(num, 10) || 0} />
                        {suffix}
                      </>
                    );
                  })()}
                </div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em segurança, saúde e meio ambiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-service">
                <CardContent className="p-8">
                  <Reveal className="flex justify-center mb-6" delayMs={index * 70}>
                    <div className="p-4 bg-gradient-to-r from-secondary to-accent rounded-full">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </Reveal>
                  <Reveal delayMs={120 + index * 70}>
                    <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
                    <p className="text-muted-foreground text-center mb-6">{service.description}</p>
                  </Reveal>
                  <div className="space-y-2 mb-6">
                    {service.items.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2 mb-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button variant="outline" className="w-full">
                      Fale com um Consultor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Principais Segmentos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Atendemos diversos setores da indústria com expertise especializada
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {segments.map((segment, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex justify-center mb-4">
                  <segment.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold">{segment.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-success">
            Pronto para proteger sua empresa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a manter os mais altos padrões de segurança e sustentabilidade.
          </p>
          <Button className="btn-hero text-lg px-12 py-6">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      {/* Offerings Section */}
      <OfferingsSection />

      {/* Partners / Clients Logos */}
      <section className="pt-10 pb-14 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-primary text-center mb-8">Nossos parceiros</h2>
          <LogosCarousel
            logos={[
              { src: "/clientes/petrobras.png", alt: "Petrobras" },
              { src: "/clientes/transpetro.png", alt: "Transpetro" },
              { src: "/clientes/csn.png", alt: "CSN" },
              { src: "/clientes/ream.png", alt: "REAM" },
              { src: "/clientes/ipiranga.png", alt: "Ipiranga" },
              { src: "/clientes/lubrizol.png", alt: "Lubrizol" },
              { src: "/clientes/firjan.png", alt: "FIRJAN", className: "md:h-14 h-12" },
              { src: "/clientes/drager.png", alt: "Dräger" },
              { src: "/clientes/nitriflex.png", alt: "Nitriflex", className: "md:h-14 h-12" },
              { src: "/clientes/iconic.png", alt: "Iconic" },
              { src: "/clientes/rand.png", alt: "RAND" },
            ]}
            speed={28}
          />
        </div>
      </section>
    </div>
  );
}