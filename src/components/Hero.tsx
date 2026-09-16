import React from 'react';
import { ArrowRight, Code2, Clock, CheckCircle2, Users2, Sparkles } from 'lucide-react';
import { TerminalVisual } from './TerminalVisual';

export const Hero: React.FC = () => {
  return (
    <>
      <section id="hero-section" className="py-20 sm:py-28 relative overflow-hidden border-b border-[#22262E]">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5B6EF5]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badges: Availability & Eyebrow */}
              <div className="flex flex-wrap items-center gap-3">
                <div id="availability-badge" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FE3B0]/10 border border-[#8FE3B0]/30 text-[#8FE3B0] text-xs font-mono-tech font-medium tracking-wide shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#8FE3B0] animate-pulse" />
                  <span>Disponibilidad: 2 cupos para proyectos este mes</span>
                </div>
                <div className="inline-flex items-center gap-2 text-[#5B6EF5] font-mono-tech text-xs font-medium tracking-wide">
                  <span className="w-4 h-[1.5px] bg-[#5B6EF5]" />
                  <span>República Dominicana</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-mono-tech font-bold text-3xl sm:text-5xl lg:text-[46px] leading-[1.14] tracking-tight text-[#EDEFF3]">
                Convertimos tu negocio en una presencia digital que{' '}
                <span className="text-[#5B6EF5] underline decoration-[#5B6EF5]/40 underline-offset-8">
                  vende
                </span>
                .
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-[#9AA1AC] max-w-xl leading-relaxed">
                Diseñamos y desarrollamos páginas web ultra rápidas, tiendas online con catálogo a WhatsApp y sistemas a la medida para comercios y empresas dominicanas.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#cotizador"
                  id="hero-calculator-btn"
                  className="inline-flex items-center gap-2 bg-[#5B6EF5] hover:bg-[#4A5CE0] text-white px-6 py-3.5 rounded-lg text-sm sm:text-base font-medium transition-all shadow-md hover:shadow-[#5B6EF5]/25 hover:-translate-y-0.5"
                >
                  <span>Calcular presupuesto</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#portafolio"
                  id="hero-works-btn"
                  className="inline-flex items-center gap-2 border border-[#2A2F38] hover:border-[#656C77] bg-[#181B21]/50 hover:bg-[#181B21] text-[#EDEFF3] px-6 py-3.5 rounded-lg text-sm sm:text-base font-medium transition-all"
                >
                  <span>Ver trabajos</span>
                </a>
              </div>

              {/* Value trust bullets */}
              <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#9AA1AC]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8FE3B0]" />
                  Propuesta en 48 horas
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8FE3B0]" />
                  Cero plantillas genéricas
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#5B6EF5]" />
                  Soporte técnico directo
                </span>
              </div>
            </div>

            {/* Right Terminal Visual */}
            <div>
              <TerminalVisual interactive={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div id="stats-bar" className="border-b border-[#22262E] py-10 bg-[#0D0F12]">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-4 rounded-lg bg-[#181B21]/30 border border-[#22262E]/60">
              <div className="font-mono-tech text-3xl sm:text-4xl font-bold text-[#5B6EF5]">5+</div>
              <div className="text-xs sm:text-sm text-[#9AA1AC] mt-1 font-medium">Negocios atendidos</div>
            </div>

            <div className="p-4 rounded-lg bg-[#181B21]/30 border border-[#22262E]/60">
              <div className="font-mono-tech text-3xl sm:text-4xl font-bold text-[#5B6EF5]">48h</div>
              <div className="text-xs sm:text-sm text-[#9AA1AC] mt-1 font-medium">Primera propuesta formal</div>
            </div>

            <div className="p-4 rounded-lg bg-[#181B21]/30 border border-[#22262E]/60">
              <div className="font-mono-tech text-3xl sm:text-4xl font-bold text-[#5B6EF5]">100%</div>
              <div className="text-xs sm:text-sm text-[#9AA1AC] mt-1 font-medium">Código y diseño a medida</div>
            </div>

            <div className="p-4 rounded-lg bg-[#181B21]/30 border border-[#22262E]/60">
              <div className="font-mono-tech text-3xl sm:text-4xl font-bold text-[#5B6EF5]">1:1</div>
              <div className="text-xs sm:text-sm text-[#9AA1AC] mt-1 font-medium">Atención directa contigo</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
