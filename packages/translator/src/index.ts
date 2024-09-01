import { messages } from '@messages/index'

import type {
  CustomValidationOptions,
  ErrorFormattingOptions,
  Language,
  ValidationOptions,
} from '../types'

export function createValidationOptions(
  language: Language = 'en',
  options?: CustomValidationOptions
): ValidationOptions {
  const errors: ErrorFormattingOptions = options?.errors ?? {}
  errors.language = language
  return {
    ...options,
    errors,
    messages: messages,
  }
}

export { messages }
