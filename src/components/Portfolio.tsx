import React, { useState, useEffect } from 'react';
import { ExternalLink, CheckCircle2, X, MessageCircle, ArrowRight, Clock, MapPin, Sparkles, Layers, AlertCircle, Check } from 'lucide-react';
import { PortfolioItem } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const projects: PortfolioItem[] = [
    {
      id: 'fogon',
      title: 'El Fogón Criollo',
      category: 'Restaurante & Gastronomía',
      clientLocation: 'San Francisco de Macorís, RD',
      description: 'Menú interactivo con códigos QR, cálculo de total y pedidos directos a la cocina vía WhatsApp con geolocalización de entrega.',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?fm=jpg&q=80&w=800&auto=format&fit=crop',
      metrics: '+45% pedidos digitales en su primer mes',
      timeline: '8 días laborables',
      challenge: 'Perdían hasta el 35% de los pedidos de comida para llevar debido a líneas telefónicas ocupadas y cartas en PDF pesadas e ilegibles en celulares de clientes que escribían por Instagram y WhatsApp.',
      solution: 'Desarrollamos una web-app ultra ligera con catálogo categorizado de platos, modificadores de guarnición, cálculo automático del total e integración que envía el pedido formateado directo a la estación de despacho por WhatsApp con la ubicación GPS del cliente.',
      results: [
        '+45% de incremento en pedidos digitales en los primeros 30 días de lanzamiento',
        'Tiempo de toma de pedido reducido de 6 minutos a menos de 45 segundos por cliente',
        'Carga instantánea en 0.7 segundos incluso en conexiones móviles 4G locales',
      ],
      techStack: ['React', 'Tailwind CSS', 'WhatsApp Order Engine', 'Cloudflare Edge'],
    },
    {
      id: 'ferreteria',
      title: 'Ferretería Duarte',
      category: 'Comercio & Materiales',
      clientLocation: 'Santiago de los Caballeros, RD',
      description: 'Catálogo online con buscador en tiempo real, categorías de construcción y cotizador rápido de materiales en pesos dominicanos.',
      imageUrl: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?fm=jpg&q=80&w=800&auto=format&fit=crop',
      metrics: 'Más de 1,200 productos indexados',
      timeline: '3 semanas',
      challenge: 'Más de 1,200 productos de ferretería y construcción sin visibilidad digital. Maestros constructores y contratistas debían desplazarse o esperar en línea telefónica solo para consultar inventario y precios.',
      solution: 'Construcción de un catálogo interactivo de alta densidad con indexación instantánea, filtrado por marcas/categorías y un cotizador express que permite al cliente enviar una lista de materiales lista para facturar en caja.',
      results: [
        '1,200+ productos indexados y consultables 24/7 desde cualquier teléfono',
        'Promedio de 35 cotizaciones formales recibidas por semana a través de la plataforma',
        'Ahorro de más de 12 horas semanales en atención repetitiva de mostrador',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Instant Search API'],
    },
    {
      id: 'estetica',
      title: 'Bella Vista Centro Dental',
      category: 'Salud & Odontología',
      clientLocation: 'Santo Domingo, RD',
      description: 'Página institucional con agenda de citas automatizada, galería de tratamientos y pre-calificación de pacientes por WhatsApp.',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?fm=jpg&q=80&w=800&auto=format&fit=crop',
      metrics: 'Reducción de cancelaciones en 32%',
      timeline: '10 días laborables',
      challenge: 'Alta tasa de cancelaciones de última hora (30%) y recepcionistas saturadas respondiendo manualmente a dudas básicas de costos y horarios en redes sociales.',
      solution: 'Sitio web corporativo de alta elegancia con explicaciones visuales de tratamientos (implantes, ortodoncia, estética), sección de preguntas frecuentes y formulario inteligente de solicitud de cita conectado a WhatsApp con confirmación previa.',
      results: [
        'Reducción comprobada del 32% en inasistencias gracias a las confirmaciones guiadas',
        'El 68% de las consultas de primera vez ahora se generan a través de la web',
        'Puntaje de rendimiento de 98/100 en Google Mobile PageSpeed',
      ],
      techStack: ['React', 'Tailwind CSS', 'Schema.org SEO', 'WhatsApp API'],
    },
  ];

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getWhatsAppCaseStudyUrl = (project: PortfolioItem) => {
    const text = `Hola Nova Tech Studio, estuve revisando el caso de estudio de *${project.title}* en su portafolio y me gustaría desarrollar una solución similar para mi negocio. ¿Podemos coordinar una propuesta?`;
    return `https://wa.me/18297083729?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="portafolio" className="py-24 border-b border-[#22262E] bg-[#0D0F12] relative">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#5B6EF5] font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5B6EF5]" />
              <span>Casos de Éxito Reales</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-mono-tech font-bold text-[#EDEFF3] tracking-tight mb-4">
              Proyectos reales que impulsan negocios locales
            </h2>
            <p className="text-[#9AA1AC] text-base leading-relaxed">
              Haz clic en cualquier proyecto para ver el <strong>Caso de Estudio</strong> completo: el problema inicial, la arquitectura desarrollada y los resultados comerciales obtenidos.
            </p>
          </div>

          <a
            href="#cotizador"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5B6EF5] hover:text-[#4A5CE0] transition-colors self-start md:self-auto font-mono-tech"
          >
            <span>Calcular costo de tu proyecto</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="bg-[#181B21] border border-[#2A2F38] hover:border-[#5B6EF5] rounded-xl overflow-hidden transition-all duration-300 flex flex-col group hover:-translate-y-1.5 shadow-lg cursor-pointer relative"
            >
              {/* Image with overlay */}
              <div className="h-48 relative overflow-hidden bg-[#1F232A]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181B21] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0D0F12]/85 backdrop-blur-md text-[#EDEFF3] text-xs font-mono-tech px-2.5 py-1 rounded-md border border-[#2A2F38]">
                  {project.category}
                </span>

                <span className="absolute top-3 right-3 bg-[#5B6EF5]/90 backdrop-blur-md text-white text-[11px] font-mono-tech px-2 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <span>Ver Caso</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#656C77] font-mono-tech mb-1.5">
                    <span>{project.clientLocation}</span>
                    <span>{project.timeline}</span>
                  </div>

                  <h3 className="font-mono-tech text-lg font-bold text-[#EDEFF3] mb-2 group-hover:text-[#5B6EF5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#9AA1AC] leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#22262E] space-y-3">
                  {project.metrics && (
                    <div className="flex items-center gap-2 text-xs text-[#8FE3B0] font-mono-tech font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-[#8FE3B0]" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-[#5B6EF5] font-mono-tech font-medium pt-1">
                    <span>Ver caso de estudio detallado</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          id="case-study-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div
            id="case-study-modal-container"
            onClick={(e) => e.stopPropagation()}
            className="bg-[#14171D] border border-[#2A2F38] w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden my-8 relative max-h-[90vh] flex flex-col"
          >
            {/* Modal Header Bar with Close Button */}
            <div className="p-4 sm:p-6 border-b border-[#22262E] flex items-center justify-between bg-[#181B21] sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5B6EF5]" />
                <span className="text-xs font-mono-tech text-[#9AA1AC] uppercase tracking-wider">
                  Caso de Estudio • {selectedProject.category}
                </span>
              </div>

              <button
                type="button"
                id="close-modal-btn"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-[#9AA1AC] hover:text-[#EDEFF3] hover:bg-[#22262E] transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
              {/* Project Hero Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-start pb-6 border-b border-[#22262E]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-[#5B6EF5]/15 text-[#5B6EF5] border border-[#5B6EF5]/30">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-[#22262E] text-[#9AA1AC] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {selectedProject.clientLocation}
                    </span>
                    <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-[#22262E] text-[#9AA1AC] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {selectedProject.timeline}
                    </span>
                  </div>

                  <h3 id="case-study-title" className="font-mono-tech text-2xl sm:text-3xl font-bold text-[#EDEFF3]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[#9AA1AC] mt-2 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.metrics && (
                  <div className="p-3.5 rounded-xl bg-[#8FE3B0]/10 border border-[#8FE3B0]/30 text-[#8FE3B0] text-center sm:text-right">
                    <div className="text-[10px] font-mono-tech uppercase text-[#8FE3B0]/80">Impacto Clave</div>
                    <div className="text-sm font-mono-tech font-bold mt-0.5">{selectedProject.metrics}</div>
                  </div>
                )}
              </div>

              {/* 1. The Challenge */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#E06C75] font-mono-tech text-sm font-semibold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>1. El Reto del Negocio</span>
                </div>
                <div className="p-4 rounded-xl bg-[#181B21] border border-[#22262E] text-sm text-[#EDEFF3] leading-relaxed">
                  {selectedProject.challenge}
                </div>
              </div>

              {/* 2. The Solution */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#5B6EF5] font-mono-tech text-sm font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>2. La Solución Desarrollada</span>
                </div>
                <div className="p-4 rounded-xl bg-[#181B21] border border-[#22262E] text-sm text-[#EDEFF3] leading-relaxed">
                  {selectedProject.solution}
                </div>
              </div>

              {/* 3. The Tangible Results */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#8FE3B0] font-mono-tech text-sm font-semibold uppercase tracking-wider">
                  <Check className="w-4 h-4" />
                  <span>3. Resultados Medibles & Impacto Comercial</span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedProject.results.map((res, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-lg bg-[#0D0F12] border border-[#22262E] flex items-start gap-3 text-sm text-[#EDEFF3]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8FE3B0] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-2">
                <div className="text-xs font-mono-tech text-[#656C77] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Tecnologías & Arquitectura Utilizada</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-[#181B21] border border-[#2A2F38] text-xs font-mono-tech text-[#EDEFF3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Sticky Bottom Actions */}
            <div className="p-4 sm:p-6 bg-[#181B21] border-t border-[#22262E] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="#cotizador"
                onClick={() => setSelectedProject(null)}
                className="text-xs text-[#9AA1AC] hover:text-[#EDEFF3] transition-colors font-mono-tech order-2 sm:order-1"
              >
                ← O calcular presupuesto similar en el cotizador
              </a>

              <a
                href={getWhatsAppCaseStudyUrl(selectedProject)}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-whatsapp-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0D0F12] font-semibold px-6 py-3 rounded-lg text-sm font-mono-tech transition-colors shadow-md order-1 sm:order-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quiero una solución similar para mi negocio</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
