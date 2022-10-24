import { Search } from '@/presentation/pages'
import { ValidationSpy } from '@/presentation/test/mock-validation'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search validation={new ValidationSpy()} />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
