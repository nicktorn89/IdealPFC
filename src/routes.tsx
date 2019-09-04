import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Lines } from 'react-preloaders';

const Main = lazy(() => import('./modules/Main'));

const routes = () =>
  <Router>
    <Suspense fallback={<Lines />}>
      <Route exact={true} path='/' component={Main} />
    </Suspense>
  </Router>;
  
export default routes;
