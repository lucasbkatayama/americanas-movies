import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { RemoteSearchMovies } from './remote-search-movies'

describe('RemoteSearchMovies', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    class HttpGetClientSpy implements HttpGetClient {
      url?: string

      async get (url: string): Promise<void> {
        this.url = url
        return await Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteSearchMovies(url, httpGetClientSpy)
    await sut.search()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
