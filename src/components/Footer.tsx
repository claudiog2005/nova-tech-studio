import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="border-t border-[#22262E] py-12 bg-[#0D0F12]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Note */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a
              href="#"
              className="font-mono-tech font-bold text-lg tracking-tight flex items-center gap-2.5 text-[#EDEFF3]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#5B6EF5]" />
              <span>Nova Tech Studio</span>
            </a>
            <span className="hidden sm:inline text-[#2A2F38]">|</span>
            <span className="text-xs text-[#9AA1AC]">
              Software & diseño digital para negocios en República Dominicana
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#9AA1AC] font-mono-tech">
            <a href="#servicios" className="hover:text-[#EDEFF3] transition-colors">Servicios</a>
            <a href="#portafolio" className="hover:text-[#EDEFF3] transition-colors">Portafolio</a>
            <a href="#cotizador" className="hover:text-[#EDEFF3] transition-colors">Cotizador</a>
            <a href="#precios" className="hover:text-[#EDEFF3] transition-colors">Precios</a>
            <a href="#faq" className="hover:text-[#EDEFF3] transition-colors">Preguntas</a>
            <a href="#contacto" className="hover:text-[#EDEFF3] transition-colors">Contacto</a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-[#2A2F38] hover:border-[#656C77] bg-[#181B21] text-[#9AA1AC] hover:text-[#EDEFF3] transition-all"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-[#22262E]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#656C77]">
          <div>
            © {new Date().getFullYear()} Nova Tech Studio. Todos los derechos reservados. San Francisco de Macorís, RD.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Hecho con dedicación para impulsar comercios locales</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
