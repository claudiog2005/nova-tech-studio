import React from 'react';
import { Globe, ShoppingBag, Cpu, Wrench, RefreshCw, Compass, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: Array<ServiceItem & { icon: React.ReactNode }> = [
    {
      id: 'web',
      num: '01',
      title: 'Páginas web',
      description: 'Sitios ultra rápidos, modernos y adaptados a celular para que tu marca proyecte seriedad y confianza desde el primer clic.',
      tag: 'Presencia',
      icon: <Globe className="w-5 h-5 text-[#5B6EF5]" />,
    },
    {
      id: 'ecommerce',
      num: '02',
      title: 'Tiendas online',
      description: 'Catálogo dinámico, carrito de compras y recepción de pedidos directo a WhatsApp para vender sin pagar comisiones abusivas.',
      tag: 'Ventas',
      icon: <ShoppingBag className="w-5 h-5 text-[#5B6EF5]" />,
    },
    {
      id: 'custom-systems',
      num: '03',
      title: 'Sistemas a medida',
      description: 'Facturación, control de inventario, punto de venta y reservas desarrollados estrictamente al flujo real de tu negocio.',
      tag: 'Operación',
      icon: <Cpu className="w-5 h-5 text-[#5B6EF5]" />,
    },
    {
      id: 'maintenance',
      num: '04',
      title: 'Mantenimiento & Cloud',
      description: 'Actualizaciones de seguridad, copias de respaldo automáticas y optimización de velocidad continua para que tu web nunca falle.',
      tag: 'Soporte',
      icon: <Wrench className="w-5 h-5 text-[#5B6EF5]" />,
    },
    {
      id: 'redesign',
      num: '05',
      title: 'Rediseño de sitios',
      description: 'Transformamos sitios anticuados o lentos en plataformas modernas que elevan el prestigio de tu empresa y multiplican tus conversiones.',
      tag: 'Modernización',
      icon: <RefreshCw className="w-5 h-5 text-[#5B6EF5]" />,
    },
    {
      id: 'consulting',
      num: '06',
      title: 'Consultoría técnica',
      description: 'Te asesoramos con honestidad sobre qué software o arquitectura conviene implementar primero según tu presupuesto y etapa.',
      tag: 'Estrategia',
      icon: <Compass className="w-5 h-5 text-[#5B6EF5]" />,
    },
  ];

  return (
    <section id="servicios" className="py-24 border-b border-[#22262E] bg-[#0D0F12]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-[#5B6EF5] font-semibold mb-3">
            Servicios
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono-tech font-bold text-[#EDEFF3] tracking-tight mb-4">
            Lo que construimos para tu negocio
          </h2>
          <p className="text-[#9AA1AC] text-base leading-relaxed">
            Soluciones digitales pensadas para emprendedores y empresas que quieren vender más y automatizar tareas repetitivas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#22262E] border border-[#22262E] rounded-xl overflow-hidden shadow-xl">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-[#0D0F12] p-8 hover:bg-[#181B21]/80 transition-colors flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono-tech text-xs text-[#656C77] font-semibold tracking-wider">
                    {item.num}
                  </span>
                  <div className="p-2 rounded-lg bg-[#181B21] border border-[#2A2F38] group-hover:border-[#5B6EF5]/50 transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-mono-tech text-lg font-semibold text-[#EDEFF3] mb-2.5 flex items-center gap-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#9AA1AC] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#22262E]/60 flex items-center justify-between">
                <span className="text-xs font-mono-tech text-[#5B6EF5] bg-[#5B6EF5]/10 px-2.5 py-1 rounded">
                  {item.tag}
                </span>

                <a
                  href={`#contacto`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#9AA1AC] group-hover:text-[#EDEFF3] transition-colors"
                >
                  <span>Cotizar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5B6EF5]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
