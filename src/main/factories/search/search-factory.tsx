import React from 'react'
import { RemoteSearchMovies } from '@/data/usecases/search-movies/remote-search-movies'
import { AxiosAdapter } from '@/infra/http/axios-adapter/axios-adapter'
import { Search } from '@/presentation/pages'
import { RequiredFieldValidation } from '@/validation/required-field/required-field'

export const makeSearch: React.FC = () => {
  const url = 'http://www.omdbapi.com/?&apikey=87dfe312'
  const axiosAdapter = new AxiosAdapter()
  const remoteSearchMovies = new RemoteSearchMovies(url, axiosAdapter)
  const requiredFieldValidation = new RequiredFieldValidation()
  return (
    <Search
      searchMovies={remoteSearchMovies}
      validation={requiredFieldValidation}
    />
  )
}
