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

          <p className="text-lg text-muted-foreground max-w-4xl mb-10">
            Ajudamos empresas a cumprir regulamentos ambientais, reduzir impactos negativos e promover a
            sustentabilidade, com planos de ação e práticas corretas.
          </p>

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

          {/* Detalhamento Meio Ambiente */}
          <div className="mt-14 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Qualidade do Ar</h3>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Emissões fugitivas (LDAR)</h4>
                  <p>
                    O programa LDAR (Leak Detection and Repair) e SMART LDAR é um sistema focado na
                    detecção e reparo de vazamentos em indústrias que lidam com gases e líquidos, utilizando
                    tecnologias avançadas e equipamentos como câmeras (OGI) e analisadores (TVA, PHOCHECK)
                    para identificar vazamentos de compostos orgânicos voláteis (VOCs) e outros poluentes.
                    A detecção precoce é crucial para minimizar a emissão de poluentes.
                  </p>
                  <p>
                    Este processo também ajuda a evitar perdas financeiras, multas regulatórias e promove
                    maior eficiência da planta, redução de custos com matéria-prima e seguros de sinistro
                    industrial, resultando em operações mais sustentáveis e confiáveis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Monitoramento de PTS (Partículas Totais em Suspensão)</h4>
                  <p>
                    Medição da concentração de partículas sólidas e líquidas em suspensão no ar ambiente.
                    Essencial para a gestão da qualidade do ar, fiscalizado por INEA e demais órgãos.
                  </p>
                  <p>
                    Métodos de monitoramento: Gravimetria, Monitores contínuos de PTS, análise química e de
                    tamanho de partículas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">PROCON Fumaça Preta - INEA</h4>
                  <p>
                    Medição para monitorar e controlar a emissão de fumaça preta em veículos ciclo diesel,
                    exigida pelo CONAMA. A iniciativa é crucial para a melhoria da qualidade do ar e proteção
                    da saúde pública, além de educar e incentivar práticas que resultem em um ambiente mais
                    saudável.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Áreas Impactadas</h3>
              <h4 className="font-semibold text-foreground mb-2">Avaliação Geoambiental</h4>
              <p className="text-muted-foreground">
                Processo essencial para entender condições de solo e água: coleta e análise de amostras,
                identificação de contaminantes e compreensão das características geológicas. Fundamenta
                planos de mitigação, remediação e prevenção de danos. Também protege a saúde pública e
                viabiliza uso sustentável do solo e da água.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Avaliação de Ruído Extramuros</h3>
              <p className="text-muted-foreground mb-2">
                Monitoramento e análise do nível de ruído que ultrapassa os limites de uma instalação,
                avaliando impacto em áreas adjacentes e conformidade com normas.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Monitoramento contínuo ou pontual (sonômetros)</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Modelagem acústica (softwares)</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Análise estatística</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Licenciamento</h3>
              <p className="text-muted-foreground mb-4">
                Realizamos o licenciamento junto aos órgãos ambientais, avaliando a viabilidade ambiental de
                empreendimentos e atividades para controle preventivo, proteção do meio ambiente, garantia do
                desenvolvimento sustentável e cumprimento legal.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tipos de Licenças</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Licença Prévia (LP)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Licença de Instalação (LI)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Licença de Operação (LO)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Procedimento</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Requerimento e análise técnica</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Consulta pública e decisão</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Monitoramento e fiscalização</li>
                  </ul>
                </div>
              </div>
            </div>
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

          {/* Detalhamento Segurança do Trabalho */}
          <div className="mt-14 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Gestão de SMS</h3>
              <p className="text-muted-foreground mb-4">
                Fiscalização da documentação legal de segurança do trabalho para indústrias: essencial
                para proteger a saúde e integridade dos trabalhadores, prevenir acidentes e garantir
                conformidade.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Planejamento da fiscalização</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Identificação dos documentos necessários</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Visita técnica à instalação</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Verificação de conformidade e coerência</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Orientação, educação e relatórios</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Acompanhamento e reavaliação</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Higiene Ocupacional</h3>
              <p className="text-muted-foreground mb-4">
                Serviços para identificar, avaliar, controlar e gerenciar riscos à saúde e segurança no
                ambiente de trabalho.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Serviços</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Avaliação de riscos ambientais</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Medição de ruído; poeiras e fumos; gases e vapores; agentes biológicos</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Programas e procedimentos (PPHO), implementação e controle</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Treinamentos e capacitações</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Monitoramento e auditoria contínua</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Benefícios</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Redução de riscos e prevenção de doenças ocupacionais</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Conformidade legal</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Melhoria de produtividade e redução de custos</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Fortalecimento da cultura de segurança</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Avaliações Ocupacionais</h3>
              <p className="text-muted-foreground mb-4">
                Identificação de riscos, prevenção de doenças ocupacionais e acidentes, conformidade com a
                legislação e promoção de saúde e bem-estar.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tipos de Avaliações</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Riscos ambientais: físicos, químicos e biológicos</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Ergonômica e psicossocial</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Segurança e saúde ocupacional (exames e biomonitoramento)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Como são realizadas</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Coleta de dados e inspeções no local de trabalho</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Análise e avaliação de riscos</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5" />Recomendações, medidas de controle e monitoramento contínuo</li>
                  </ul>
                </div>
              </div>
            </div>
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