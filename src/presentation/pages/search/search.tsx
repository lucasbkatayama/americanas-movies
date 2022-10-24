import React from 'react'
import Styles from './search-styles.scss'
import Loading from '@/presentation/components/loading/loading'
import Header from '@/presentation/components/header/header'
import Footer from '@/presentation/components/footer/footer'

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
      <div className={Styles.errorWrap}>
        <span className={Styles.error}>Erro</span>
        <Loading />
      </div>
      <Footer />
    </div>
  )
}

export default Search
