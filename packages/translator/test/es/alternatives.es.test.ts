import Joi from 'joi'
import { describe, expect, it } from 'vitest'
import { createValidationOptions } from '../../src/index'
import esAlternatives from '../../src/lang/es/alternatives.es.json'
import { replaceInMessage } from '../helpers'

describe('Type ALTERNATIVES in Spanish', () => {
  it('alternatives.types', () => {
    const schema = Joi.object({
      phone: Joi.alternatives().try(Joi.number(), Joi.string()),
    })
    const data = {
      phone: true,
    }
    const { error } = schema.validate(data, createValidationOptions('es'))
    const message = replaceInMessage(esAlternatives['alternatives.types'], {
      label: 'phone',
      types: ['number', 'string'],
    })
    expect(error?.message).toEqual(message)
  })
})
