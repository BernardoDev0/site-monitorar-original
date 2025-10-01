import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";

const navigationItems = [
  { name: "Home", href: "/" },
  { 
    name: "Sobre", 
    href: "/sobre",
    dropdown: [
      { name: "Nossa História", href: "/sobre/historia" },
      { name: "Missão e Valores", href: "/sobre/missao" },
      { name: "Equipe", href: "/sobre/equipe" }
    ]
  },
  { 
    name: "Serviços", 
    href: "/servicos",
    dropdown: [
      { name: "Segurança do trabalho", href: "/servicos/seguranca" },
      { name: "Meio ambiente", href: "/servicos/meio-ambiente" },
      { name: "Representação Drager", href: "/servicos" }
    ]
  },
  { name: "Nossos Clientes", href: "/clientes" },
  { name: "Depoimentos", href: "/depoimentos" },
  { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { name: "Fale Conosco", href: "/contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActivePage = (href: string) => {
    if (href === '/sobre') {
      return location.pathname.startsWith('/sobre');
    }
    return location.pathname === href;
  };

  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname.startsWith('/sobre');
  const hasHeroBackground = isHomePage || isAboutPage;

  useEffect(() => {
    // Se não for home ou about, sempre fica branco
    if (!hasHeroBackground) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Determina se está na área do hero (home ou about)
      setIsScrolled(scrollTop > 100);
      
      // Controla visibilidade baseado na direção do scroll
      if (scrollTop > lastScrollY && scrollTop > 100) {
        // Rolando para baixo e fora do hero - esconde
        setIsVisible(false);
      } else {
        // Rolando para cima ou no hero - mostra
        setIsVisible(true);
      }
      
      setLastScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, hasHeroBackground]);

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    } ${isVisible ? 'top-0' : '-top-full'}`}>
      {/* Top contact bar - only show when not scrolled */}
      <div className={`transition-all duration-500 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      } bg-gradient-to-r from-primary/95 to-primary/90 backdrop-blur-md border-b border-white/10 relative overflow-hidden`}>
        {/* Animated shine effect */}
        <div className="absolute inset-0 shine-animation"></div>
        
        <div className="container mx-auto px-4 py-2 relative z-10">
          <div className="flex justify-end items-center space-x-6 text-sm text-white/90">
            <div className="flex items-center space-x-2 hover:text-white transition-colors hover:scale-105 transform duration-100">
              <Phone className="h-4 w-4 animate-pulse" />
              <span>(21) 3881-1212</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white transition-colors hover:scale-105 transform duration-100">
              <Mail className="h-4 w-4 animate-pulse" />
              <span className="hidden md:inline">contato@monitorarconsultoria.com.br</span>
              <span className="md:hidden">contato@monitorar...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl bg-white/95 border-b border-gray-200/20' : 'backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant={isScrolled ? "dark" : "light"} logoSrc={isScrolled ? "/moni3.png" : "/moni2.png"} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <div className="flex items-center space-x-2">
                {navigationItems.map((item, index) => (
                  <div key={item.name} className="relative group">
                    {item.dropdown ? (
                      <>
                        <Link
                          to={item.href}
                          className={`flex items-center gap-1 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-150 rounded-full ${
                            isActivePage(item.href)
                              ? "text-white bg-[#4fc106] shadow-lg shadow-[#4fc106]/25"
                              : isScrolled
                              ? "text-gray-700 hover:text-[#4fc106] hover:bg-gray-100"
                              : "text-white hover:text-[#4fc106] hover:bg-white/20 backdrop-blur-sm"
                          }`}
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.name}
                          <ChevronDown className="h-3 w-3" />
                        </Link>
                        
                        {/* Dropdown Menu - Faster Transitions */}
                        <div 
                          className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200/20 py-2 transition-all duration-100 ${
                            openDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                          }`}
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4fc106] transition-colors duration-100"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-150 rounded-full ${
                          isActivePage(item.href)
                            ? "text-white bg-[#4fc106] shadow-lg shadow-[#4fc106]/25"
                            : isScrolled
                            ? "text-gray-700 hover:text-[#4fc106] hover:bg-gray-100"
                            : "text-white hover:text-[#4fc106] hover:bg-white/20 backdrop-blur-sm"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`lg:hidden rounded-full shadow-lg border transition-all duration-150 ${
                    isScrolled 
                      ? 'bg-gray-100 border-gray-200 hover:bg-gray-200' 
                      : 'bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/30'
                  }`}
                >
                  <Menu className={`h-5 w-5 transition-colors duration-150 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-xl border-l border-gray-200/20">
                <div className="flex flex-col space-y-2 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium py-3 px-4 rounded-xl transition-all duration-150 ${
                        isActivePage(item.href)
                          ? "bg-[#4fc106] text-white shadow-lg shadow-[#4fc106]/25"
                          : "hover:bg-white/60 text-gray-700 hover:text-[#4fc106]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};