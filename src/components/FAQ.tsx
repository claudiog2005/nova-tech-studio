import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, FileText, CreditCard, Clock, Shield, Smartphone } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'pagos' | 'tiempos' | 'tecnico' | 'general';
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FAQS: FAQItem[] = [
  {
    id: 'ncf',
    category: 'pagos',
    question: '¿Emiten comprobante fiscal (NCF) para empresas?',
    answer: 'Sí. Emitimos facturación válida con comprobante fiscal según lo establecido por la DGII, ya sea crédito fiscal (B01) para empresas registradas o consumidor final (B02). Los precios de las cotizaciones pueden incluir o detallar el ITBIS correspondiente.',
    icon: FileText,
  },
  {
    id: 'payment_methods',
    category: 'pagos',
    question: '¿Cuáles son las facilidades y métodos de pago?',
    answer: 'Trabajamos con un esquema transparente de 50% de anticipo al formalizar la propuesta e iniciar el desarrollo, y el 50% restante contra entrega final y aprobación en tu dominio. Aceptamos transferencias bancarias directas (Banco Popular Dominicano, BHD y Banreservas), así como pagos con tarjeta de crédito/débito.',
    icon: CreditCard,
  },
  {
    id: 'delivery_time',
    category: 'tiempos',
    question: '¿Cuánto tiempo toma tener mi sitio web o sistema listo?',
    answer: 'Una Landing Page estratégica se entrega en 5 a 7 días laborables. Un sitio web corporativo de 3 a 5 páginas toma de 10 a 14 días laborables. Para tiendas online con catálogo o sistemas web a medida, el plazo promedio es de 3 a 5 semanas con reportes de avance semanales.',
    icon: Clock,
  },
  {
    id: 'domain_hosting',
    category: 'tecnico',
    question: '¿Incluyen dominio (.com) y alojamiento en la nube (hosting)?',
    answer: 'Sí. Gestionamos el registro de tu nombre de dominio (.com, .net o asesoría para .do), aprovisionamos servidores cloud de alta velocidad con protección SSL (HTTPS) y dejamos configurados tus correos corporativos (ej. info@tunegocio.com). Si ya tienes tu propio hosting o dominio, trabajamos sobre tu infraestructura sin problemas.',
    icon: Shield,
  },
  {
    id: 'post_support',
    category: 'general',
    question: '¿Qué garantía y soporte ofrecen tras el lanzamiento?',
    answer: 'Todos nuestros desarrollos cuentan con 30 días de garantía técnica y soporte prioritario post-lanzamiento sin ningún costo adicional. Además, entregamos un video tutorial personalizado explicando cómo administrar tu contenido o catálogo, y ofrecemos planes de mantenimiento mensual opcionales.',
    icon: HelpCircle,
  },
  {
    id: 'local_payments_whatsapp',
    category: 'tecnico',
    question: '¿Puedo cobrar con pasarelas locales (Azul, Cardnet) o por WhatsApp?',
    answer: 'Totalmente. Integramos pasarelas de pago dominicanas (Cardnet, Azul) y globales (Stripe, PayPal). Para negocios que prefieren evitar comisiones bancarias, implementamos pedidos inteligentes con carrito directo a WhatsApp, donde recibes el detalle del cliente y los productos ya listos para despachar.',
    icon: MessageCircle,
  },
  {
    id: 'mobile_speed',
    category: 'tecnico',
    question: '¿La página web cargará rápido en teléfonos celulares?',
    answer: 'Diseñamos bajo el principio Mobile-First con código moderno y ligero. No utilizamos constructores lentos o plantillas saturadas; tu web cargará en menos de 1.5 segundos incluso en conexiones móviles 4G/LTE de República Dominicana, mejorando drásticamente tu posicionamiento en Google y la tasa de conversión.',
    icon: Smartphone,
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('ncf');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = selectedCategory === 'todos'
    ? FAQS
    : FAQS.filter((faq) => faq.category === selectedCategory);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0D0F12] border-b border-[#22262E] relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B6EF5]/10 border border-[#5B6EF5]/30 text-[#5B6EF5] font-mono-tech text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Claras</span>
          </div>

          <h2 className="font-mono-tech font-bold text-3xl sm:text-4xl text-[#EDEFF3] tracking-tight">
            Preguntas frecuentes
          </h2>

          <p className="text-sm sm:text-base text-[#9AA1AC]">
            Todo lo que necesitas saber sobre cómo trabajamos, formas de pago en RD, tiempos de entrega y soporte técnico.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {[
              { id: 'todos', label: 'Todas' },
              { id: 'pagos', label: 'Pagos y NCF' },
              { id: 'tiempos', label: 'Tiempos de entrega' },
              { id: 'tecnico', label: 'Aspectos técnicos' },
              { id: 'general', label: 'Garantía y soporte' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`faq-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tech font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#5B6EF5] text-white shadow-sm'
                    : 'bg-[#181B21] border border-[#22262E] text-[#9AA1AC] hover:text-[#EDEFF3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const IconComponent = faq.icon;

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#5B6EF5]/60 bg-[#14171D] shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                    : 'border-[#22262E] bg-[#14171D]/40 hover:border-[#2A2F38]'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`p-2 rounded-lg transition-colors ${
                      isOpen ? 'bg-[#5B6EF5]/15 text-[#5B6EF5]' : 'bg-[#181B21] text-[#656C77]'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <span className="font-mono-tech font-medium text-sm sm:text-base text-[#EDEFF3]">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`shrink-0 text-[#656C77] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#5B6EF5]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#9AA1AC] leading-relaxed border-t border-[#22262E]/50 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Help Box */}
        <div className="max-w-3xl mx-auto mt-12 p-6 rounded-xl bg-[#181B21]/60 border border-[#22262E] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-mono-tech font-bold text-base text-[#EDEFF3]">
              ¿Tienes alguna pregunta específica sobre tu proyecto?
            </h4>
            <p className="text-xs sm:text-sm text-[#9AA1AC]">
              Conversa directamente con nuestro equipo de desarrollo por WhatsApp sin ningún compromiso.
            </p>
          </div>

          <a
            href="https://wa.me/18297083729?text=Hola%20Nova%20Tech%20Studio%2C%20tengo%20una%20pregunta%20sobre%20un%20proyecto%20web."
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-cta"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0D0F12] font-semibold px-5 py-3 rounded-lg text-xs sm:text-sm font-mono-tech transition-colors shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
