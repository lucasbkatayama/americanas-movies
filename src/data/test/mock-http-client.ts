import { HttpGetClient, HttpGetParams } from '../protocols/http/http-get-client'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  params?: object

  async get (params: HttpGetParams): Promise<void> {
    this.url = params.url
    this.params = params.params
    return await Promise.resolve()
  }
}
