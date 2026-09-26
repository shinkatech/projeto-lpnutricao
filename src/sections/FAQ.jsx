import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'

const items = [
  {
    q: 'Isso é só mais uma dieta?',
    a: 'Não. Dieta pede obediência. O Protocolo Sinal parte de uma leitura. Se o corpo recusar o plano, o plano muda — não a sua moral.',
  },
  {
    q: 'Já tentei de tudo. Por que agora?',
    a: 'Porque a maioria dos “tudos” foi o mesmo método com capa nova. Aqui o ponto de partida é o que o seu metabolismo está fazendo agora.',
  },
  {
    q: 'Como eu falo com você?',
    a: 'Você escreve — WhatsApp, e-mail ou o estúdio. A clínica responde em horário comercial. A doutora não te procura.',
  },
  {
    q: 'Quanto custa?',
    a: 'O valor da primeira conversa está no WhatsApp e no e-mail. Você pergunta. O Protocolo de 12 semanas é outro contrato, só se fizer sentido.',
  },
]

function Item({ item, open, onToggle }) {
  return (
    <div
      className={`rounded-3xl border transition-colors duration-500 ${
        open ? 'border-gold-soft/60 bg-pearl shadow-soft' : 'border-hair bg-pearl/40 hover:bg-pearl/70'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
      >
        <span className="font-serif text-2xl leading-snug text-espresso md:text-[1.7rem]">
          {item.q}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg transition duration-500 ${
            open ? 'rotate-45 border-gold bg-gold text-pearl' : 'border-hair text-cocoa'
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl px-6 pb-7 text-[15px] leading-relaxed text-cocoa md:px-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal>
          <p className="eyebrow text-gold">Perguntas</p>
          <h2 className="mt-5 font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[0.95]">
            O que costumam <em className="gold-text">perguntar.</em>
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cocoa">
            Ficou alguma dúvida? Escreva — a resposta vem no horário de atendimento.
          </p>
        </Reveal>
        <Reveal className="grid gap-3">
          {items.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
