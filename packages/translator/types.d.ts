import type { BaseValidationOptions, ErrorFormattingOptions, ValidationOptions } from 'joi'

export type Language = 'en' | 'es'

export type CustomErrorFormattingOptions = Omit<ErrorFormattingOptions, 'language'>

export interface CustomValidationOptions extends Omit<BaseValidationOptions, 'errors'> {
  errors?: CustomErrorFormattingOptions
  language?: Language
}

export declare function createValidationOptions(
  language?: Language,
  options?: CustomValidationOptions
): ValidationOptions

export interface Messages {
  'symbol.base': string
  'symbol.map': string
  'string.alphanum': string
  'string.base': string
  'string.base64': string
  'string.creditCard': string
  'string.dataUri': string
  'string.domain': string
  'string.email': string
  'string.empty': string
  'string.guid': string
  'string.hex': string
  'string.hexAlign': string
  'string.hostname': string
  'string.ip': string
  'string.ipVersion': string
  'string.isoDate': string
  'string.isoDuration': string
  'string.length': string
  'string.lowercase': string
  'string.max': string
  'string.min': string
  'string.normalize': string
  'string.token': string
  'string.pattern.base': string
  'string.pattern.name': string
  'string.pattern.invert.base': string
  'string.pattern.invert.name': string
  'string.trim': string
  'string.uri': string
  'string.uriCustomScheme': string
  'string.uriRelativeOnly': string
  'string.uppercase': string
  'number.base': string
  'number.greater': string
  'number.infinity': string
  'number.integer': string
  'number.less': string
  'number.max': string
  'number.min': string
  'number.multiple': string
  'number.negative': string
  'number.port': string
  'number.positive': string
  'number.precision': string
  'number.unsafe': string
  'object.and': string
  'object.assert': string
  'object.base': string
  'object.instance': string
  'object.length': string
  'object.max': string
  'object.min': string
  'object.missing': string
  'object.nand': string
  'object.oxor': string
  'object.pattern.match': string
  'object.refType': string
  'object.regex': string
  'object.rename.multiple': string
  'object.rename.override': string
  'object.schema': string
  'object.unknown': string
  'object.with': string
  'object.without': string
  'object.xor': string
  'function.arity': string
  'function.class': string
  'function.maxArity': string
  'function.minArity': string
  'date.base': string
  'date.format': string
  'date.greater': string
  'date.less': string
  'date.max': string
  'date.min': string
  'date.format.iso': string
  'date.format.javascript': string
  'date.format.unix': string
  'boolean.base': string
  'binary.base': string
  'binary.length': string
  'binary.max': string
  'binary.min': string
  'array.base': string
  'array.excludes': string
  'array.hasKnown': string
  'array.hasUnknown': string
  'array.includes': string
  'array.includesRequiredBoth': string
  'array.includesRequiredKnowns': string
  'array.includesRequiredUnknowns': string
  'array.length': string
  'array.max': string
  'array.min': string
  'array.orderedLength': string
  'array.sort': string
  'array.sort.mismatching': string
  'array.sort.unsupported': string
  'array.sparse': string
  'array.unique': string
  'any.custom': string
  'any.default': string
  'any.failover': string
  'any.invalid': string
  'any.only': string
  'any.ref': string
  'any.required': string
  'any.unknown': string
  'alternatives.all': string
  'alternatives.any': string
  'alternatives.match': string
  'alternatives.one': string
  'alternatives.types': string
}

export declare const messages: Record<Language, Messages>

export { ErrorFormattingOptions, ValidationOptions }
