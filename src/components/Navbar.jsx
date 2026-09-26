import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#metodo', label: 'Método' },
  { href: '#provas', label: 'Vozes' },
  { href: '#faq', label: 'Perguntas' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <div
        className={`mx-auto flex max-w-[1240px] items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-7 ${
          scrolled || open
            ? 'border border-hair/80 bg-pearl/75 shadow-soft backdrop-blur-xl'
            : 'border border-transparent'
        }`}
      >
        <a href="#topo" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-medium tracking-[0.04em]">Clara Mendes</span>
          <span className="hidden text-[10px] uppercase tracking-[0.24em] text-taupe sm:inline">
            Nutrição
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-cocoa transition hover:text-espresso"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn-primary px-5 py-2.5">
            Falar com a Clara
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hair lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-espresso transition ${open ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-espresso transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-[1240px] rounded-3xl border border-hair bg-pearl/95 p-4 shadow-lift backdrop-blur-xl lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-serif text-2xl text-espresso transition hover:bg-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Falar com a Clara
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
