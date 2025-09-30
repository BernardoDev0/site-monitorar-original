import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Factory, Zap, Waves, Hammer, Truck } from "lucide-react";

// Clientes reais da Monitorar (usando imagens da pasta /public/clientes/)
const clients = [
  { 
    name: "Petrobras", 
    logo: "/clientes/petrobras.png",
    sector: "Petroquímica"
  },
  { 
    name: "Ipiranga", 
    logo: "/clientes/ipiranga.png",
    sector: "Combustíveis"
  },
  { 
    name: "CSN", 
    logo: "/clientes/csn.png",
    sector: "Siderurgia"
  },
  { 
    name: "Transpetro", 
    logo: "/clientes/transpetro.png",
    sector: "Logística"
  },
  { 
    name: "FIRJAN", 
    logo: "/clientes/firjan.png",
    sector: "Industrial"
  },
  { 
    name: "Dräger", 
    logo: "/clientes/drager.png",
    sector: "Equipamentos"
  },
  { 
    name: "Ream", 
    logo: "/clientes/ream.png",
    sector: "Industrial"
  },
  { 
    name: "Ingersoll Rand", 
    logo: "/clientes/rand.png",
    sector: "Equipamentos"
  },
  { 
    name: "Iconic", 
    logo: "/clientes/iconic.png",
    sector: "Lubrificantes"
  },
  { 
    name: "Lubrizol", 
    logo: "/clientes/lubrizol.png",
    sector: "Químicos"
  },
  { 
    name: "Nitriflex", 
    logo: "/clientes/nitriflex.png",
    sector: "Borrachas"
  },
];

const sectors = [
  { 
    name: "Petroquímica", 
    icon: Factory, 
    description: "Refinarias e plantas químicas",
    count: 15
  },
  { 
    name: "Siderurgia", 
    icon: Building2, 
    description: "Usinas e metalúrgicas",
    count: 12
  },
  { 
    name: "Combustíveis", 
    icon: Zap, 
    description: "Distribuidoras e postos",
    count: 18
  },
  { 
    name: "Equipamentos", 
    icon: Hammer, 
    description: "Fabricantes de equipamentos",
    count: 20
  },
  { 
    name: "Químicos", 
    icon: Waves, 
    description: "Indústria química especializada",
    count: 14
  },
  { 
    name: "Logística", 
    icon: Truck, 
    description: "Transporte e armazenagem",
    count: 16
  },
];

export default function Clients() {
  return (
    <div className="min-h-screen py-20">
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slide-in-up {
            animation: slideInUp 0.5s ease-out forwards;
            opacity: 0;
          }
          
          /* Otimização para performance */
          .client-card {
            contain: layout style paint;
            will-change: transform;
          }
        `
      }} />
      
      <div className="container mx-auto px-4">


        {/* Client Logos - Super Moderno */}
        <div className="mb-20">
          <div className="text-center mb-16 relative">
            {/* Decoração de fundo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-30" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">Nossos Clientes</span>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Empresas que Confiam em Nosso Trabalho
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Parceiros de renome que escolheram a <span className="font-semibold text-primary">Monitorar</span> para suas necessidades de 
                <span className="font-semibold text-secondary"> segurança</span> e 
                <span className="font-semibold text-accent"> meio ambiente</span>
              </p>
              
              {/* Linha decorativa */}
              <div className="flex items-center justify-center mt-8">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-32" />
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mx-4" />
                <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent w-32" />
              </div>
            </div>
          </div>

          {/* Logos Grid - Super Moderno e Lindo */}
          <div className="relative">
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative animate-slide-in-up"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {/* Card Principal */}
                  <div className="client-card relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    {/* Gradiente de fundo animado */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 aspect-[4/3] p-6 flex flex-col items-center justify-center">
                      {/* Logo Container */}
                      <div className="w-full h-16 flex items-center justify-center mb-3 relative">
                        <img
                          src={client.logo}
                          alt={`Logo ${client.name}`}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-200 will-change-transform"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const nextElement = target.nextElementSibling as HTMLElement;
                            if (nextElement) nextElement.style.display = 'flex';
                          }}
                        />
                        {/* Fallback limpo */}
                        <div 
                          className="hidden w-full h-full items-center justify-center text-base font-bold bg-gradient-to-br from-primary to-secondary text-white rounded-xl shadow-md"
                          style={{ display: 'none' }}
                        >
                          <span className="text-center px-2">
                            {client.name}
                          </span>
                        </div>
                      </div>
                      
                      {/* Nome da empresa */}
                      <h3 className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors duration-200 text-center">
                        {client.name}
                      </h3>
                      
                      {/* Setor */}
                      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Badge variant="outline" className="text-xs">
                          {client.sector}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Indicador de hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decoração adicional */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-2xl" />
          </div>

        </div>

        {/* Stats - Movido para baixo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <Card className="card-service text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-secondary mb-2">95+</div>
              <div className="text-muted-foreground">Projetos Realizados</div>
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
              <div className="text-4xl font-bold text-secondary mb-2">11</div>
              <div className="text-muted-foreground">Grandes Clientes</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}