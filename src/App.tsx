import MasterLayout from 'componetns/Layout/master-layout';
import React, {lazy} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MasterLayout />}>
            <Route path="" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
