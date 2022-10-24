import React from 'react'
import Styles from './search-styles.scss'
import Loading from '../../components/loading/loading'
import Logo from '@/presentation/components/logo/logo'

const Search: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
      </header>
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
      <footer className={Styles.footer}>

      </footer>
    </div>
  )
}

export default Search
