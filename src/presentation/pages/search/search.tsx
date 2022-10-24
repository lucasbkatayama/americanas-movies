import React, { useState, useEffect } from 'react'
import Styles from './search-styles.scss'
import { Header, Footer, Status } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { TinyMovieModel } from '@/domain/models'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Search: React.FC<Props> = (props: Props) => {
  const { validation } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [result, setResult] = useState<TinyMovieModel[]>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    setIsCorrect(validation.validate('search', search))
  }, [search])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setIsLoading(true)
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
