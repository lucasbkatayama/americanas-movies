import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, InvalidCredentialsError } from '@/domain/errors'
import { SearchMovies, SearchMoviesParams } from '@/domain/usecases'
import { TinyMovieModel } from '@/domain/models'

export class RemoteSearchMovies implements SearchMovies {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<SearchMoviesParams, TinyMovieModel[]>
  ) {}

  async search (params: SearchMoviesParams): Promise<TinyMovieModel[]> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url,
      params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
