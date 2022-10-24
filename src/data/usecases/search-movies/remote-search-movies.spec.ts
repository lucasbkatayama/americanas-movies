import { RemoteSearchMovies } from './remote-search-movies'
import { HttpGetClientSpy } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { SearchMoviesParams } from '@/domain/usecases'
import { TinyMovieModel } from '@/domain/models'
import { mockSearchMovies, mockTinyMovieModel } from '@/domain/test'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RemoteSearchMovies
  httpGetClientSpy: HttpGetClientSpy<SearchMoviesParams, TinyMovieModel[]>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<SearchMoviesParams, TinyMovieModel[]>()
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

  test('Should throw UnexpectedError if HttpGetClient returns 400', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.search(mockSearchMovies())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.search(mockSearchMovies())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.search(mockSearchMovies())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an array of TinyMoviesModel if HttpGetClient returns 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResult = mockTinyMovieModel()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const movies = await sut.search(mockSearchMovies())
    expect(movies).toEqual(httpResult)
  })
})
