import { RemoteSearchMovies, RemoteSearchMoviesParams } from './remote-search-movies'
import { HttpGetClientSpy } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialsError, NotFoundError, UnexpectedError } from '@/domain/errors'
import { mockTinyMovieModel } from '@/domain/test'
import { faker } from '@faker-js/faker'
import { SearchMoviesResponse } from '@/domain/usecases'

type SutTypes = {
  sut: RemoteSearchMovies
  httpGetClientSpy: HttpGetClientSpy<RemoteSearchMoviesParams, any>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<RemoteSearchMoviesParams, SearchMoviesResponse>()
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
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: { Response: 'True' }
    }
    await sut.search(faker.random.word())
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should call HttpGetClient with correct params', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: { Response: 'True' }
    }
    const searchMoviesParams = faker.random.word()
    await sut.search(searchMoviesParams)
    expect(httpGetClientSpy.params).toEqual({ s: searchMoviesParams })
  })

  test('Should throw NotFoundError if response Response returns False', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: { Response: 'False' }
    }
    const searchMoviesParams = faker.random.word()
    const promise = sut.search(searchMoviesParams)
    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('Should throw InvalidCredentialsError if HttpGetClient returns 401', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.search(faker.random.word())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 400', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.search(faker.random.word())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.search(faker.random.word())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.search(faker.random.word())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an array of TinyMoviesModel if HttpGetClient returns 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResult = mockTinyMovieModel()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const movies = await sut.search(faker.random.word())
    expect(movies).toEqual(httpResult)
  })
})
