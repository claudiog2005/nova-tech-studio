import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquareCode } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Cotizador', href: '#cotizador' },
    { label: 'Precios', href: '#precios' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#0D0F12]/95 backdrop-blur-md border-[#22262E] shadow-lg shadow-black/20'
          : 'bg-[#0D0F12]/85 backdrop-blur-sm border-[#22262E]'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <nav className="flex items-center justify-between py-4" aria-label="Navegación principal">
          {/* Logo */}
          <a
            href="#"
            id="brand-logo"
            className="font-mono-tech font-bold text-lg sm:text-xl tracking-tight flex items-center gap-2.5 text-[#EDEFF3] hover:opacity-90 transition-opacity"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#5B6EF5] shadow-[0_0_8px_#5B6EF5]" />
            <span>Nova Tech Studio</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-[#9AA1AC]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#EDEFF3] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5B6EF5] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              id="header-quote-btn"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#5B6EF5] hover:bg-[#4A5CE0] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              <span>Solicitar cotización</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#9AA1AC] hover:text-[#EDEFF3] hover:bg-[#181B21] transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown"
            className="md:hidden border-t border-[#22262E] py-4 px-2 space-y-2 bg-[#0D0F12]"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base text-[#9AA1AC] hover:text-[#EDEFF3] hover:bg-[#181B21] rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#22262E] mt-2">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#5B6EF5] hover:bg-[#4A5CE0] text-white px-4 py-3 rounded-md text-sm font-medium transition-colors"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Solicitar cotización</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
