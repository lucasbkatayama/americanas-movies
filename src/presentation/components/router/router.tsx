import { Search } from '@/presentation/pages'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@/presentation/styles/globals.scss'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
