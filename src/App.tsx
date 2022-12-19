import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Search, Watch } from './pages';

export const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  )
}
