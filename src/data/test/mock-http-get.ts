import { HttpGetParams } from '../protocols/http'
import { faker } from '@faker-js/faker'

export const mockGetRequest = (): HttpGetParams<any> => ({
  url: faker.internet.url(),
  params: faker.database.column()
})
