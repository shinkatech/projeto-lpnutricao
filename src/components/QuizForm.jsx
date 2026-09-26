import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { composeMessage, mailtoHref, whatsappHref } from '../lib/contact'

const questions = [
  {
    id: 'motivo',
    prompt: 'O que mais te trouxe até aqui?',
    options: [
      { id: 'energia', label: 'Energia que some no meio do dia' },
      { id: 'ciclo', label: 'Corpo que não responde como antes' },
      { id: 'ruido', label: 'Cansaço de recomeçar dieta' },
      { id: 'clareza', label: 'Quero entender, não só seguir regra' },
    ],
  },
  {
    id: 'historico',
    prompt: 'Você já passou por acompanhamento nutricional?',
    options: [
      { id: 'sim-nao', label: 'Sim — e não durou' },
      { id: 'nunca', label: 'Nunca de verdade' },
      { id: 'sim-tempo', label: 'Sim — funcionou por um tempo' },
      { id: 'sozinha', label: 'Sempre tentei sozinha' },
    ],
  },
]

const initial = { motivo: '', historico: '', nome: '', nota: '' }

const fieldClass =
  'rounded-2xl border border-hair bg-ivory/60 px-4 py-3.5 font-sans text-base normal-case tracking-normal text-espresso outline-none transition focus:border-gold focus:bg-pearl'

export default function QuizForm() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(initial)

  const question = questions[step]
  const isCompose = step === questions.length
  const message = useMemo(() => composeMessage(answers), [answers])

  function choose(id) {
    setAnswers((prev) => ({ ...prev, [question.id]: id }))
    setTimeout(() => setStep((s) => s + 1), 220)
  }

  return (
    <div className="rounded-[2rem] border border-hair bg-pearl p-6 shadow-lift md:p-10">
      <div className="mb-6 flex items-center justify-between">
        <span className="eyebrow text-taupe">Sua primeira mensagem</span>
        <span className="font-serif text-lg italic text-gold">
          {String(Math.min(step + 1, 3)).padStart(2, '0')} <span className="text-taupe">/ 03</span>
        </span>
      </div>

      <div className="mb-10 h-1 overflow-hidden rounded-full bg-cream">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold-soft to-gold"
          animate={{ width: `${((step + (isCompose ? 1 : 0)) / 3) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!isCompose ? (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-serif text-3xl italic text-espresso md:text-4xl">
              {question.prompt}
            </h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {question.options.map((option) => {
                const selected = answers[question.id] === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => choose(option.id)}
                    className={`flex items-center gap-3 rounded-2xl border px-5 py-4 text-left text-sm transition duration-300 ${
                      selected
                        ? 'border-gold bg-gold-pale/40 text-espresso'
                        : 'border-hair text-cocoa hover:border-gold-soft hover:bg-ivory'
                    }`}
                  >
                    <span
                      className={`h-4 w-4 shrink-0 rounded-full border transition ${
                        selected ? 'border-gold bg-gold shadow-[inset_0_0_0_3px_#fbf9f5]' : 'border-hair'
                      }`}
                    />
                    {option.label}
                  </button>
                )
              })}
            </div>
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="mt-6 text-xs text-taupe underline decoration-hair underline-offset-4 hover:text-espresso"
              >
                ← Voltar
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="compose"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            className="grid gap-6"
          >
            <div>
              <h3 className="font-serif text-3xl italic text-espresso md:text-4xl">
                Agora é você quem escreve.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cocoa">
                As respostas entram na mensagem. Você abre o canal e envia —
                a Clara não te procura.
              </p>
            </div>

            <label className="eyebrow grid gap-2 text-taupe">
              Seu nome
              <input
                required
                value={answers.nome}
                onChange={(e) => setAnswers((prev) => ({ ...prev, nome: e.target.value }))}
                className={fieldClass}
              />
            </label>

            <label className="eyebrow grid gap-2 text-taupe">
              Recado, se quiser
              <textarea
                rows={3}
                value={answers.nota}
                onChange={(e) => setAnswers((prev) => ({ ...prev, nota: e.target.value }))}
                className={`${fieldClass} resize-none`}
              />
            </label>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <a href={whatsappHref(message)} target="_blank" rel="noreferrer" className="btn-primary">
                Enviar no WhatsApp
              </a>
              <a href={mailtoHref(message, answers.nome)} className="btn-ghost">
                Enviar por e-mail
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs leading-relaxed text-taupe">
                O aplicativo abre com o texto pronto. Confira e aperte enviar.
              </p>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="text-xs text-taupe underline decoration-hair underline-offset-4 hover:text-espresso"
              >
                Refazer as perguntas
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
