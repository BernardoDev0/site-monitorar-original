import { PropsWithChildren, useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface ParallaxHeroProps {
  backgroundUrl: string;
  overlayClassName?: string;
  className?: string;
}

// Parallax leve via transform em um wrapper para evitar background-attachment: fixed (ruim em iOS)
export function ParallaxHero({ backgroundUrl, overlayClassName = "hero-gradient", className = "", children }: PropsWithChildren<ParallaxHeroProps>) {
  const reduced = usePrefersReducedMotion();
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * 0.15;
        if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.02)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section className={`relative min-h-screen flex items-center justify-center text-white overflow-hidden ${className}`}>
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className={`absolute inset-0 ${overlayClassName}`}></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        {children}
      </div>
    </section>
  );
}


