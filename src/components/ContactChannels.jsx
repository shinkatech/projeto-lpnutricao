import { CLINIC, composeMessage, mailtoHref, whatsappHref } from '../lib/contact'

const channels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    hint: CLINIC.whatsappDisplay,
    href: whatsappHref(
      composeMessage({
        nota: 'Vi o site e quero conversar sobre uma leitura metabólica.',
      }),
    ),
    primary: true,
  },
  {
    id: 'email',
    label: 'E-mail',
    hint: CLINIC.email,
    href: mailtoHref(
      composeMessage({
        nota: 'Vi o site e quero conversar sobre uma leitura metabólica.',
      }),
    ),
  },
  {
    id: 'estudio',
    label: 'Estúdio',
    hint: 'Vila Madalena · hora marcada',
    href: CLINIC.mapsUrl,
  },
]

export default function ContactChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {channels.map((channel) => (
        <a
          key={channel.id}
          href={channel.href}
          target="_blank"
          rel="noreferrer"
          className={`group relative overflow-hidden rounded-[1.75rem] border p-7 transition duration-500 hover:-translate-y-1 ${
            channel.primary
              ? 'border-espresso bg-espresso text-pearl shadow-lift'
              : 'border-hair bg-pearl text-espresso shadow-soft hover:border-gold-soft/70'
          }`}
        >
          {channel.primary && <div className="glow -right-16 -top-16 h-40 w-40 bg-gold/40" />}
          <p className={`eyebrow relative ${channel.primary ? 'text-gold-soft' : 'text-gold'}`}>
            {channel.label}
          </p>
          <p className="relative mt-4 font-serif text-2xl">{channel.hint}</p>
          <p
            className={`relative mt-10 flex items-center justify-between text-[12px] uppercase tracking-[0.16em] ${
              channel.primary ? 'text-sand' : 'text-cocoa'
            }`}
          >
            {channel.id === 'estudio' ? 'Ver no mapa' : 'Abrir e escrever'}
            <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </p>
        </a>
      ))}
    </div>
  )
}
