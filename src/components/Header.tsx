import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Nossos Clientes", href: "/clientes" },
  { name: "Depoimentos", href: "/depoimentos" },
  { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { name: "Fale Conosco", href: "/contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-end space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>(21) 3881-1212</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>contato@monitorarconsultoria.com.br</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="relative flex items-center">
          {/* Logo */}
          <Logo variant="dark" logoSrc="/moni3.png" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-secondary ${
                  isActivePage(item.href) ? "text-secondary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA removido conforme solicitação */}

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-auto lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                      isActivePage(item.href)
                        ? "bg-secondary text-secondary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* CTA removido do menu mobile conforme solicitação */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};