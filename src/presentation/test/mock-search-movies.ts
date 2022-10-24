import { TinyMovieModel } from '@/domain/models'
import { mockTinyMovieModel } from '@/domain/test'
import { SearchMovies, SearchMoviesParams } from '@/domain/usecases'

export class SearchMoviesSpy implements SearchMovies {
  movies = mockTinyMovieModel()
  params: SearchMoviesParams
  callsCount = 0

  async search (params: SearchMoviesParams): Promise<TinyMovieModel[]> {
    this.params = params
    this.callsCount++
    return await Promise.resolve(this.movies)
  }
}
