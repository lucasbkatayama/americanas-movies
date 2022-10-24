import { TinyMovieModel } from '../models'

export type SearchMoviesParams = {
  s: string
}

export interface SearchMovies {
  search: (params: SearchMoviesParams) => Promise<TinyMovieModel[]>
}
