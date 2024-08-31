import { createValidationOptions } from '@joi-tools/translator'
import joi from 'joi'
import { app } from '../app.js'
import inquirer from 'inquirer'

function generateSchema() {
  const { username, password } = app.labels.commands.login.prompt
  return joi.object({
    username: joi.string().required().label(username.message.replace(':', '')),
    password: joi.string().required().label(password.message.replace(':', '')),
  })
}

export async function loginCommand() {
  console.clear()

  let finish = false
  let times = 3

  const {
    title,
    prompt: { username, password, ...prompt },
  } = app.labels.commands.login

  console.log(title)

  const authSchema = generateSchema()

  while (!finish && times > 0) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        ...username,
      },
      {
        type: 'password',
        name: 'password',
        ...password,
      },
    ])

    const data = {
      username: answers.username || undefined,
      password: answers.password || undefined,
    }

    const { error } = authSchema.validate(data, createValidationOptions(app.language))
    if (error) {
      console.log(error.message)
      console.log(app.labels.commands.tryAgain)
      continue
    }

    try {
      app.login(data)
      finish = true
    } catch (error) {
      console.log(error.message)
      console.log(app.labels.commands.tryAgain)
      times--
    }
  }
}
