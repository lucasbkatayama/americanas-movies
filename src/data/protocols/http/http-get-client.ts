export type HttpGetParams = {
  url: string
  params?: object
}

export interface HttpGetClient {
  get: (params: HttpGetParams) => Promise<void>
}
