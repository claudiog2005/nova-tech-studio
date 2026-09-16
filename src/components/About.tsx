import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, Headphones, Terminal as TerminalIcon } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 border-b border-[#22262E] bg-[#0D0F12]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Values Terminal */}
          <div className="bg-[#181B21] border border-[#2A2F38] rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#22262E] bg-[#121418]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block" />
              <span className="text-xs text-[#656C77] font-mono-tech ml-2">valores-principales.sh</span>
            </div>
            <div className="p-6 font-mono-tech text-[13.5px] leading-relaxed space-y-3">
              <div className="text-[#7E8794]">
                <span className="text-[#EDEFF3]">$</span> cat principios-estudio.txt
              </div>
              <div className="text-[#5B6EF5] font-medium">01. Código propio y diseño a medida, cero plantillas prehechas</div>
              <div className="text-[#5B6EF5] font-medium">02. Precios claros desde el inicio, sin costos ocultos</div>
              <div className="text-[#5B6EF5] font-medium">03. Propuesta formal en menos de 48 horas</div>
              <div className="text-[#5B6EF5] font-medium">04. Soporte cercano después de la entrega del proyecto</div>

              <div className="pt-3 border-t border-[#22262E]/80 text-[#7E8794]">
                <span className="text-[#EDEFF3]">$</span> stack --production
              </div>
              <div className="text-[#8FE3B0]">✓ React · TypeScript · Tailwind CSS</div>
              <div className="text-[#8FE3B0]">✓ WhatsApp Business API & Webhooks</div>
              <div className="text-[#8FE3B0]">✓ Infraestructura Cloud de alta disponibilidad</div>
              <div className="text-[#8FE3B0]">✓ Pasarelas de pago y soporte en RD (DOP / USD)</div>

              <div className="pt-2 text-xs text-[#656C77]">
                <span className="text-[#5B6EF5]">$</span> ready for deployment <span className="inline-block w-2 h-3.5 bg-[#5B6EF5] animate-blink align-middle ml-1" />
              </div>
            </div>
          </div>

          {/* Text Content & 4 Points */}
          <div className="space-y-6">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-[#5B6EF5] font-semibold">
              Sobre nosotros
            </div>
            <h2 className="text-2xl sm:text-4xl font-mono-tech font-bold text-[#EDEFF3] tracking-tight">
              Tecnología hecha para la realidad de los negocios
            </h2>
            <p className="text-[#9AA1AC] text-base leading-relaxed">
              <strong className="text-[#EDEFF3]">Nova Tech Studio</strong> nació en San Francisco de Macorís con el propósito de acercar herramientas de software de nivel profesional a los negocios locales dominicanos.
            </p>
            <p className="text-[#9AA1AC] text-base leading-relaxed">
              No creemos en cobrar precios exorbitantes ni en entregar plantillas genéricas de WordPress lentas y vulnerables. Cada proyecto se programa a la medida de tu flujo de ventas con soporte en español y comunicación fluida 1 a 1.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border-t border-[#22262E] pt-4">
                <div className="flex items-center gap-2 font-mono-tech text-sm font-semibold text-[#EDEFF3] mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#5B6EF5]" />
                  <span>Cercanía local</span>
                </div>
                <p className="text-xs text-[#9AA1AC] leading-relaxed">
                  Entendemos cómo compran los dominicanos y la importancia de WhatsApp en el comercio diario.
                </p>
              </div>

              <div className="border-t border-[#22262E] pt-4">
                <div className="flex items-center gap-2 font-mono-tech text-sm font-semibold text-[#EDEFF3] mb-1.5">
                  <Zap className="w-4 h-4 text-[#5B6EF5]" />
                  <span>Entrega rápida</span>
                </div>
                <p className="text-xs text-[#9AA1AC] leading-relaxed">
                  Primeras propuestas en 48 horas y sitios en producción en días, no en meses.
                </p>
              </div>

              <div className="border-t border-[#22262E] pt-4">
                <div className="flex items-center gap-2 font-mono-tech text-sm font-semibold text-[#EDEFF3] mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#5B6EF5]" />
                  <span>Sin letra pequeña</span>
                </div>
                <p className="text-xs text-[#9AA1AC] leading-relaxed">
                  Términos claros, propiedad 100% de tu dominio y código sin retención artificial.
                </p>
              </div>

              <div className="border-t border-[#22262E] pt-4">
                <div className="flex items-center gap-2 font-mono-tech text-sm font-semibold text-[#EDEFF3] mb-1.5">
                  <Headphones className="w-4 h-4 text-[#5B6EF5]" />
                  <span>Soporte continuo</span>
                </div>
                <p className="text-xs text-[#9AA1AC] leading-relaxed">
                  Permanecemos contigo después del lanzamiento resolviendo dudas y respaldando tu sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
