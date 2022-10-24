import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { SearchMoviesParams } from '@/domain/usecases/search-movies'

export class RemoteSearchMovies {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async search (params: SearchMoviesParams): Promise<void> {
    await this.httpGetClient.get({
      url: this.url,
      params
    })
  }
}
