import React from 'react'
import Styles from './status-styles.scss'
import { Loading } from '@/presentation/components'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Status: React.FC = (props: Props) => {
  return (
    <div className={Styles.errorWrap}>
      <span className={Styles.error}>Erro</span>
      <Loading />
    </div>
  )
}

export default Status
