import { TinyMovieModel } from '../models/tiny-movie-model'

export interface SearchMovies {
  search: (value: string) => Promise<TinyMovieModel>
}
