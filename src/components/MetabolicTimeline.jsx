import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const points = [
  {
    week: 1,
    x: 36,
    y: 92,
    label: 'Semana 01',
    title: 'Ruído',
    body: 'O corpo ainda responde no automático. A gente não corrige — registra.',
    metric: 'leitura contínua',
    value: 'CGM + diário',
  },
  {
    week: 4,
    x: 118,
    y: 64,
    label: 'Semana 04',
    title: 'Sinal',
    body: 'Os padrões aparecem. Glicose, ciclo e sono começam a conversar.',
    metric: 'variabilidade',
    value: '−18% média',
  },
  {
    week: 8,
    x: 200,
    y: 48,
    label: 'Semana 08',
    title: 'Ajuste',
    body: 'O protocolo deixa de ser hipótese. Troca-se o que não serve.',
    metric: 'adesão',
    value: '89% do grupo',
  },
  {
    week: 12,
    x: 284,
    y: 32,
    label: 'Semana 12',
    title: 'Autonomia',
    body: 'Você já lê o próprio sinal. A consulta vira conversa, não muleta.',
    metric: 'clareza',
    value: 'leitura própria',
  },
]

const curve =
  'M 36 92 C 70 90, 96 72, 118 64 C 150 54, 176 52, 200 48 C 236 42, 260 36, 284 32'

export default function MetabolicTimeline() {
  const [active, setActive] = useState(1)
  const current = points[active]

  return (
    <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div>
        <p className="eyebrow text-gold-soft">Linha do tempo metabólica</p>
        <svg viewBox="0 0 320 128" className="mt-6 w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="timelineFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C8A873" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#C8A873" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[40, 72, 104].map((y) => (
            <line key={y} x1="20" x2="300" y1={y} y2={y} stroke="#3A322C" strokeDasharray="2 4" strokeWidth="0.5" />
          ))}
          <path d={`${curve} L284 120 L36 120 Z`} fill="url(#timelineFill)" />
          <motion.path
            d={curve}
            stroke="#C8A873"
            strokeWidth="1.4"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {points.map((point, i) => {
            const isActive = active === i
            return (
              <g
                key={point.week}
                className="cursor-pointer"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <circle cx={point.x} cy={point.y} r="12" fill="transparent" />
                {isActive && (
                  <circle cx={point.x} cy={point.y} r="9" fill="#C8A873" fillOpacity="0.18" />
                )}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isActive ? 4.5 : 3}
                  fill={isActive ? '#C8A873' : '#1D1815'}
                  stroke="#C8A873"
                  strokeWidth="1"
                />
                <text
                  x={point.x}
                  y={point.y + 22}
                  textAnchor="middle"
                  fill={isActive ? '#E9DCC4' : '#8A7A6D'}
                  fontSize="8"
                  letterSpacing="1"
                >
                  S{String(point.week).padStart(2, '0')}
                </text>
              </g>
            )
          })}
        </svg>

        <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
          {points.map((point, i) => (
            <button
              key={point.week}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-1.5 text-xs transition ${
                active === i
                  ? 'border-gold-soft bg-gold-soft/15 text-gold-pale'
                  : 'border-hair-dark text-taupe'
              }`}
            >
              {point.title}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.week}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-hair-dark bg-night-soft/70 p-7 backdrop-blur-sm"
        >
          <p className="eyebrow text-gold-soft">{current.label}</p>
          <h3 className="mt-3 font-serif text-4xl italic text-pearl md:text-5xl">
            {current.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-sand/80">{current.body}</p>
          <div className="mt-6 flex items-baseline gap-3 border-t border-hair-dark pt-5">
            <span className="font-serif text-2xl text-gold-pale">{current.value}</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-taupe">
              {current.metric}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
