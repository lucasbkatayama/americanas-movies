import { AxiosAdapter } from './axios-adapter'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpGetParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosAdapter => {
  return new AxiosAdapter()
}

const mockGetRequest = (): HttpGetParams<any> => ({
  url: faker.internet.url(),
  params: faker.database.column()
})

describe('AxiosAdapter', () => {
  test('Should call axios with correct URL and verb', async () => {
    const request = mockGetRequest()
    const sut = makeSut()
    await sut.get(request)
    expect(mockedAxios.get).toHaveBeenCalledWith(request.url)
  })
})
