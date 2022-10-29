export class NotFoundError extends Error {
  constructor () {
    super('Nada foi encontrado!')
    this.name = 'NotFoundError'
  }
}
