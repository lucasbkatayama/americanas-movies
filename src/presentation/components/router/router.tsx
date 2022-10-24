import { Search } from '@/presentation/pages'
import { SearchMoviesSpy } from '@/presentation/test/mock-search-movies'
import { ValidationSpy } from '@/presentation/test/mock-validation'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search validation={new ValidationSpy()} searchMovies={new SearchMoviesSpy()} />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
