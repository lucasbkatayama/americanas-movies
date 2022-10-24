import React, { useState } from 'react'
import Styles from './search-styles.scss'
import { Header, Footer, Status } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { TinyMovieModel } from '@/domain/models'

const Search: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [result, setResult] = useState<TinyMovieModel[]>([])

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={result}>q
        <form className={Styles.form}>
          <div className={Styles.inputWrap}>
            <input type="search" name="search" placeholder="Procure seu Filme" />
          </div>
          <button data-testid='submit' disabled type="submit">Buscar</button>
        </form>
      </Context.Provider>
      <Status isLoading={isLoading} errorMessage={errorMessage} />
      <Footer />
    </div>
  )
}

export default Search
