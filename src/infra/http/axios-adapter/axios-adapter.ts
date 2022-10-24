import { HttpGetClient, HttpGetParams, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosAdapter implements HttpGetClient<any, any> {
  async get (params: HttpGetParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.get(params.url, params.params)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
