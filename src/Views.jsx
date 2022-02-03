import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Liceu from './pages/Liceu';
import NotFound from './pages/NotFound';
import Teste from './pages/Teste';

function Views() {
  return (
    <Routes>
      <Route index element={<Liceu />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/resurse" element={<Liceu />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  );
}

export default Views;
