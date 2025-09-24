import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/AnimatedText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Award, CheckCircle } from "lucide-react";

const environmentalServices = [
  {
    title: "Qualidade do Ar",
    description: "Monitoramento e avaliação da qualidade do ar em ambientes industriais e urbanos.",
    items: ["LDAR (Leak Detection and Repair)", "PTS (Partículas Totais em Suspensão)", "Procon Fumaça Preta"]
  },
  {
    title: "Áreas Impactadas",
    description: "Investigação e remediação de áreas contaminadas conforme legislação ambiental.",
    items: ["Investigação Confirmatória", "Investigação Detalhada", "Análise de Risco", "Plano de Remediação"]
  },
  {
    title: "Avaliação de Ruído Extramuros",
    description: "Medição e análise de ruído para atendimento às normas ambientais.",
    items: ["Medições Acústicas", "Relatórios Técnicos", "Adequação às Normas", "Monitoramento Contínuo"]
  },
  {
    title: "Licenciamento Ambiental",
    description: "Assessoria completa para obtenção de licenças ambientais.",
    items: ["Licença Prévia", "Licença de Instalação", "Licença de Operação", "Renovações"]
  }
];

const safetyServices = [
  {
    title: "Gestão de SMS",
    description: "Implantação e gestão de sistemas de Segurança, Meio Ambiente e Saúde.",
    items: ["Política SMS", "Procedimentos", "Indicadores", "Auditoria Interna"]
  },
  {
    title: "HAZOP",
    description: "Análise de Operabilidade e Perigos (Hazard and Operability Study).",
    items: ["Identificação de Perigos", "Análise de Riscos", "Relatório HAZOP", "Plano de Ação"]
  },
  {
    title: "Higiene Ocupacional",
    description: "Avaliação e controle de agentes ambientais nos locais de trabalho.",
    items: ["PPRA", "PCMSO", "LTCAT", "Avaliação de Agentes"]
  },
  {
    title: "Auditorias",
    description: "Auditorias em sistemas de gestão e conformidade legal.",
    items: ["Auditoria Legal", "Sistema de Gestão", "Conformidade", "Relatórios"]
  },
  {
    title: "Treinamentos",
    description: "Capacitação técnica especializada para equipes operacionais.",
    items: ["NR-33", "NR-35", "Espaços Confinados", "Trabalho em Altura"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText as="h1" className="section-title" text="Nossos Serviços" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em segurança do trabalho, saúde ocupacional e meio ambiente
          </p>
        </div>

        {/* Environmental Services */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-full mr-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Meio Ambiente</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environmentalServices.map((service, index) => (
              <Card key={index} className="card-service">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Fale com um Consultor
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Services */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-full mr-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Segurança do Trabalho</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyServices.map((service, index) => (
              <Card key={index} className="card-service">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Fale com um Consultor
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Drager Representation */}
        <section className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-full mr-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Representação Dräger</h2>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Como representantes oficiais da Dräger no Brasil, oferecemos equipamentos 
              de última geração para detecção de gases e proteção individual.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Badge variant="outline" className="py-2 px-4">Detectores de Gases</Badge>
              <Badge variant="outline" className="py-2 px-4">Equipamentos de Proteção</Badge>
              <Badge variant="outline" className="py-2 px-4">Calibração</Badge>
              <Badge variant="outline" className="py-2 px-4">Manutenção</Badge>
            </div>

            <Button className="btn-hero">
              Conheça os Equipamentos Dräger
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}