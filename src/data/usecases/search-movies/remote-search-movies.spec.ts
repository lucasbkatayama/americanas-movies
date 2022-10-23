import { HttpGetClientSpy } from '@/data/test/mock-http-client'
import { RemoteSearchMovies } from './remote-search-movies'

describe('RemoteSearchMovies', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = 'any_url'
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteSearchMovies(url, httpGetClientSpy)
    await sut.search()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
