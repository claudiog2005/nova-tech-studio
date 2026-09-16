import React, { useState } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

interface TerminalProps {
  initialCommands?: Array<{ type: 'cmd' | 'ok' | 'info' | 'warn'; text: string }>;
  interactive?: boolean;
}

export const TerminalVisual: React.FC<TerminalProps> = ({ interactive = true }) => {
  const [history, setHistory] = useState<Array<{ type: 'cmd' | 'ok' | 'info' | 'warn'; text: string }>>([
    { type: 'cmd', text: '$ nova init --negocio' },
    { type: 'ok', text: '✓ Analizando objetivos comerciales en RD...' },
    { type: 'ok', text: '✓ Interfaz moderna y diseño a medida generado' },
    { type: 'ok', text: '✓ Catálogo y pedidos conectados a WhatsApp' },
    { type: 'warn', text: '→ Publicado con éxito en Cloud Hosting de alta velocidad' },
  ]);

  const [inputVal, setInputVal] = useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newEntries: Array<{ type: 'cmd' | 'ok' | 'info' | 'warn'; text: string }> = [
      ...history,
      { type: 'cmd', text: `$ ${inputVal}` },
    ];

    if (cmd === 'help' || cmd === 'ayuda') {
      newEntries.push(
        { type: 'info', text: 'Comandos disponibles:' },
        { type: 'info', text: '  servicios  - Lista de desarrollos disponibles' },
        { type: 'info', text: '  whatsapp   - Abre contacto directo (+1 809-214-1869)' },
        { type: 'info', text: '  limpiar    - Limpia la consola' },
        { type: 'info', text: '  status     - Estado del servidor y tiempos de respuesta' }
      );
    } else if (cmd === 'servicios') {
      newEntries.push(
        { type: 'ok', text: '• Páginas Web Corporativas y Landing Pages' },
        { type: 'ok', text: '• Tiendas Online con pedidos a WhatsApp' },
        { type: 'ok', text: '• Sistemas de Inventario y Facturación a medida' }
      );
    } else if (cmd === 'whatsapp' || cmd === 'contacto') {
      newEntries.push({ type: 'ok', text: 'Redirigiendo a WhatsApp de Nova Tech Studio...' });
      window.open('https://wa.me/18092141869?text=Hola%20Nova%20Tech%20Studio%2C%20vi%20la%20terminal%20en%20su%20web.', '_blank');
    } else if (cmd === 'limpiar' || cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cmd === 'status') {
      newEntries.push(
        { type: 'ok', text: '✓ Todos los sistemas operativos (100% Uptime)' },
        { type: 'info', text: '✓ Tiempos de propuesta: < 48 horas garantizado' }
      );
    } else {
      newEntries.push({
        type: 'warn',
        text: `Comando '${cmd}' no reconocido. Escribe 'ayuda' para ver comandos.`,
      });
    }

    setHistory(newEntries);
    setInputVal('');
  };

  return (
    <div
      id="hero-terminal"
      className="bg-[#181B21] border border-[#2A2F38] rounded-xl overflow-hidden shadow-2xl shadow-black/60 transition-all hover:border-[#5B6EF5]/40"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#22262E] bg-[#121418]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block" />
          <span className="text-xs text-[#656C77] font-mono-tech ml-2 hidden sm:inline">bash — nova-cli v2.6</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#9AA1AC] font-mono-tech">
          <TerminalIcon className="w-3.5 h-3.5 text-[#5B6EF5]" />
          <span>RD_ENV=production</span>
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono-tech text-[13px] leading-relaxed max-h-[340px] overflow-y-auto space-y-2">
        {history.map((line, idx) => (
          <div key={idx} className="break-words">
            {line.type === 'cmd' && <span className="text-[#EDEFF3] font-medium">{line.text}</span>}
            {line.type === 'ok' && <span className="text-[#8FE3B0]">{line.text}</span>}
            {line.type === 'info' && <span className="text-[#7E8794]">{line.text}</span>}
            {line.type === 'warn' && <span className="text-[#F2C879]">{line.text}</span>}
          </div>
        ))}

        {/* Interactive prompt */}
        {interactive && (
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1 text-[13px]">
            <span className="text-[#5B6EF5] font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="escribe 'ayuda' o 'servicios'..."
              className="flex-1 bg-transparent border-none outline-none text-[#EDEFF3] placeholder-[#656C77] font-mono-tech text-[13px]"
              aria-label="Línea de comando interactiva"
            />
            <span className="w-2 h-4 bg-[#5B6EF5] animate-blink" />
          </form>
        )}
      </div>

      {/* Footer tip */}
      <div className="px-4 py-2 border-t border-[#22262E] bg-[#121418]/60 flex items-center justify-between text-[11px] text-[#656C77] font-mono-tech">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#5B6EF5]" />
          Terminal interactiva en vivo
        </span>
        <span>San Francisco de Macorís, RD</span>
      </div>
    </div>
  );
};
