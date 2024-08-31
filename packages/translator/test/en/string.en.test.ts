import Joi from 'joi'
import { describe, expect, it } from 'vitest'
import { createValidationOptions } from '../../src/index'
import enString from '../../src/lang/en/string.en.json'
import { replaceInMessage } from '../helpers'

describe('Type STRING in English', () => {
  it('string.min', () => {
    const schema = Joi.object({
      name: Joi.string().required().min(4),
    })

    const data = { name: 'ho' }

    const { error } = schema.validate(data, createValidationOptions('en'))
    const message = replaceInMessage(enString['string.min'], { label: 'name', limit: 4 })
    expect(error?.message).toEqual(message)
  })
})
