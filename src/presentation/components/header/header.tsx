import React, { memo } from 'react'
import Logo from '../logo/logo'
import Styles from './header-styles.scss'

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
    </header>
  )
}

export default memo(Header)
