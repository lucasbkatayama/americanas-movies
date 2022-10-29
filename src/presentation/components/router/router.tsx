import { makeSearch } from '@/main/factories/search/search-factory'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={makeSearch({})}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
