import React, { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem('novatech_cookie_choice');
    if (!choice) {
      setShow(true);
    }
  }, []);

  const handleDecision = (decision: 'accepted' | 'rejected') => {
    localStorage.setItem('novatech_cookie_choice', decision);
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      id="cookie-notice-banner"
      aria-label="Consentimiento de cookies"
      className="fixed left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bottom-6 z-40 bg-[#181B21]/95 backdrop-blur-md border border-[#2A2F38] rounded-xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-lg bg-[#5B6EF5]/10 text-[#5B6EF5] flex-shrink-0 mt-0.5">
          <Shield className="w-5 h-5" />
        </div>

        <div className="flex-1">
          <p className="text-xs text-[#9AA1AC] leading-relaxed mb-3">
            Utilizamos tecnologías esenciales para garantizar el correcto funcionamiento de nuestra web y optimizar la experiencia de navegación en tu dispositivo.
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleDecision('rejected')}
              className="px-3 py-1.5 rounded-md border border-[#2A2F38] hover:border-[#656C77] text-xs font-mono-tech text-[#9AA1AC] hover:text-[#EDEFF3] transition-colors"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={() => handleDecision('accepted')}
              className="px-4 py-1.5 rounded-md bg-[#5B6EF5] hover:bg-[#4A5CE0] text-xs font-mono-tech font-semibold text-white transition-colors shadow-sm"
            >
              Aceptar
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleDecision('rejected')}
          className="text-[#656C77] hover:text-[#EDEFF3] p-1 rounded-md"
          aria-label="Cerrar aviso"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
