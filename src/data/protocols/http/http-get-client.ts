import { HttpResponse } from './http-response'

export type HttpGetParams = {
  url: string
  params?: object
}

export interface HttpGetClient {
  get: (params: HttpGetParams) => Promise<HttpResponse>
}
