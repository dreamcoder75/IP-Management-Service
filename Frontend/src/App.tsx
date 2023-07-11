import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard/dashboard';
import PatentView from './pages/Patent/patentView';
import Loader from './common/Loader';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          <Route path = "/patentView" element={<PatentView />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
