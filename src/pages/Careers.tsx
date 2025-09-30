import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { 
  Users, 
  Trophy, 
  GraduationCap, 
  Heart, 
  Mail,
  Briefcase,
  Clock,
  MapPin
} from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "Crescimento Profissional",
    description: "Oportunidades reais de crescimento em uma empresa em expansão"
  },
  {
    icon: GraduationCap,
    title: "Capacitação Contínua",
    description: "Investimento em treinamentos e certificações especializadas"
  },
  {
    icon: Users,
    title: "Ambiente Colaborativo",
    description: "Equipe unida trabalhando em projetos desafiadores"
  },
  {
    icon: Heart,
    title: "Bem-estar",
    description: "Cuidamos da saúde e qualidade de vida dos nossos colaboradores"
  }
];

// Banner de equipe (substitui a imagem estática)
const bannerImages = [
  "/equipe/equipe1.JPG",
  "/equipe/equipe2.jpeg",
  "/equipe/equipe3.jpeg",
];

const openPositions = [
  {
    title: "Técnico(a) em Enfermagem do Trabalho",
    department: "Saúde",
    type: "CLT",
    location: "Ipojuca - PE",
    description: "Seleção de novos colaboradores.",
    requirements: [
      "02 anos de experiência comprovados em carteira",
      "Análise documental de saúde das contratadas (PCMSO)",
      "Verificar o ASO de cada prestador de serviço, emitindo parecer técnico quanto à conformidade",
      "Realizar arquivamento dos documentos de SMS das empresas prestadoras de serviço",
      "Conhecimento de normas de saúde",
      "Boa escrita e oral",
      "Conhecimento de pacote Office",
      "Experiência em ministrar treinamentos de saúde",
      "Conhecimento em inspeções de campo",
      "Habilitação B",
      "Proatividade",
      "Trabalho em equipe",
      "Conhecimento de gestão"
    ]
  },
  {
    title: "Técnico(a) de Segurança",
    department: "Segurança",
    type: "CLT",
    location: "Manaus - AM",
    description: "Seleção de novos colaboradores.",
    requirements: [
      "Conhecimento de normas de segurança",
      "Boa escrita e oral",
      "Conhecimento de pacote Office",
      "Experiência em ministrar treinamentos de segurança",
      "Conhecimento em inspeções de campo",
      "Conhecimento em higiene ocupacional",
      "Habilitação B",
      "Proatividade",
      "Saber trabalhar em equipe",
      "Conhecimento de gestão"
    ]
  }
];

export default function Careers() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const total = bannerImages.length;

  // Autoplay simples: avança a cada 4s
  useEffect(() => {
    if (!carouselApi) return;
    const id = setInterval(() => {
      carouselApi.scrollNext();
    }, 4000);
    return () => clearInterval(id);
  }, [carouselApi]);

  // Sincroniza índice atual e reinit
  useEffect(() => {
    if (!carouselApi) return;
    const update = (api: CarouselApi) => setCurrent(api.selectedScrollSnap());
    update(carouselApi);
    carouselApi.on("select", update as any);
    carouselApi.on("reInit", update as any);
    return () => {
      carouselApi.off("select", update);
      carouselApi.off("reInit", update);
    };
  }, [carouselApi]);
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Trabalhe Conosco</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Faça parte de uma equipe que está transformando o mercado de segurança e meio ambiente
          </p>
        </div>

        {/* Company Culture */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Por que Trabalhar na Monitorar?
          </h2>
          {/* Banner carrossel (troca automático) */}
          <div className="mb-10 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-md max-w-2xl w-full">
              <Carousel opts={{ loop: true }} setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {bannerImages.map((src, i) => (
                    <CarouselItem key={i} className="basis-full">
                      <img
                        src={src}
                        alt={`Equipe ${i + 1}`}
                        className="w-full h-[360px] md:h-[420px] object-fill"
                        loading="lazy"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white/80 hover:bg-white text-foreground" />
                <CarouselNext className="bg-white/80 hover:bg-white text-foreground" />
              </Carousel>
            </div>
          </div>
          {/* Indicadores (bolinhas) */}
          <div className="flex items-center justify-center gap-2 -mt-6 mb-8">
            {bannerImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => carouselApi?.scrollTo(i)}
                className={`${i === current ? "bg-[#4fc106]" : "bg-gray-300"} h-2.5 w-2.5 rounded-full transition-colors`}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-service text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-secondary to-accent rounded-full">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-primary">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Growth */}
        <section className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Crescimento Extraordinário
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos últimos 5 anos, crescemos 800% em faturamento e chegamos à 33ª colocação 
              no ranking da revista Exame. Esse crescimento cria oportunidades únicas para nossos colaboradores.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">800%</div>
              <div className="text-muted-foreground">Crescimento em 5 anos</div>
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
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Vagas Disponíveis</h2>
            <p className="text-lg text-muted-foreground">
              Confira nossas oportunidades atuais e candidate-se
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="card-service">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0">
                      Candidatar-se
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requisitos:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Como se Candidatar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Envie seu Currículo</h3>
                <p className="text-muted-foreground">
                  Envie seu currículo para nosso e-mail de recrutamento
                </p>
              </CardContent>
            </Card>
            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Análise de Perfil</h3>
                <p className="text-muted-foreground">
                  Nosso RH analisará seu perfil e experiência
                </p>
              </CardContent>
            </Card>
            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Processo Seletivo</h3>
                <p className="text-muted-foreground">
                  Entrevistas e avaliações específicas da área
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <Mail className="h-12 w-12 mx-auto mb-6 text-success" />
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg mb-6 opacity-90">
            Não encontrou a vaga ideal? Envie seu currículo mesmo assim! 
            Estamos sempre em busca de talentos.
          </p>
          <div className="text-xl font-semibold mb-4">
            recrutamento@monitorarconsultoria.com.br
          </div>
          <Button variant="secondary" className="px-8 py-3 text-lg font-semibold">
            Enviar Currículo
          </Button>
        </section>
      </div>
    </div>
  );
}