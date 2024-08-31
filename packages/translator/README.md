# Translation for Joi

Translated messages from [Joi](https://joi.dev/) validation errors. Base on the Portuguese translated package [joi-translation-pt-br](https://www.npmjs.com/package/joi-translation-pt-br).

## Install

It should be noted that this package is not a replacement for the Joi package, on the contrary, it is a complement to it. So, have Joi installed in the app.

Use the following command for installation:

```
npm install @joi-tools/translator
```

> Please note that this package supports Joi versions between 17.4.0 and 17.13.3

## Supported languages

| Language | Key |         |
| -------- | :-: | :-----: |
| English  | en  | default |
| Español  | es  |         |

## Examples of use

### Validating with schema

Validating the Joi schema by creating its validation options with the language.

```js
import Joi from 'joi'
import { createValidationOptions } from '@joi-tools/translator'

const loginSchema = Joi.object({
  username: joi.string().required(),
  password: joi.string().required().min(8),
})

const language = 'es'
const data = { username: 'someone', password: '123' }

const { error } = loginSchema.validate(data, createValidationOptions(language))

if (error) {
  console.log(error.details)
}
```

The function `createValidationOptions` receives the `language` as the first parameter, the language can be one of the languages ​​supported in this package, and as the second parameter it receives the Joi validation options.

### Specify translated messages

You can also pass translated messages to Joi validation.

```js
import Joi from 'joi'
import { messages } from '@joi-tools/translator'

...
const { error } = loginSchema.validate(data, { messages: messages.es })
```

> If the specified language is not supported by the package, messages will be in English by default.
