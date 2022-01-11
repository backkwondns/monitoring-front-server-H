import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Test, AppLayout, DashBoardContainer, Setting } from './pages';
import RootStore from './stores/root.store';

function App(): JSX.Element {
  const rootStore = new RootStore();
  return (
    <BrowserRouter>
      <Provider {...rootStore}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="dash" element={<DashBoardContainer />} />
            <Route path="setting" element={<Setting />} />
            <Route path="test" element={<Test />} />
            <Route index element={<DashBoardContainer />} />
            <Route path="*" element={<div>404 Not Found!</div>} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
