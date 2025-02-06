import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Layout } from './pages/Layout';
import { routes } from './routes';

export const AppRouter = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.Home} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
