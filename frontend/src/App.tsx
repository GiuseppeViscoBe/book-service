import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'


const App = () => {
  return (
    <Routes>
      <Route path='' element={<CreateBook />} />
      <Route path='' element={<ShowBook />} />
      <Route path='' element={<EditBook />} />
      <Route path='' element={<Home />} />
      <Route path='' element={} />
    </Routes>
  )
}

export default App