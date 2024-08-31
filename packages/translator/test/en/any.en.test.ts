import Joi from 'joi'
import { describe, expect, it } from 'vitest'
import { createValidationOptions } from '../../src/index'
import enAny from '../../src/lang/en/any.en.json'
import { replaceInMessage } from '../helpers'

describe('Type ANY in English', () => {
  it('any.custom', () => {
    const customErrorMessage = 'must be 8 characters'
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

    const { error } = schema.validate(data, createValidationOptions('en'))
    const message = replaceInMessage(enAny['any.custom'], {
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

    const { error } = schema.validate(data, createValidationOptions('en'))
    const message = replaceInMessage(enAny['any.invalid'], {
      label: 'phone',
    })
    expect(error?.message).toEqual(message)
  })

  it('any.required', () => {
    const schema = Joi.object({
      name: Joi.string().required(),
    })

    const data = {}

    const { error } = schema.validate(data, createValidationOptions('en'))
    const message = replaceInMessage(enAny['any.required'], { label: 'name' })
    expect(error?.message).toEqual(message)
  })
})
