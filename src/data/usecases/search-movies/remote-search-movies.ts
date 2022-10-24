import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { SearchMoviesParams } from '@/domain/usecases/search-movies'

export class RemoteSearchMovies {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async search (params: SearchMoviesParams): Promise<void> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url,
      params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
