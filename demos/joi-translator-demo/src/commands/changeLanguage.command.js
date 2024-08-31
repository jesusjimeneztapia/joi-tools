import inquirer from 'inquirer'
import { app } from '../app.js'

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en',
}

export async function changeLanguageCommand() {
  console.clear()

  const {
    title,
    prompt: { message, back },
  } = app.labels.commands.changeLanguage

  console.log(title)

  const answers = await inquirer.prompt({
    type: 'list',
    name: 'language',
    message,
    choices: [
      { name: 'Español', value: LANGUAGES.SPANISH },
      { name: 'English', value: LANGUAGES.ENGLISH },
      { name: back, value: null },
    ],
  })
  if (answers.language) {
    app.setLanguage(answers.language)
  }
}
