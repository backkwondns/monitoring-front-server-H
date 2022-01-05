import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Test } from './pages';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
