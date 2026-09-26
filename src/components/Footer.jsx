import { CLINIC, composeMessage, mailtoHref, whatsappHref } from '../lib/contact'
import shinkaKanji from '../assets/shinka-kanji.png'
import shinkaWordmark from '../assets/shinka-wordmark.png'

const whatsapp = whatsappHref(
  composeMessage({
    nota: 'Vi o site e quero conversar sobre uma leitura metabólica.',
  }),
)

const linkClass = 'transition hover:text-gold-pale'

export default function Footer() {
  return (
    <footer className="bg-night px-5 pb-28 pt-20 text-sand md:px-8 md:pb-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-4xl text-pearl">
              Clara <em className="text-gold-soft">Mendes</em>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-taupe">
              {CLINIC.name} · CRN-3 18472
              <br />
              Nutrição metabólica de precisão. São Paulo e online.
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold-soft">Estúdio</p>
            <p className="mt-5 text-sm leading-relaxed">
              <a href={CLINIC.mapsUrl} target="_blank" rel="noreferrer" className={linkClass}>
                Rua Harmonia, 412
                <br />
                Vila Madalena, São Paulo
              </a>
              <br />
              <span className="text-taupe">{CLINIC.hours}</span>
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold-soft">Fale com a Clara</p>
            <div className="mt-5 grid gap-2.5 text-sm">
              <a href={whatsapp} target="_blank" rel="noreferrer" className={linkClass}>
                WhatsApp · {CLINIC.whatsappDisplay}
              </a>
              <a href={mailtoHref(composeMessage({}))} className={linkClass}>
                {CLINIC.email}
              </a>
              <a href={CLINIC.instagramUrl} target="_blank" rel="noreferrer" className={linkClass}>
                @{CLINIC.instagram}
              </a>
            </div>
          </div>
          <div>
            <p className="eyebrow text-gold-soft">A primeira linha</p>
            <p className="mt-5 text-sm leading-relaxed text-taupe">
              Você escreve. A clínica lê no horário de atendimento. Sem cadastro,
              sem a doutora te ligando.
            </p>
          </div>
        </div>
        <div className="hairline-gold mt-16 opacity-40" />
        <div className="mt-6 grid items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-taupe md:grid-cols-[1fr_auto_1fr]">
          <span className="text-center md:text-left">© {new Date().getFullYear()} Clara Mendes</span>
          <ShinkaBadge />
          <span className="text-center font-serif text-sm normal-case italic tracking-normal text-gold-soft md:text-right">
            Sem promessa. Com método.
          </span>
        </div>
      </div>
    </footer>
  )
}

function ShinkaBadge() {
  return (
    <div className="mx-auto rounded-2xl border border-hair-dark bg-[#15110f] px-6 py-3.5 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]">
      <p className="text-center text-[10px] font-medium uppercase tracking-[0.38em] text-taupe">
        Desenvolvido por
      </p>
      <div className="mt-2.5 flex items-center justify-center gap-3.5">
        <img src={shinkaKanji} alt="進化" className="h-8 w-auto" />
        <span className="h-8 w-px bg-hair-dark" aria-hidden="true" />
        <div className="flex flex-col items-start gap-1.5">
          <img src={shinkaWordmark} alt="Shinka" className="h-3 w-auto" />
          <span className="text-[8px] font-medium uppercase leading-none tracking-[0.42em] text-taupe">
            Software &amp; IA
          </span>
        </div>
      </div>
    </div>
  )
}
