/* eslint-disable react-refresh/only-export-components */
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

const Home = lazy(() => import('./pages/home.tsx'));
const Unified = lazy(() => import('./pages/unified.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='unified'
          element={
            <Suspense fallback={<>Loading app...</>}>
              <Unified />
            </Suspense>
          }
        />
        <Route
          path='/'
          element={
            <Suspense fallback={<>Loading app...</>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
