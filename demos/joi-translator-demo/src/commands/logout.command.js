import { app } from '../app.js'

export async function logoutCommand() {
  app.logout()
}
