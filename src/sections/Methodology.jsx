import MetabolicTimeline from '../components/MetabolicTimeline'
import Reveal from '../components/Reveal'

const pillars = [
  { n: 'I', title: 'Leitura', body: 'CGM, exames, ciclo, sono. Dados do seu corpo — não de um e-book.' },
  { n: 'II', title: 'Hipótese', body: 'O primeiro protocolo é uma pergunta. A gente testa. Não impõe.' },
  { n: 'III', title: 'Ajuste', body: 'Toda semana o sinal muda. O plano também. Sem “você falhou”.' },
  { n: 'IV', title: 'Autonomia', body: 'No fim, você lê sozinha. A consulta vira conversa, não dependência.' },
]

const steps = [
  { n: '01', title: 'Você escreve', aside: 'WhatsApp ou e-mail' },
  { n: '02', title: 'A conversa', aside: 'online ou estúdio' },
  { n: '03', title: '12 semanas', aside: 'Protocolo Sinal' },
]

export default function Methodology() {
  return (
    <section id="metodo" className="bg-cream/60 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <p className="eyebrow text-gold">O método</p>
            <h2 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[0.95] tracking-[-0.01em]">
              Quatro pilares.
              <br />
              <em className="gold-text">Nenhum smoothie.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-base leading-relaxed text-cocoa lg:ml-auto">
              Doze semanas, porque metabolismo não muda no fim de semana.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.n}
              delay={i * 0.06}
              className="rounded-[1.75rem] border border-hair bg-pearl p-8 transition duration-500 hover:border-gold-soft/70 hover:shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft/60 font-serif text-lg italic text-gold">
                {pillar.n}
              </span>
              <h3 className="mt-8 font-serif text-3xl text-espresso">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cocoa">{pillar.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative mt-8 overflow-hidden rounded-[2rem] bg-night p-7 text-pearl shadow-lift md:p-12">
          <div className="glow -right-20 -top-20 h-72 w-72 bg-gold/25" />
          <MetabolicTimeline />
        </Reveal>

        <Reveal className="mt-16 grid gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-serif text-lg italic text-gold">{step.n}</span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-gold-soft/70 to-transparent sm:block" />
                )}
              </div>
              <p className="mt-3 font-serif text-3xl text-espresso">{step.title}</p>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-taupe">
                {step.aside}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
