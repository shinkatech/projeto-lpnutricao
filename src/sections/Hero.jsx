import { motion } from 'framer-motion'
import AnimatedNumber from '../components/AnimatedNumber'
import MetabolicSignal from '../components/MetabolicSignal'
import { composeMessage, whatsappHref } from '../lib/contact'

const whatsapp = whatsappHref(
  composeMessage({
    nota: 'Vi o site e quero conversar sobre uma leitura metabólica.',
  }),
)

const stats = [
  { value: 1847, suffix: '', label: 'leituras metabólicas' },
  { value: 89, suffix: '%', label: 'de adesão ao protocolo' },
  { value: 14, suffix: '', label: 'anos de prática clínica' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="glow -left-40 top-10 h-[420px] w-[420px] bg-gold-pale/70" />
      <div className="glow -right-32 top-60 h-[380px] w-[380px] bg-sand/80" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="eyebrow inline-flex items-center gap-3 rounded-full border border-hair bg-pearl/70 px-4 py-2 text-cocoa"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Protocolo Sinal · 12 semanas
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease }}
            className="mt-8 font-serif text-[clamp(3.2rem,8vw,6.8rem)] font-normal leading-[0.9] tracking-[-0.02em]"
          >
            Seu corpo
            <br />
            já está <em className="gold-text font-medium">falando.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease }}
            className="mt-8 max-w-md text-base leading-relaxed text-cocoa md:text-lg"
          >
            Nutrição metabólica para mulheres que já tentaram o suficiente.
            Sem cardápio copiado. Sem discurso de disciplina.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
              Escrever no WhatsApp
              <span aria-hidden="true">→</span>
            </a>
            <a href="#metodo" className="btn-ghost">
              Conhecer o método
            </a>
          </motion.div>
        </div>

        {/* Retrato em arco */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1, ease }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] border border-hair bg-gradient-to-b from-pearl via-cream to-sand shadow-lift">
            <div className="absolute inset-3 rounded-t-full rounded-b-[1.6rem] border border-gold-soft/40" />

            <div className="absolute inset-x-0 top-[26%] text-center">
              <p className="eyebrow text-taupe">Dra.</p>
              <p className="mt-2 font-serif text-5xl italic leading-none text-espresso md:text-6xl">
                Clara
                <br />
                Mendes
              </p>
              <div className="hairline-gold mx-auto mt-6 w-24" />
              <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-taupe">
                CRN-3 18472 · USP
              </p>
            </div>

            <MetabolicSignal className="absolute inset-x-0 bottom-0 h-[38%] w-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease }}
            className="absolute -left-4 bottom-14 rounded-2xl border border-hair bg-pearl/85 px-5 py-4 shadow-soft backdrop-blur-md md:-left-10"
          >
            <p className="font-serif text-3xl leading-none text-espresso">14 anos</p>
            <p className="mt-1.5 max-w-[11rem] text-xs leading-snug text-cocoa">
              lendo o que a balança não conta.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-20 max-w-[1240px] px-5 md:mt-28 md:px-8">
        <div className="grid grid-cols-3 divide-x divide-hair rounded-3xl border border-hair bg-pearl/60 py-7 backdrop-blur-sm md:py-9">
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 text-center md:px-6">
              <p className="font-serif text-4xl text-espresso md:text-5xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-taupe md:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
