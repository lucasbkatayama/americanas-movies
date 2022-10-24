import { SearchMoviesParams } from '../usecases/search-movies'
import { faker } from '@faker-js/faker'

export const mockSearchMovies = (): SearchMoviesParams => ({
  s: faker.random.word()
})
