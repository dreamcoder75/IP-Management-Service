import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard/dashboard';
import PatentView from './pages/Patent/patentView';
import Loader from './common/Loader';
import Trademark from './pages/Trademark/trademark';
import Design from './pages/Design/designView';

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
          <Route path = "/trademark" element={<Trademark />}/>
          <Route path = "/design" element={<Design />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
