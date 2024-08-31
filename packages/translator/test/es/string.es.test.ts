import Joi from 'joi'
import { describe, expect, it } from 'vitest'
import { createValidationOptions } from '../../src/index'
import esString from '../../src/lang/es/string.es.json'
import { replaceInMessage } from '../helpers'

describe('Type STRING in Spanish', () => {
  it('string.min', () => {
    const schema = Joi.object({
      name: Joi.string().required().min(4),
    })

    const data = { name: 'ho' }

    const { error } = schema.validate(data, createValidationOptions('es'))
    const message = replaceInMessage(esString['string.min'], { label: 'name', limit: 4 })
    expect(error?.message).toEqual(message)
  })
})
