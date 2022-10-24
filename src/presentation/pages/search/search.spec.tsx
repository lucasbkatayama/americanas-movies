import React from 'react'
import { render } from '@testing-library/react'
import Search from './search'

describe('Search Component', () => {
  test('Should not render loading and error on start', () => {
    const { getByTestId } = render(<Search />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
