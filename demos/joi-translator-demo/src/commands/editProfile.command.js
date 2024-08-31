import joi from 'joi'
import { app } from '../app.js'
import inquirer from 'inquirer'
import { createValidationOptions } from '@joi-tools/translator'

function generateSchema() {
  const { fullname, username, phone, birthday, password } = app.labels.commands.signIn.prompt
  return joi.object({
    fullname: joi.string().required().label(fullname.message.replace(':', '')),
    username: joi.string().required().min(4).label(username.message.replace(':', '')),
    phone: joi.number().positive().label(phone.message.replace(':', '')),
    birthday: joi.date().label(birthday.message.replace(':', '')),
    password: joi.string().min(8).required().label(password.message.replace(':', '')),
  })
}

export async function editProfileCommand() {
  console.clear()

  let finish = false

  const {
    title,
    prompt: { fullname, username, phone, birthday, password, repeatPassword, passwordNotMatch },
  } = app.labels.commands.signIn

  console.log(title)

  const registerSchema = generateSchema()
  const user = app.user

  while (!finish) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'fullname',
        default: user.fullname,
        ...fullname,
      },
      {
        type: 'input',
        name: 'username',
        default: user.username,
        ...username,
      },
      {
        type: 'input',
        name: 'phone',
        default: user.phone,
        ...phone,
      },
      {
        type: 'input',
        name: 'birthday',
        default: user.birthday,
        ...birthday,
      },
      {
        type: 'password',
        name: 'password',
        default: user.password,
        ...password,
      },
      {
        type: 'password',
        name: 'repeatPassword',
        default: user.password,
        ...repeatPassword,
      },
    ])

    const data = {
      fullname: answers.fullname || undefined,
      username: answers.username || undefined,
      phone: answers.phone || undefined,
      birthday: answers.birthday || undefined,
      password: answers.password || user.password,
    }

    const { error } = registerSchema.validate(data, createValidationOptions(app.language))

    if (error || answers.password !== answers.repeatPassword) {
      if (error) {
        console.log(error.message)
      } else {
        console.log(passwordNotMatch)
      }
      console.log(app.labels.commands.tryAgain)
      continue
    }
    app.updateUser(data)
    finish = true
  }
}
