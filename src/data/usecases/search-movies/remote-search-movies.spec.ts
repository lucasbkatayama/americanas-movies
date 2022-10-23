import { HttpGetClientSpy } from '@/data/test/mock-http-client'
import { RemoteSearchMovies } from './remote-search-movies'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RemoteSearchMovies
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteSearchMovies(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteSearchMovies', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.search()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
