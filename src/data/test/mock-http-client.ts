import { HttpGetClient, HttpGetParams } from '@/data/protocols/http/http-get-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  params?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async get (params: HttpGetParams): Promise<HttpResponse> {
    this.url = params.url
    this.params = params.params
    return await Promise.resolve(this.response)
  }
}
