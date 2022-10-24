import { HttpGetParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosAdapter {
  async get (params: HttpGetParams<any>): Promise<void> {
    await axios(params.url)
  }
}
