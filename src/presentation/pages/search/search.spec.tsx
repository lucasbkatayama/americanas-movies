import React from 'react'
import { render } from '@testing-library/react'
import Search from './search'

describe('Search Component', () => {
  test('Should start with initial state', () => {
    const { getByTestId } = render(<Search />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
})
