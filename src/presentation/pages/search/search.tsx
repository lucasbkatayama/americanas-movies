import React, { useState, useEffect } from 'react'
import Styles from './search-styles.scss'
import { Header, Footer, Status } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { TinyMovieModel } from '@/domain/models'
import { Validation } from '@/presentation/protocols/validation'
import { SearchMovies } from '@/domain/usecases'

type Props = {
  validation: Validation
  searchMovies: SearchMovies
}

const Search: React.FC<Props> = (props: Props) => {
  const { validation, searchMovies } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [result, setResult] = useState<TinyMovieModel[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    setIsCorrect(validation.validate(searchValue))
  }, [searchValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (isLoading) return
      setIsLoading(true)
      await searchMovies.search(searchValue)
    } catch (error) {
      setIsLoading(false)
      setErrorMessage(error.message)
    }
  }

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={result}>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <div className={Styles.inputWrap}>
            <input data-testid='search' type="search" name="search" placeholder="Procure seu Filme" onChange={handleChange} />
          </div>
          <button data-testid='submit' disabled={!isCorrect} type="submit">Buscar</button>
        </form>
      </Context.Provider>
      <Status isLoading={isLoading} errorMessage={errorMessage} />
      <Footer />
    </div>
  )
}

export default Search
