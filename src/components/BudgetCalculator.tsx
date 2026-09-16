import React, { useState, useMemo } from 'react';
import { Calculator, Check, MessageCircle, ArrowRight, Sparkles, HelpCircle, ShieldCheck, Clock } from 'lucide-react';

interface ProjectType {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  basePriceDop: number;
  basePriceUsd: number;
  estimatedDays: string;
  badge?: string;
}

interface AddonOption {
  id: string;
  name: string;
  description: string;
  priceDop: number;
  priceUsd: number;
  recommendedFor?: string[];
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'landing',
    name: 'Landing Page de Alta Conversión',
    subtitle: 'Ideal para productos o campañas',
    description: 'Una página estratégica de una sola sección extendida, diseñada para capturar leads y derivar ventas a WhatsApp.',
    basePriceDop: 15000,
    basePriceUsd: 250,
    estimatedDays: '5 - 7 días laborables',
  },
  {
    id: 'corporate',
    name: 'Sitio Web Corporativo',
    subtitle: 'Presencia profesional completa',
    description: 'De 3 a 5 páginas (Inicio, Nosotros, Servicios, Galería/Blog, Contacto) para empresas y firmas de servicios.',
    basePriceDop: 25000,
    basePriceUsd: 420,
    estimatedDays: '10 - 14 días laborables',
    badge: 'Más Solicitado',
  },
  {
    id: 'ecommerce',
    name: 'Tienda Online / Catálogo WhatsApp',
    subtitle: 'Comercio y pedidos digitales',
    description: 'Catálogo de productos con carrito, cálculo de envíos en RD y checkout directo a pedidos de WhatsApp o pagos con tarjeta.',
    basePriceDop: 40000,
    basePriceUsd: 670,
    estimatedDays: '2 - 3 semanas',
  },
  {
    id: 'custom_system',
    name: 'Sistema o Software Web a Medida',
    subtitle: 'Automatización de procesos',
    description: 'Panel privado con gestión de clientes, inventarios, cotizaciones, roles de usuario y base de datos segura.',
    basePriceDop: 65000,
    basePriceUsd: 1090,
    estimatedDays: '3 - 5 semanas',
  },
];

const ADDONS: AddonOption[] = [
  {
    id: 'whatsapp_checkout',
    name: 'Generador de Pedidos a WhatsApp',
    description: 'Formulario inteligente que arma el pedido formateado con total y datos del cliente listo para enviar por chat.',
    priceDop: 2500,
    priceUsd: 40,
    recommendedFor: ['landing', 'corporate', 'ecommerce'],
  },
  {
    id: 'payment_gateway',
    name: 'Pasarela de Pago (Azul / Cardnet / Stripe)',
    description: 'Cobros con tarjetas de crédito/débito locales e internacionales directo a tu cuenta bancaria.',
    priceDop: 8000,
    priceUsd: 135,
    recommendedFor: ['ecommerce', 'custom_system'],
  },
  {
    id: 'domain_hosting',
    name: 'Dominio .COM + Cloud Hosting (1er Año)',
    description: 'Registro de nombre de dominio, servidor rápido en la nube, correos corporativos y certificado SSL HTTPS.',
    priceDop: 4500,
    priceUsd: 75,
  },
  {
    id: 'seo_local',
    name: 'SEO Local y Google Perfil de Negocio',
    description: 'Alta y optimización para búsquedas en Google Maps y República Dominicana, con metadata y Schema.org.',
    priceDop: 3500,
    priceUsd: 60,
  },
  {
    id: 'admin_cms',
    name: 'Panel Autoadministrable (CMS)',
    description: 'Permite a tu equipo cambiar textos, subir fotos de productos y editar precios sin tocar código.',
    priceDop: 6000,
    priceUsd: 100,
    recommendedFor: ['corporate', 'ecommerce'],
  },
  {
    id: 'express_delivery',
    name: 'Entrega Prioritaria Express',
    description: 'Dedicación full-time prioritaria para reducir los tiempos de entrega hasta un 40%.',
    priceDop: 5000,
    priceUsd: 85,
  },
];

