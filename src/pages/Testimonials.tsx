import { Card, CardContent } from "@/components/ui/card";
import { AnimatedText } from "@/components/AnimatedText";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Washington Conceição",
    position: "CEO | Sócio Fundador",
    company: "ECOLOGIKA Gestão de Resíduos",
    rating: 5,
    content: "A MONITORAR CONSULTORIA tem sido uma excelente parceira para a ECOLOGIKA. Os serviços técnicos solicitados são do mais alto comprometimento e qualidade. Uma das qualidades que eu mais admiro é o serviço personalizado que executa.",
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "Bruno Rosa",
    position: "Eng. Ambiental e Segurança do Trabalho",
    company: "DRATEC Engenharia",
    rating: 5,
    content: "Equipe da Monitorar sempre nos atende com excelência, realizando um ótimo trabalho. Empresa muito especializada nos serviços de monitoramento ambiental.",
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Amanda Ouverney",
    position: "Eng. Ambiental e Segurança do Trabalho",
    company: "Biogênese Engenharia",
    rating: 5,
    content: "Qualidade e compromisso são dois valores fundamentais que fazem a parceria com a MONITORAR CONSULTORIA ser de tanto sucesso. Juntos, conseguimos elevar os padrões de segurança de processos industriais, entregando valor aos nossos clientes.",
    avatar: "/api/placeholder/60/60"
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText as="h1" className="section-title" text="Depoimentos" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes falam sobre nossos serviços e resultados alcançados
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-service relative">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-secondary/20" />
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <RatingStars rating={testimonial.rating} />
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm font-medium text-secondary">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Resultados que Falam por si
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-success mb-2">95%</div>
              <div className="opacity-90">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">100+</div>
              <div className="opacity-90">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">16</div>
              <div className="opacity-90">Anos de Mercado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">800%</div>
              <div className="opacity-90">Crescimento</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Quer ser nosso próximo caso de sucesso?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a alcançar os mesmos resultados excepcionais.
          </p>
          <div className="space-x-4">
            <button className="btn-hero bg-[#3f9905] hover:bg-[#368a05] text-white">
              Fale com um Consultor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}