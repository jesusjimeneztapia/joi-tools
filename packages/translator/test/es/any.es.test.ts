import Joi from 'joi'
import { describe, expect, it } from 'vitest'
import { createValidationOptions } from '../../src/index'
import esAny from '../../src/lang/es/any.es.json'
import { replaceInMessage } from '../helpers'

describe('Type ANY in Spanish', () => {
  it('any.custom', () => {
    const customErrorMessage = 'debe tener 8 caracteres'
    const schema = Joi.object({
      phone: Joi.string().custom((value) => {
        if (value.length !== 8) {
          throw new Error(customErrorMessage)
        }
        return value
      }),
    })

    const data = {
      phone: '123456',
    }

    const { error } = schema.validate(data, createValidationOptions('es'))
    const message = replaceInMessage(esAny['any.custom'], {
      label: 'phone',
      'error.message': customErrorMessage,
    })
    expect(error?.message).toEqual(message)
  })

  it('any.invalid', () => {
    const schema = Joi.object({
      phone: Joi.string().invalid('123456'),
    })

    const data = {
      phone: '123456',
    }

    const { error } = schema.validate(data, createValidationOptions('es'))
    const message = replaceInMessage(esAny['any.invalid'], {
      label: 'phone',
    })
    expect(error?.message).toEqual(message)
  })

  it('any.required', () => {
    const schema = Joi.object({
      name: Joi.string().required(),
    })

    const data = {}

    const { error } = schema.validate(data, createValidationOptions('es'))
    const message = replaceInMessage(esAny['any.required'], { label: 'name' })
    expect(error?.message).toEqual(message)
  })
})
