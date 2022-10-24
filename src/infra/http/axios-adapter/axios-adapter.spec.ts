import { AxiosAdapter } from './axios-adapter'
import axios from 'axios'
import { faker } from '@faker-js/faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosAdapter => {
  return new AxiosAdapter()
}

describe('AxiosAdapter', () => {
  test('Should call axios with correct URL', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    await sut.get({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
