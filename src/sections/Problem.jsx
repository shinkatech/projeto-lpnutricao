import Reveal from '../components/Reveal'

const pains = [
  'Você come “certo” e mesmo assim apaga às quatro.',
  'Toda dieta funciona — até o corpo pedir o que foi retirado.',
  'Ciclo, sono e fome não cabem numa planilha de 1.400 kcal.',
]

export default function Problem() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold">O que a dieta não pergunta</p>
          <h2 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[0.95] tracking-[-0.01em]">
            Força de vontade <em className="text-sage">não é nutriente.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pains.map((pain, i) => (
            <Reveal
              key={pain}
              delay={i * 0.08}
              className="group relative rounded-[1.75rem] border border-hair bg-pearl p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift md:p-10"
            >
              <span className="font-serif text-5xl italic text-gold-soft">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="hairline-gold mt-6 w-16" />
              <p className="mt-6 font-serif text-2xl leading-snug text-espresso md:text-[1.7rem]">
                {pain}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
