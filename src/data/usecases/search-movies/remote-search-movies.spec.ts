import { HttpGetClientSpy } from '@/data/test/mock-http-client'
import { RemoteSearchMovies } from './remote-search-movies'
import { faker } from '@faker-js/faker'
import { mockSearchMovies } from '@/domain/test/mock-search-movies'

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
    await sut.search(mockSearchMovies())
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should call HttpGetClient with correct params', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const searchMoviesParams = mockSearchMovies()
    await sut.search(searchMoviesParams)
    expect(httpGetClientSpy.params).toEqual(searchMoviesParams)
  })
})
