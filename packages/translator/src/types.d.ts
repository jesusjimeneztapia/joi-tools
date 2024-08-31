import type { BaseValidationOptions, ErrorFormattingOptions, ValidationOptions } from 'joi'

export type Language = 'en' | 'es'

export type CustomErrorFormattingOptions = Omit<ErrorFormattingOptions, 'language'>

export interface CustomValidationOptions extends Omit<BaseValidationOptions, 'errors'> {
  errors?: CustomErrorFormattingOptions
  language?: Language
}

export { ValidationOptions, ErrorFormattingOptions }

declare function createValidationOptions(
  language?: Language,
  options?: CustomValidationOptions
): ValidationOptions
