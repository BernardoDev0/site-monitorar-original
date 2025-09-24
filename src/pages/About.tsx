import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Eye, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Missão",
    description: "Melhorar o ar do mundo."
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser a melhor empresa na área de qualidade do ar, emissões atmosféricas e meteorologia do mundo em 5 anos."
  },
  {
    icon: ThumbsUp,
    title: "Valores",
    description: "Foco no cliente, Senso de dono, Inovação, Paixão pelo que fazemos, Produtividade."
  }
];

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">A Monitorar Consultoria</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especialistas em engenharia ambiental, segurança do trabalho e saúde ocupacional
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8">
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                A <strong>Monitorar Consultoria</strong> é uma empresa especializada em soluções 
                ambientais e de segurança do trabalho, com 15 anos de sólida experiência no mercado. 
                Nossa trajetória é marcada por um crescimento extraordinário, com um aumento de 8.000% 
                em faturamento nos últimos 5 anos, o que nos levou à 33ª colocação no ranking da 
                revista Exame.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Atendemos mais de 100 clientes em diversos segmentos industriais, oferecendo 
                serviços especializados em <strong>qualidade do ar</strong>, <strong>áreas impactadas</strong>, 
                <strong>avaliação de ruído</strong>, <strong>licenciamento ambiental</strong>, 
                <strong>gestão de SMS</strong>, <strong>HAZOP</strong>, <strong>higiene ocupacional</strong> 
                e <strong>treinamentos</strong>.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Nossa equipe técnica altamente qualificada trabalha com metodologias reconhecidas 
                internacionalmente, garantindo que nossos clientes mantenham os mais altos padrões 
                de segurança e sustentabilidade em suas operações.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Como representantes oficiais da <strong>Dräger</strong> no Brasil, oferecemos 
                também equipamentos de última geração para detecção de gases e proteção individual, 
                complementando nossa oferta de serviços com as melhores soluções tecnológicas 
                disponíveis no mercado.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Nossos Princípios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-service text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-secondary to-accent rounded-full">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Nossos Resultados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15</div>
              <div className="text-muted-foreground">Anos de experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">8.000%</div>
              <div className="text-muted-foreground">Crescimento em faturamento</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">33ª</div>
              <div className="text-muted-foreground">Posição ranking Exame</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Clientes atendidos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}