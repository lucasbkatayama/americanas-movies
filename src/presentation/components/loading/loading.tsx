import React from 'react'
import Styles from './loading-styles.scss'

const Loading: React.FC = () => {
  return (
    <div data-testid='loading' className={Styles.loading}>
      <div />
      <div />
    </div>
  )
}

export default Loading
