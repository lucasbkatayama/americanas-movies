import { TinyMovieModel } from '../models/tiny-movie-model'

export type SearchMoviesParams = {
  s: string
}

export interface SearchMovies {
  search: (value: SearchMoviesParams) => Promise<TinyMovieModel>
}
