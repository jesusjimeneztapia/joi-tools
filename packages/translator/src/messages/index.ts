import type { Language } from '../../types'
import enMessages from './en.messages'
import esMessages from './es.messages'

export const messages: Record<Language, Record<string, string>> = {
  es: esMessages,
  en: enMessages,
}
