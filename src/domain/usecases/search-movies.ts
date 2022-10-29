import { TinyMovieModel } from '../models'

export type SearchMoviesResponse = {
  totalResults: string
  Response: string
  Search: TinyMovieModel[]
}

export interface SearchMovies {
  search: (value: string) => Promise<SearchMoviesResponse>
}
