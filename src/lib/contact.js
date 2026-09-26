export const CLINIC = {
  name: 'Dra. Clara Mendes',
  whatsapp: '5511912345678',
  whatsappDisplay: '+55 11 91234-5678',
  email: 'clara@claramendes.ntr',
  instagram: 'claramendes.ntr',
  instagramUrl: 'https://instagram.com/claramendes.ntr',
  hours: 'Terça a sexta, 9h–18h',
  address: 'Rua Harmonia, 412 — Vila Madalena, São Paulo',
  mapsUrl:
    'https://maps.google.com/?q=Rua+Harmonia+412+Vila+Madalena+S%C3%A3o+Paulo',
}

const motivoCopy = {
  energia: 'energia que some no meio do dia',
  ciclo: 'o corpo não responde como antes',
  ruido: 'cansaço de recomeçar dieta',
  clareza: 'quero entender, não só seguir regra',
}

const historicoCopy = {
  'sim-nao': 'já fiz acompanhamento, e não durou',
  nunca: 'nunca fiz acompanhamento de verdade',
  'sim-tempo': 'já fiz acompanhamento, e funcionou por um tempo',
  sozinha: 'sempre tentei sozinha',
}

export function composeMessage({ nome, motivo, historico, nota }) {
  const who = nome?.trim() || 'uma leitora do site'
  const lines = [
    `Olá, Clara. Sou ${who}.`,
    '',
    motivo ? `O que me trouxe até aqui: ${motivoCopy[motivo]}.` : '',
    historico ? `Sobre acompanhamento anterior: ${historicoCopy[historico]}.` : '',
    nota?.trim() ? `\n${nota.trim()}` : '',
    '',
    'Queria conversar sobre uma leitura metabólica.',
  ]

  return lines.filter((line, i, arr) => line !== '' || arr[i - 1] !== '').join('\n')
}

export function whatsappHref(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`
}

export function mailtoHref(message, nome) {
  const subject = nome?.trim()
    ? `Leitura metabólica — ${nome.trim()}`
    : 'Leitura metabólica'
  return `mailto:${CLINIC.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
}