export const BudgetCalculator: React.FC = () => {
  const [currency, setCurrency] = useState<'DOP' | 'USD'>('DOP');
  const [selectedType, setSelectedType] = useState<string>('corporate');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['whatsapp_checkout', 'domain_hosting']);

  const currentProject = useMemo(() => {
    return PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[1];
  }, [selectedType]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotal = useMemo(() => {
    const base = currency === 'DOP' ? currentProject.basePriceDop : currentProject.basePriceUsd;
    const addonsTotal = selectedAddons.reduce((acc, addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (!addon) return acc;
      return acc + (currency === 'DOP' ? addon.priceDop : addon.priceUsd);
    }, 0);
    return base + addonsTotal;
  }, [currency, currentProject, selectedAddons]);

  const formatMoney = (amount: number) => {
    return currency === 'DOP'
      ? `RD$ ${amount.toLocaleString('es-DO')}`
      : `$ ${amount.toLocaleString('en-US')} USD`;
  };

  const getWhatsAppEstimateUrl = () => {
    const chosenAddonNames = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean);

    const message = `Hola Nova Tech Studio, estuve usando el Cotizador de su sitio web y me interesa el siguiente proyecto:

*Proyecto:* ${currentProject.name}
*Moneda:* ${currency}
*Módulos incluidos:*
${chosenAddonNames.length > 0 ? chosenAddonNames.map((name) => `- ${name}`).join('\n') : '- Configuración estándar'}

*Estimado aproximado:* ${formatMoney(calculatedTotal)}
*Tiempo estimado:* ${currentProject.estimatedDays}

¿Podríamos agendar una breve llamada para afinar detalles y formalizar la propuesta?`;

    return `https://wa.me/18297083729?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="cotizador" className="py-20 sm:py-28 bg-[#111318] border-b border-[#22262E] relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#5B6EF5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B6EF5]/10 border border-[#5B6EF5]/30 text-[#5B6EF5] font-mono-tech text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Cotizador Transparente</span>
          </div>

          <h2 className="font-mono-tech font-bold text-3xl sm:text-4xl text-[#EDEFF3] tracking-tight">
            Calcula el presupuesto estimado de tu proyecto
          </h2>

          <p className="text-sm sm:text-base text-[#9AA1AC]">
            Sin precios ocultos ni cotizaciones eternas. Elige el tipo de solución y los extras que necesitas para ver un estimado instantáneo.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center bg-[#181B21] p-1 rounded-lg border border-[#2A2F38] mt-3">
            <button
              type="button"
              id="calc-currency-dop"
              onClick={() => setCurrency('DOP')}
              className={`px-4 py-1.5 rounded-md text-xs font-mono-tech font-semibold transition-all ${
                currency === 'DOP'
                  ? 'bg-[#5B6EF5] text-white shadow-sm'
                  : 'text-[#9AA1AC] hover:text-[#EDEFF3]'
              }`}
            >
              Pesos Dominicanos (DOP)
            </button>
            <button
              type="button"
              id="calc-currency-usd"
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-md text-xs font-mono-tech font-semibold transition-all ${
                currency === 'USD'
                  ? 'bg-[#5B6EF5] text-white shadow-sm'
                  : 'text-[#9AA1AC] hover:text-[#EDEFF3]'
              }`}
            >
              Dólares (USD)
            </button>
          </div>
        </div>

        {/* Interactive Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Left Column: Selections */}
          <div className="space-y-8">
            {/* Step 1: Project Type */}
            <div className="bg-[#181B21]/60 border border-[#22262E] rounded-xl p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#5B6EF5]/20 text-[#5B6EF5] font-mono-tech text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="font-mono-tech font-semibold text-base sm:text-lg text-[#EDEFF3]">
                  Selecciona el tipo de solución
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType === type.id;
                  const price = currency === 'DOP' ? type.basePriceDop : type.basePriceUsd;

                  return (
                    <button
                      key={type.id}
                      type="button"
                      id={`project-type-${type.id}`}
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-4 rounded-lg border transition-all relative ${
                        isSelected
                          ? 'border-[#5B6EF5] bg-[#5B6EF5]/10 shadow-[0_0_15px_rgba(91,110,245,0.15)] ring-1 ring-[#5B6EF5]'
                          : 'border-[#2A2F38] bg-[#14171D] hover:border-[#3E4552]'
                      }`}
                    >
                      {type.badge && (
                        <span className="absolute top-3 right-3 text-[10px] font-mono-tech font-semibold px-2 py-0.5 rounded bg-[#5B6EF5] text-white">
                          {type.badge}
                        </span>
                      )}

                      <div className="font-mono-tech font-semibold text-sm text-[#EDEFF3] pr-12">
                        {type.name}
                      </div>
                      <div className="text-xs text-[#5B6EF5] mt-1 font-medium">
                        {type.subtitle}
                      </div>
                      <p className="text-xs text-[#9AA1AC] mt-2 line-clamp-2 leading-relaxed">
                        {type.description}
                      </p>

                      <div className="mt-3 pt-3 border-t border-[#22262E] flex items-center justify-between">
                        <span className="text-xs text-[#656C77]">Base desde</span>
                        <span className="font-mono-tech text-xs font-bold text-[#EDEFF3]">
                          {formatMoney(price)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-ons & Extra Features */}
            <div className="bg-[#181B21]/60 border border-[#22262E] rounded-xl p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#5B6EF5]/20 text-[#5B6EF5] font-mono-tech text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="font-mono-tech font-semibold text-base sm:text-lg text-[#EDEFF3]">
                  Añade módulos o servicios adicionales
                </h3>
              </div>

              <div className="space-y-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const price = currency === 'DOP' ? addon.priceDop : addon.priceUsd;

                  return (
                    <label
                      key={addon.id}
                      id={`addon-toggle-${addon.id}`}
                      className={`flex items-start gap-3.5 p-3.5 rounded-lg border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#5B6EF5]/60 bg-[#5B6EF5]/5 text-[#EDEFF3]'
                          : 'border-[#22262E] bg-[#14171D] text-[#9AA1AC] hover:border-[#2A2F38]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddon(addon.id)}
                        className="mt-1 w-4 h-4 rounded border-[#2A2F38] text-[#5B6EF5] focus:ring-[#5B6EF5] bg-[#0D0F12]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono-tech text-sm font-semibold text-[#EDEFF3]">
                            {addon.name}
                          </span>
                          <span className="font-mono-tech text-xs font-bold text-[#8FE3B0] whitespace-nowrap">
                            +{formatMoney(price)}
                          </span>
                        </div>
                        <p className="text-xs text-[#9AA1AC] mt-1 leading-relaxed">
                          {addon.description}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary Sticky Card */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#181B21] border border-[#2A2F38] rounded-xl p-6 shadow-xl relative overflow-hidden">
              {/* Terminal-like top bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#22262E]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E06C75]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#98C379]" />
                  <span className="text-[11px] font-mono-tech text-[#656C77] ml-2">presupuesto.json</span>
                </div>
                <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#22262E] text-[#9AA1AC]">
                  Estimación en tiempo real
                </span>
              </div>

              {/* Selected Base Plan */}
              <div className="space-y-3 mb-5">
                <div className="text-xs text-[#656C77] uppercase tracking-wider font-mono-tech">
                  Resumen de la Solución
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-[#EDEFF3]">{currentProject.name}</span>
                  <span className="font-mono-tech font-bold text-[#EDEFF3]">
                    {formatMoney(currency === 'DOP' ? currentProject.basePriceDop : currentProject.basePriceUsd)}
                  </span>
                </div>

                {/* Selected Addons breakdown */}
                {selectedAddons.length > 0 ? (
                  <div className="pt-3 border-t border-[#22262E]/60 space-y-2">
                    <div className="text-[11px] text-[#656C77] font-mono-tech uppercase">
                      Módulos seleccionados ({selectedAddons.length})
                    </div>
                    {selectedAddons.map((id) => {
                      const addon = ADDONS.find((a) => a.id === id);
                      if (!addon) return null;
                      return (
                        <div key={id} className="flex items-center justify-between text-xs text-[#9AA1AC]">
                          <span className="truncate pr-2">• {addon.name}</span>
                          <span className="font-mono-tech font-medium text-[#8FE3B0] whitespace-nowrap">
                            +{formatMoney(currency === 'DOP' ? addon.priceDop : addon.priceUsd)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-xs text-[#656C77] italic pt-2">
                    No has seleccionado módulos extra.
                  </div>
                )}
              </div>

              {/* Delivery timeline */}
              <div className="p-3 rounded-lg bg-[#0D0F12] border border-[#22262E] flex items-center gap-2.5 mb-6 text-xs text-[#EDEFF3]">
                <Clock className="w-4 h-4 text-[#5B6EF5] shrink-0" />
                <div>
                  <span className="text-[#656C77]">Tiempo estimado de entrega:</span>{' '}
                  <span className="font-mono-tech font-semibold text-[#EDEFF3]">
                    {currentProject.estimatedDays}
                  </span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="pt-4 border-t border-[#2A2F38] mb-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono-tech text-[#9AA1AC] uppercase">Presupuesto Estimado</span>
                  <span className="font-mono-tech text-2xl sm:text-3xl font-bold text-[#5B6EF5]">
                    {formatMoney(calculatedTotal)}
                  </span>
                </div>
                <p className="text-[11px] text-[#656C77] mt-1.5">
                  * Pago en 2 partes: 50% para iniciar y 50% contra entrega final aprobada. Incluye 30 días de garantía técnica.
                </p>
              </div>

              {/* WhatsApp Action Button */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppEstimateUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="calc-whatsapp-btn"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0D0F12] font-semibold py-3.5 px-4 rounded-lg text-sm transition-all shadow-md hover:shadow-[#25D366]/20 font-mono-tech"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Solicitar esta propuesta por WhatsApp</span>
                </a>

                <a
                  href="#contacto"
                  id="calc-contact-btn"
                  className="flex items-center justify-center gap-1.5 w-full border border-[#2A2F38] hover:border-[#656C77] bg-[#14171D] hover:bg-[#181B21] text-[#EDEFF3] py-2.5 px-4 rounded-lg text-xs font-medium transition-all"
                >
                  <span>O enviar por formulario de contacto</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9AA1AC]" />
                </a>
              </div>

              {/* Trust highlights */}
              <div className="mt-6 pt-4 border-t border-[#22262E] grid grid-cols-2 gap-2 text-[11px] text-[#9AA1AC]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8FE3B0]" />
                  <span>Sin costos ocultos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#8FE3B0]" />
                  <span>Código 100% tuyo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
