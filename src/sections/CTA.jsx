import ContactChannels from '../components/ContactChannels'
import QuizForm from '../components/QuizForm'
import Reveal from '../components/Reveal'
import { CLINIC } from '../lib/contact'

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-cream/60 px-5 py-24 md:px-8 md:py-32">
      <div className="glow -left-32 bottom-0 h-96 w-96 bg-gold-pale/80" />
      <div className="relative mx-auto max-w-[1240px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Contato · {CLINIC.hours}</p>
          <h2 className="mt-5 font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.01em]">
            Você escreve <em className="gold-text">para a Clara.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <ContactChannels />
        </Reveal>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow text-taupe">Ou comece por aqui</p>
            <h3 className="mt-4 font-serif text-4xl leading-tight text-espresso md:text-5xl">
              Duas perguntas e a mensagem <em>já sai pronta.</em>
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cocoa">
              Não é cadastro. É um rascunho do que você envia — a Clara não te
              procura.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <QuizForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
