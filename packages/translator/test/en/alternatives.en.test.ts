import Joi from 'joi'
import { describe, expect, it } from 'vitest'
import { createValidationOptions } from '../../src/index'
import enAlternatives from '../../src/lang/en/alternatives.en.json'
import { replaceInMessage } from '../helpers'

describe('Type ALTERNATIVES in English', () => {
  it('alternatives.types', () => {
    const schema = Joi.object({
      phone: Joi.alternatives().try(Joi.number(), Joi.string()),
    })
    const data = {
      phone: true,
    }
    const { error } = schema.validate(data, createValidationOptions('en'))
    const message = replaceInMessage(enAlternatives['alternatives.types'], {
      label: 'phone',
      types: ['number', 'string'],
    })
    expect(error?.message).toEqual(message)
  })
})
