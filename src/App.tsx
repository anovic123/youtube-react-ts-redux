import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Search, Watch } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/search" element={<Search />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
