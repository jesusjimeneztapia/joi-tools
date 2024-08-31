import { readFileSync } from 'fs'

const urlJsonEs = new URL('./es.json', import.meta.url)
const urlJsonEn = new URL('./en.json', import.meta.url)

const esLabels = JSON.parse(readFileSync(urlJsonEs))
const enLabels = JSON.parse(readFileSync(urlJsonEn))

const LABELS = {
  es: esLabels,
  en: enLabels,
}

export function getLabels(language) {
  const labels = LABELS[language]
  return labels ?? LABELS.en
}
