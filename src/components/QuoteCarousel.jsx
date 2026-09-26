import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const quotes = [
  {
    text: 'Pela primeira vez alguém me perguntou o que acontece às 16h — não o que eu comi no café.',
    name: 'Helena, 41',
    note: '12 semanas · energia estável',
  },
  {
    text: 'Eu não emagreci “rápido”. Eu parei de negociar comigo mesma o dia inteiro.',
    name: 'Rafaela, 36',
    note: 'Protocolo SINAL · ciclo regularizado',
  },
  {
    text: 'Achei que fosse mais uma planilha. Saiu uma conversa sobre o meu sono, o meu turno e a minha glicose.',
    name: 'Marina, 44',
    note: 'Leitura metabólica · 8ª semana',
  },
]

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [playing])

  const quote = quotes[index]

  return (
    <div className="relative text-center">
      <span
        className="pointer-events-none block font-serif text-[7rem] leading-[0.5] text-gold-soft/50"
        aria-hidden="true"
      >
        “
      </span>

      <div className="flex min-h-[15rem] items-center justify-center md:min-h-[13rem]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={quote.name}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mx-auto max-w-3xl font-serif text-[clamp(1.7rem,3.6vw,2.8rem)] italic leading-[1.2] text-pearl">
              {quote.text}
            </p>
            <footer className="mt-8">
              <p className="font-serif text-xl text-gold-pale">{quote.name}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-taupe">
                {quote.note}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-5">
        <div className="flex gap-2.5">
          {quotes.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                setIndex(i)
                setPlaying(false)
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-10 bg-gold-soft' : 'w-1.5 bg-hair-dark hover:bg-taupe'
              }`}
              aria-label={`Ver depoimento de ${item.name}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-hair-dark text-sand transition hover:border-gold-soft"
          aria-label={playing ? 'Pausar depoimentos' : 'Retomar depoimentos'}
        >
          {playing ? (
            <span className="flex gap-[3px]">
              <span className="h-2.5 w-[2px] bg-current" />
              <span className="h-2.5 w-[2px] bg-current" />
            </span>
          ) : (
            <span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-current" />
          )}
        </button>
      </div>
    </div>
  )
}
