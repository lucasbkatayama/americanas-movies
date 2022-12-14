import { TinyMovieModel } from '../models'
import { faker } from '@faker-js/faker'

export const mockTinyMovieModel = (): TinyMovieModel[] => ([
  {
    title: faker.random.word(),
    year: faker.random.numeric(4),
    id: faker.database.mongodbObjectId(),
    type: faker.random.word(),
    poster: faker.image.cats()
  },
  {
    title: faker.random.word(),
    year: faker.random.numeric(4),
    id: faker.database.mongodbObjectId(),
    type: faker.random.word(),
    poster: faker.image.cats()
  }
])
