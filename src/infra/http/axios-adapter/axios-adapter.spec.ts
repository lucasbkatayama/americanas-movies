import { AxiosAdapter } from './axios-adapter'
import { mockGetRequest } from '@/data/test'
import { mockAxios } from '@/infra/test'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosAdapter
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosAdapter()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosAdapter', () => {
  test('Should call axios with correct values', async () => {
    const request = mockGetRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.get(request)
    expect(mockedAxios.get).toHaveBeenCalledWith(request.url, request.params)
  })

  test('Should return correct statusCode and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.get(mockGetRequest())
    expect(promise).toEqual(mockedAxios.get.mock.results[0].value)
  })
})
