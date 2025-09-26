import { Card, CardContent } from "@/components/ui/card";

// These would be the actual client logos - for now using placeholder
const clients = [
  { name: "Petrobras", logo: "/api/placeholder/150/80" },
  { name: "Vale", logo: "/api/placeholder/150/80" },
  { name: "CSN", logo: "/api/placeholder/150/80" },
  { name: "Gerdau", logo: "/api/placeholder/150/80" },
  { name: "Braskem", logo: "/api/placeholder/150/80" },
  { name: "Usiminas", logo: "/api/placeholder/150/80" },
  { name: "ArcelorMittal", logo: "/api/placeholder/150/80" },
  { name: "Ternium", logo: "/api/placeholder/150/80" },
  { name: "ThyssenKrupp", logo: "/api/placeholder/150/80" },
  { name: "Copelmi", logo: "/api/placeholder/150/80" },
  { name: "White Martins", logo: "/api/placeholder/150/80" },
  { name: "Air Liquide", logo: "/api/placeholder/150/80" },
];

export default function Clients() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Nossos Clientes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Orgulhamo-nos de trabalhar com as principais empresas do Brasil em diversos segmentos industriais
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="card-service text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Clientes Atendidos</div>
            </CardContent>
          </Card>
          <Card className="card-service text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-secondary mb-2">16</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </CardContent>
          </Card>
          <Card className="card-service text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </CardContent>
          </Card>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12 text-primary">
            Empresas que Confiam em Nosso Trabalho
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="card-service">
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="w-full h-16 bg-muted rounded flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">{client.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">
            Setores Atendidos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4">
              <div className="text-lg font-semibold text-primary mb-2">Petroquímica</div>
              <div className="text-sm text-muted-foreground">Refinarias e plantas químicas</div>
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-primary mb-2">Siderurgia</div>
              <div className="text-sm text-muted-foreground">Usinas e metalúrgicas</div>
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-primary mb-2">Offshore</div>
              <div className="text-sm text-muted-foreground">Plataformas marítimas</div>
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-primary mb-2">Energia</div>
              <div className="text-sm text-muted-foreground">Termoelétricas</div>
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-primary mb-2">Indústria</div>
              <div className="text-sm text-muted-foreground">Manufatura e produção</div>
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-primary mb-2">Construção</div>
              <div className="text-sm text-muted-foreground">Obras e infraestrutura</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}