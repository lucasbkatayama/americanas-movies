import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, InvalidCredentialsError, NotFoundError } from '@/domain/errors'
import { SearchMovies, SearchMoviesResponse } from '@/domain/usecases'

export type RemoteSearchMoviesParams = {
  s: string
}

export class RemoteSearchMovies implements SearchMovies {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<RemoteSearchMoviesParams, any>
  ) {}

  async search (value: string): Promise<SearchMoviesResponse> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url,
      params: { s: value }
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: {
        if (httpResponse.body.Response === 'False') throw new NotFoundError()
        return httpResponse.body
      }
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
