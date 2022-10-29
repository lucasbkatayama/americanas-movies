import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import Search from './search'
import { ValidationSpy } from '@/presentation/test/mock-validation'
import { faker } from '@faker-js/faker'
import { SearchMoviesSpy } from '@/presentation/test/mock-search-movies'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
  searchMoviesSpy: SearchMoviesSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const searchMoviesSpy = new SearchMoviesSpy()
  const sut = render(<Search validation={validationSpy} searchMovies={searchMoviesSpy} />)
  return {
    sut,
    validationSpy,
    searchMoviesSpy
  }
}

describe('Search Component', () => {
  afterEach(cleanup)

  test('Should start with initial state', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })

  test('Should call Validation with correct value', () => {
    const { sut, validationSpy } = makeSut()
    const searchInput = sut.getByTestId('search')
    const search = faker.random.word()
    fireEvent.input(searchInput, { target: { value: search } })
    expect(validationSpy.fieldValue).toBe(search)
  })

  test('Should enable button if form is valid', () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.isCorrect = true
    const searchInput = sut.getByTestId('search')
    fireEvent.input(searchInput, { target: { value: 'any_text' } })
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(false)
  })

  test('Should show loading on submit', () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.isCorrect = true
    const searchInput = sut.getByTestId('search')
    fireEvent.input(searchInput, { target: { value: 'any_text' } })
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    fireEvent.click(submitButton)
    const loading = sut.getByTestId('loading')
    expect(loading).toBeTruthy()
  })

  test('Should call SearchMovies with correct values', () => {
    const { sut, validationSpy, searchMoviesSpy } = makeSut()
    validationSpy.isCorrect = true
    const searchInput = sut.getByTestId('search')
    const search = faker.random.word()
    fireEvent.input(searchInput, { target: { value: search } })
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    fireEvent.click(submitButton)
    expect(searchMoviesSpy.params).toEqual({
      s: search
    })
  })

  test('Should call SearchMovies only once', () => {
    const { sut, validationSpy, searchMoviesSpy } = makeSut()
    validationSpy.isCorrect = true
    const searchInput = sut.getByTestId('search')
    const search = faker.random.word()
    fireEvent.input(searchInput, { target: { value: search } })
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    fireEvent.click(submitButton)
    fireEvent.click(submitButton)
    expect(searchMoviesSpy.callsCount).toBe(1)
  })
})
