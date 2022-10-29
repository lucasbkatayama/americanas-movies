import { RemoteSearchMoviesParams } from '@/data/usecases/search-movies/remote-search-movies'
import { mockTinyMovieModel } from '@/domain/test'
import { SearchMovies, SearchMoviesResponse } from '@/domain/usecases'

export class SearchMoviesSpy implements SearchMovies {
  response = {
    Response: 'True',
    Search: mockTinyMovieModel(),
    totalResults: '10'
  }

  callsCount = 0
  params: RemoteSearchMoviesParams

  async search (value: string): Promise<SearchMoviesResponse> {
    this.params = { s: value }
    this.callsCount++
    return await Promise.resolve(this.response)
  }
}
