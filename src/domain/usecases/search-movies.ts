import { TinyMovieModel } from '../models'

export type SearchMoviesParams = {
  s: string
}

export interface SearchMovies {
  search: (value: SearchMoviesParams) => Promise<TinyMovieModel[]>
}
