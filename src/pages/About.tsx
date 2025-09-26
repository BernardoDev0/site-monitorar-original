import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Eye, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Nossa Missão",
    description: "Cuidar de vidas e garantir um futuro sustentável para as famílias do nosso país."
  },
  {
    icon: Eye,
    title: "Nossa Visão",
    description: "Ser a empresa mais reconhecida nas áreas de meio ambiente e segurança do trabalho do país."
  },
  {
    icon: ThumbsUp,
    title: "Nossos Valores",
    description: "Oportunidades, Trabalho em equipe, Senso de dono, Respeito, Família."
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
                Buscamos maximizar a colaboração e a captura de sinergias entre meio ambiente e segurança do trabalho, assegurando a visão integrada em nossas ações e decisões, gerando valor para nossos clientes, com foco em cultura de segurança e gestão de recursos. Valorizamos e reconhecemos, de forma diferenciada, pessoas e equipes com alto desempenho.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Cultivamos a superação de desafios e buscamos incessantemente a geração e implementação de soluções tecnológicas e de negócios inovadores que contribuam para o alcance dos objetivos estratégicos da Monitorar.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Respeitando a vida em todas as suas formas, com excelência nas questões de saúde, segurança e meio ambiente. Fazemos das pessoas e de seu desenvolvimento um diferencial de desempenho da Monitorar.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nós nos orgulhamos de pertencer a uma empresa brasileira que foi construída para fazer a diferença onde quer que atue, por suas conquistas e por sua capacidade de vencer desafios.
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
              <div className="text-4xl font-bold text-secondary mb-2">16</div>
              <div className="text-muted-foreground">Anos de experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">800%</div>
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