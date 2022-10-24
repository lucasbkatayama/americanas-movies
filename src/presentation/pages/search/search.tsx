import React from 'react'
import Styles from './search-styles.scss'
import { Header, Footer, Status } from '@/presentation/components'

const Search: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <div className={Styles.inputWrap}>
          <input type="search" name="search" placeholder="Procure seu Filme" />
        </div>
        <button type="submit">Buscar</button>
      </form>
      <Status />
      <Footer />
    </div>
  )
}

export default Search
