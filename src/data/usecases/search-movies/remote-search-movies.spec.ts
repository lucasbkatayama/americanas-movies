import { RemoteSearchMovies } from './remote-search-movies'
import { HttpGetClientSpy } from '@/data/test/mock-http-client'
import { mockSearchMovies } from '@/domain/test/mock-search-movies'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
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
    await sut.search(mockSearchMovies())
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should call HttpGetClient with correct params', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const searchMoviesParams = mockSearchMovies()
    await sut.search(searchMoviesParams)
    expect(httpGetClientSpy.params).toEqual(searchMoviesParams)
  })

  test('Should throw InvalidCredentialsError if HttpGetClient returns 401', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.search(mockSearchMovies())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
})
