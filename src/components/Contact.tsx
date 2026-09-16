import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Tienda online',
    message: '',
  });

  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, service, message } = formData;

    if (!name.trim() || !phone.trim() || !message.trim()) {
      return;
    }

    const text = `Hola Nova Tech Studio, soy ${name.trim()} (${phone.trim()}). Me interesa: ${service}. Detalle de mi negocio: ${message.trim()}`;
    const waUrl = `https://wa.me/18092141869?text=${encodeURIComponent(text)}`;

    setSubmittedUrl(waUrl);

    // Immediate direct redirection (works smoothly on both mobile & desktop)
    window.location.href = waUrl;
  };

  return (
    <section id="contacto" className="py-24 border-b border-[#22262E] bg-[#0D0F12]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          {/* Contact Information & Channels */}
          <div className="space-y-6">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-[#5B6EF5] font-semibold">
              Contacto directo
            </div>
            <h2 className="text-2xl sm:text-4xl font-mono-tech font-bold text-[#EDEFF3] tracking-tight">
              Cuéntanos tu proyecto y empecemos hoy
            </h2>
            <p className="text-[#9AA1AC] text-base leading-relaxed">
              Completa el formulario y te enviaremos una propuesta formal en menos de 48 horas. Si tienes dudas urgentes, puedes escribirnos de inmediato por WhatsApp.
            </p>

            <div className="border-t border-[#22262E] pt-6 space-y-4">
              <a
                href="https://wa.me/18092141869?text=Hola%20Nova%20Tech%20Studio%2C%20quisiera%20cotizar%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#181B21] transition-colors group"
              >
                <div className="p-3 rounded-md bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#656C77] font-mono-tech uppercase">WhatsApp Business</div>
                  <div className="text-sm font-semibold text-[#EDEFF3] group-hover:text-[#25D366] transition-colors">
                    +1 (809) 214-1869
                  </div>
                </div>
              </a>

              <a
                href="mailto:holanovatechstudio@gmail.com"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#181B21] transition-colors group"
              >
                <div className="p-3 rounded-md bg-[#5B6EF5]/10 text-[#5B6EF5] group-hover:bg-[#5B6EF5]/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#656C77] font-mono-tech uppercase">Correo electrónico</div>
                  <div className="text-sm font-semibold text-[#EDEFF3] group-hover:text-[#5B6EF5] transition-colors">
                    holanovatechstudio@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-lg bg-[#181B21]/30">
                <div className="p-3 rounded-md bg-[#2A2F38] text-[#9AA1AC]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#656C77] font-mono-tech uppercase">Ubicación física</div>
                  <div className="text-sm font-semibold text-[#EDEFF3]">
                    San Francisco de Macorís, República Dominicana
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#181B21] border border-[#2A2F38] flex items-center gap-3 text-xs text-[#9AA1AC]">
              <Clock className="w-4 h-4 text-[#5B6EF5] flex-shrink-0" />
              <span>
                Horario de atención técnica: Lunes a Sábado de 8:30 AM a 7:00 PM (GMT-4).
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#181B21] border border-[#2A2F38] rounded-xl p-8 shadow-xl relative">
            <h3 className="font-mono-tech text-xl font-bold text-[#EDEFF3] mb-2">
              Solicitar propuesta en 48 horas
            </h3>
            <p className="text-xs text-[#9AA1AC] mb-6">
              Sin compromisos ni costos de evaluación.
            </p>

            {submittedUrl ? (
              <div
                id="form-success-box"
                className="bg-[#0D0F12] border border-[#8FE3B0]/40 rounded-xl p-6 text-center space-y-4 animate-in fade-in"
                role="alert"
                aria-live="polite"
              >
                <div className="w-12 h-12 rounded-full bg-[#8FE3B0]/10 text-[#8FE3B0] mx-auto flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-mono-tech text-lg font-bold text-[#EDEFF3]">
                  ¡Solicitud preparada con éxito!
                </h4>
                <p className="text-sm text-[#9AA1AC] max-w-sm mx-auto">
                  Tu mensaje se ha estructurado para nuestro canal de atención. Si tu navegador no abrió WhatsApp automáticamente, haz clic en el botón siguiente:
                </p>
                <a
                  href={submittedUrl}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-6 rounded-lg font-medium text-sm transition-colors shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Continuar a WhatsApp ahora</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedUrl(null);
                    setFormData({ name: '', phone: '', service: 'Tienda online', message: '' });
                  }}
                  className="text-xs text-[#9AA1AC] hover:text-[#EDEFF3] underline block mx-auto pt-2"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="cotizacion-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-mono-tech text-[#9AA1AC] mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Ej: Juan Martínez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0D0F12] border border-[#2A2F38] focus:border-[#5B6EF5] rounded-lg px-3.5 py-2.5 text-sm text-[#EDEFF3] placeholder-[#656C77] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-mono-tech text-[#9AA1AC] mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="(809) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0D0F12] border border-[#2A2F38] focus:border-[#5B6EF5] rounded-lg px-3.5 py-2.5 text-sm text-[#EDEFF3] placeholder-[#656C77] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-service" className="block text-xs font-mono-tech text-[#9AA1AC] mb-1.5">
                    Servicio de tu interés *
                  </label>
                  <select
                    id="form-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0D0F12] border border-[#2A2F38] focus:border-[#5B6EF5] rounded-lg px-3.5 py-2.5 text-sm text-[#EDEFF3] outline-none transition-colors cursor-pointer"
                  >
                    <option value="Tienda online con catálogo">Tienda online con catálogo y pedidos a WhatsApp</option>
                    <option value="Página web institucional">Página web institucional / Landing page</option>
                    <option value="Sistema a medida">Sistema a medida (Facturación / Inventario / Reservas)</option>
                    <option value="Rediseño de página actual">Rediseño o aceleración de página actual</option>
                    <option value="Mantenimiento técnico">Mantenimiento y soporte técnico</option>
                    <option value="Consultoría">Consultoría y asesoría técnica</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-mono-tech text-[#9AA1AC] mb-1.5">
                    Cuéntanos brevemente sobre tu negocio *
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Ej: Tengo una repostería en San Francisco de Macorís y quiero que mis clientes vean el menú y ordenen con precios actualizados..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0D0F12] border border-[#2A2F38] focus:border-[#5B6EF5] rounded-lg p-3.5 text-sm text-[#EDEFF3] placeholder-[#656C77] outline-none transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-form-btn"
                  className="w-full bg-[#5B6EF5] hover:bg-[#4A5CE0] text-white py-3.5 px-6 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-[#5B6EF5]/25 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar solicitud y abrir WhatsApp</span>
                </button>

                <p className="text-[11px] text-[#656C77] text-center font-mono-tech pt-1">
                  Respuesta garantizada en menos de 48 horas · Datos protegidos
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
