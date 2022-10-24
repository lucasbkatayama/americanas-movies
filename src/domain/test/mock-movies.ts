import { SearchMoviesParams } from '../usecases/search-movies'
import { TinyMovieModel } from '../models'
import { faker } from '@faker-js/faker'

export const mockSearchMovies = (): SearchMoviesParams => ({
  s: faker.random.word()
})

export const mockTinyMovieModel = (): TinyMovieModel[] => ([
  {
    title: faker.random.word(),
    year: faker.random.numeric(4),
    id: faker.database.mongodbObjectId(),
    type: faker.random.word(),
    poster: faker.internet.url()
  },
  {
    title: faker.random.word(),
    year: faker.random.numeric(4),
    id: faker.database.mongodbObjectId(),
    type: faker.random.word(),
    poster: faker.internet.url()
  }
])
