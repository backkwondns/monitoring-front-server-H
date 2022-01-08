import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Test, AppLayout, DashBoardContainer } from './pages';
import RootStore from './stores/root.store';

function App(): JSX.Element {
  const rootStore = new RootStore();
  return (
    <BrowserRouter>
      <Provider {...rootStore}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="test" element={<Test />} />
          </Route>
          <Route path="dash" element={<DashBoardContainer />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
