import { composeMessage, whatsappHref } from '../lib/contact'

const href = whatsappHref(
  composeMessage({
    nota: 'Vi o site e quero conversar sobre uma leitura metabólica.',
  }),
)

export default function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden">
      <a href={href} target="_blank" rel="noreferrer" className="btn-primary w-full shadow-lift">
        Escrever no WhatsApp
      </a>
    </div>
  )
}
