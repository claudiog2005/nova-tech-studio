import React, { useState } from 'react';
import { Check, MessageSquare, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

export const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<'DOP' | 'USD'>('DOP');
  const rateDOPtoUSD = 60; // Approx exchange rate for reference

  const plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Presencia Digital',
      tier: 'Básico',
      initialDop: 15000,
      monthlyDop: 2500,
      description: 'Ideal para negocios que apenas inician su presencia online y quieren una página web confiable y rápida.',
      features: [
        'Página One-Page de alto impacto',
        'Diseño optimizado 100% para celular',
        'Botón flotante y enlaces a WhatsApp',
        'Dominio propio (.com) y hosting ultra rápido',
        'Certificado de seguridad SSL gratis',
        'Entrega lista en 5 días hábiles',
      ],
      deliveryTime: '5 días',
    },
    {
      id: 'store',
      name: 'Tienda Online & Catálogo',
      tier: 'Más elegido · Negocio',
      initialDop: 25000,
      monthlyDop: 5000,
      featured: true,
      description: 'Para negocios que buscan exhibir sus productos, recibir pedidos directos por WhatsApp y gestionar su catálogo.',
      features: [
        'Hasta 5 secciones completas',
        'Catálogo digital interactivo con buscador',
        'Carrito de compras y pedidos listos para WhatsApp',
        'Panel administrativo sencillo para subir productos',
        'Integración con redes sociales y Google Maps',
        'Copias de seguridad semanales y soporte prioritario',
        'Entrega lista en 10 días hábiles',
      ],
      deliveryTime: '10 días',
    },
    {
      id: 'custom',
      name: 'Sistema a la Medida',
      tier: 'Premium / Empresa',
      initialDop: 0,
      monthlyDop: 0,
      isQuoteOnly: true,
      description: 'Desarrollo exclusivo según requerimientos de inventario, punto de venta (POS), reservas o facturación.',
      features: [
        'Levantamiento de requerimientos y arquitectura',
        'Desarrollo de módulos específicos a tu operación',
        'Base de datos en la nube y roles de usuario',
        'Capacitación completa para tu equipo',
        'Mantenimiento continuo y soporte SLA prioritario',
        'Garantía técnica y escalabilidad garantizada',
      ],
      deliveryTime: 'Según alcance',
    },
  ];

  const formatMoney = (dopAmount: number) => {
    if (currency === 'USD') {
      const usd = Math.round(dopAmount / rateDOPtoUSD);
      return `$${usd.toLocaleString()} USD`;
    }
    return `$${dopAmount.toLocaleString()} RD$`;
  };

  const getWhatsAppHref = (plan: PricingPlan) => {
    const costText = plan.isQuoteOnly
      ? 'Sistema a medida'
      : `${plan.name} (${formatMoney(plan.initialDop)} inicial + ${formatMoney(plan.monthlyDop)}/mes)`;
    const text = `Hola Nova Tech Studio, me interesa el plan ${costText}. Quisiera solicitar información para mi negocio.`;
    return `https://wa.me/18092141869?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="precios" className="py-24 border-b border-[#22262E] bg-[#0D0F12]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-[#5B6EF5] font-semibold mb-3">
              Precios transparentes
            </div>
            <h2 className="text-2xl sm:text-4xl font-mono-tech font-bold text-[#EDEFF3] tracking-tight mb-4">
              Paquetes claros, sin sorpresas
            </h2>
            <p className="text-[#9AA1AC] text-base leading-relaxed">
              Un pago inicial por la creación del proyecto, más una mensualidad accesible que cubre hosting, dominio, respaldos y soporte técnico permanente.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 bg-[#181B21] border border-[#2A2F38] p-1 rounded-lg self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setCurrency('DOP')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono-tech font-semibold transition-colors ${
                currency === 'DOP'
                  ? 'bg-[#5B6EF5] text-white shadow-sm'
                  : 'text-[#9AA1AC] hover:text-[#EDEFF3]'
              }`}
            >
              Pesos (RD$)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono-tech font-semibold transition-colors ${
                currency === 'USD'
                  ? 'bg-[#5B6EF5] text-white shadow-sm'
                  : 'text-[#9AA1AC] hover:text-[#EDEFF3]'
              }`}
            >
              Dólares (USD)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl p-8 flex flex-col justify-between transition-all relative ${
                plan.featured
                  ? 'bg-gradient-to-b from-[#1F232A] to-[#181B21] border-2 border-[#5B6EF5] shadow-2xl shadow-[#5B6EF5]/15 lg:-translate-y-2'
                  : 'bg-[#181B21] border border-[#2A2F38] hover:border-[#656C77]'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5B6EF5] text-white text-[11px] font-mono-tech font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Recomendado para negocios
                </div>
              )}

              <div>
                <div className="text-xs font-mono-tech text-[#5B6EF5] font-semibold mb-2">
                  {plan.tier}
                </div>

                <h3 className="font-mono-tech text-xl font-bold text-[#EDEFF3] mb-2">
                  {plan.name}
                </h3>

                {/* Amount display */}
                <div className="my-5">
                  {plan.isQuoteOnly ? (
                    <div>
                      <div className="font-mono-tech text-3xl font-bold text-[#EDEFF3]">
                        Cotización
                      </div>
                      <div className="text-xs text-[#9AA1AC] mt-1 font-mono-tech">
                        Presupuesto adaptado a tus requerimientos
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="font-mono-tech text-3xl sm:text-4xl font-bold text-[#EDEFF3]">
                        {formatMoney(plan.initialDop)}
                        <span className="text-xs sm:text-sm font-normal text-[#9AA1AC] ml-1.5">
                          inicial
                        </span>
                      </div>
                      <div className="text-xs text-[#5B6EF5] mt-1.5 font-mono-tech font-medium">
                        + {formatMoney(plan.monthlyDop)}/mes (hosting, dominio y soporte)
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#9AA1AC] leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="border-t border-[#22262E] pt-6 mb-6">
                  <div className="text-xs font-mono-tech text-[#EDEFF3] font-semibold uppercase tracking-wider mb-4">
                    ¿Qué incluye?
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#9AA1AC]">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#5B6EF5] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <a
                  href={getWhatsAppHref(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-lg font-medium text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    plan.featured
                      ? 'bg-[#5B6EF5] hover:bg-[#4A5CE0] text-white shadow-lg shadow-[#5B6EF5]/30'
                      : 'border border-[#2A2F38] hover:border-[#656C77] bg-[#121418] hover:bg-[#181B21] text-[#EDEFF3]'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{plan.isQuoteOnly ? 'Solicitar cotización' : 'Elegir este plan'}</span>
                </a>
                <div className="text-center text-[11px] text-[#656C77] font-mono-tech mt-2.5">
                  Tiempo estimado: {plan.deliveryTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
