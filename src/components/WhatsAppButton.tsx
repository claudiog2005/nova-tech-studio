import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      id="whatsapp-floating-widget"
      aria-label="Atención directa por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip badge */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-[#181B21] text-[#EDEFF3] border border-[#2A2F38] py-2 px-3.5 rounded-xl shadow-xl transition-all duration-300 text-xs font-mono-tech ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>¿Dudas? Chatea en vivo</span>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/18092141869?text=Hola%20Nova%20Tech%20Studio%2C%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20desarrollo."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp a Nova Tech Studio"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-black/60 transition-transform hover:scale-110 active:scale-95 group relative focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0D0F12]"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF5F57] rounded-full border-2 border-[#0D0F12]" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};
