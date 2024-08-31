import inquirer from 'inquirer'
import { changeLanguageCommand } from './commands/changeLanguage.command.js'
import { getLabels } from './lang/index.js'
import { quitCommand } from './commands/quit.command.js'
import { loginCommand } from './commands/login.command.js'
import { signInCommand } from './commands/signIn.command.js'
import { logoutCommand } from './commands/logout.command.js'
import { editProfileCommand } from './commands/editProfile.command.js'

const OPTIONS = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  LOGIN: 'LOGIN',
  SIGN_IN: 'SIGN_IN',
  EDIT_PROFILE: 'EDIT_PROFILE',
  LOGOUT: 'LOGOUT',
  QUIT: 'QUIT',
}

const COMMANDS = {
  [OPTIONS.CHANGE_LANGUAGE]: () =>
    changeLanguageCommand((value) => {
      language = value
    }),
  [OPTIONS.LOGIN]: loginCommand,
  [OPTIONS.SIGN_IN]: signInCommand,
  [OPTIONS.EDIT_PROFILE]: editProfileCommand,
  [OPTIONS.LOGOUT]: logoutCommand,
  [OPTIONS.QUIT]: quitCommand,
}

class App {
  finished = false
  users = []
  user = null

  constructor() {
    this.setLanguage()
  }

  setLanguage(language = 'en') {
    this.language = language
    this.setLabels()
  }

  setLabels() {
    this.labels = getLabels(this.language)
  }

  quit() {
    this.finished = true
  }

  login({ username, password }) {
    const foundUser = this.users.find((user) => user.username === username)
    if (!foundUser || foundUser.password !== password) {
      throw new Error(this.labels.commands.invalidCredentials)
    }
    this.user = foundUser
  }

  addUser(user) {
    const foundUser = this.users.find(({ username }) => username === user.username)
    if (foundUser) {
      throw new Error(this.labels.commands.userExists)
    }
    this.users = [...this.users, user]
    this.user = user
  }

  updateUser(user) {
    const index = this.users.findIndex(({ username }) => username === this.user.username)

    this.users[index] = user
    this.user = user
  }

  logout() {
    this.user = null
  }

  welcome() {
    const username = this.user ? `@${this.user.username}, ` : ''
    console.log(`${username}${this.labels.title}`)
  }

  async propmtUser() {
    console.clear()
    this.welcome()

    const { message, ...prompt } = this.labels.prompt

    const choices = this.user ? prompt.choicesLogged : prompt.choices

    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message,
      choices,
    })

    const command = COMMANDS[answers.command]
    if (command) {
      await command()
    }
  }

  async run() {
    while (!this.finished) {
      await this.propmtUser()
    }
  }
}

export const app = new App()
