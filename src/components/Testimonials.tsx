import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 'duarte',
      quote: 'Desde que tenemos el catálogo online con pedidos directo a WhatsApp, cerramos ventas incluso en las noches cuando la ferretería está cerrada. La inversión se pagó sola en dos meses.',
      author: 'Miguel Reyes',
      role: 'Propietario',
      company: 'Ferretería Duarte, San Francisco de Macorís',
      initials: 'MR',
    },
    {
      id: 'fogon',
      quote: 'El menú digital con QR nos facilitó la vida. Los clientes ven las fotos de los platos en alta calidad y el pedido llega con la dirección lista al WhatsApp del delivery. El trato de Nova fue impecable.',
      author: 'Carmen Pérez',
      role: 'Gerente General',
      company: 'Restaurante El Fogón Criollo',
      initials: 'CP',
    },
    {
      id: 'dental',
      quote: 'Teníamos una web vieja que nadie visitaba. Nova Tech la rediseñó por completo y ahora los pacientes agendan sus citas directo por internet. El proceso fue rápido y sin complicaciones.',
      author: 'Dr. Alejandro Santos',
      role: 'Director Médico',
      company: 'Centro Odontológico Santos',
      initials: 'AS',
    },
  ];

  return (
    <section id="testimonios" className="py-24 border-b border-[#22262E] bg-[#0D0F12]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="max-w-xl mb-14">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-[#5B6EF5] font-semibold mb-3">
            Testimonios
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono-tech font-bold text-[#EDEFF3] tracking-tight mb-4">
            Lo que dicen negocios que ya confían en nosotros
          </h2>
          <p className="text-[#9AA1AC] text-base leading-relaxed">
            Resultados comprobados en ventas, agilidad operativa y satisfacción de clientes dominicanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#181B21] border border-[#2A2F38] rounded-xl p-7 flex flex-col justify-between hover:border-[#5B6EF5]/40 transition-colors shadow-md"
            >
              <div>
                <div className="flex items-center gap-1 text-[#FEBC2E] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FEBC2E]" />
                  ))}
                </div>

                <p className="text-sm text-[#EDEFF3] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#22262E]">
                <div className="w-10 h-10 rounded-full bg-[#2E3670] text-[#5B6EF5] font-mono-tech font-bold flex items-center justify-center text-sm border border-[#5B6EF5]/30">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#EDEFF3] font-mono-tech">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#9AA1AC]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
