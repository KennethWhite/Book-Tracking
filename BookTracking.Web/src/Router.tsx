import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout';
import { routes } from './routes';

export const AppRouter = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.Home} element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
