import { HttpResponse } from '.'

export type HttpGetParams<T> = {
  url: string
  params?: T
}

export interface HttpGetClient<T, R> {
  get: (params: HttpGetParams<T>) => Promise<HttpResponse<R>>
}
