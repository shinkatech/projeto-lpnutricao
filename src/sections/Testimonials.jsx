import QuoteCarousel from '../components/QuoteCarousel'
import Reveal from '../components/Reveal'

export default function Testimonials() {
  return (
    <section id="provas" className="relative overflow-hidden bg-night px-5 py-24 text-pearl md:px-8 md:py-32">
      <div className="glow left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 bg-gold/20" />
      <div className="relative mx-auto max-w-[1040px]">
        <Reveal className="text-center">
          <p className="eyebrow text-gold-soft">Vozes</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            Elas não mandaram foto de <em className="text-gold-soft">antes e depois.</em>
          </h2>
        </Reveal>
        <Reveal className="mt-16">
          <QuoteCarousel />
        </Reveal>
      </div>
    </section>
  )
}
