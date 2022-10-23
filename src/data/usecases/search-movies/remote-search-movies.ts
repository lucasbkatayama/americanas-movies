import { HttpGetClient } from '@/data/protocols/http/http-get-client'

export class RemoteSearchMovies {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async search (): Promise<void> {
    await this.httpGetClient.get(this.url)
  }
}
