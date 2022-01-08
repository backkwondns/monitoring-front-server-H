import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashBoardContainer, Test } from './pages';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardContainer />}>
          <Route path="monitor" element={<DashBoardContainer />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
