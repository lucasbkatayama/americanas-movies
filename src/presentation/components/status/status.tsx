import React from 'react'
import Styles from './status-styles.scss'
import { Loading } from '@/presentation/components'

type Props = {
  isLoading: boolean
  errorMessage: string
}

const Status: React.FC<Props> = (props: Props) => {
  const { isLoading, errorMessage } = props

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {errorMessage && <span data-testid="main-error" className={Styles.error}>{errorMessage}</span>}
      {isLoading && <Loading />}
    </div>
  )
}

export default Status
