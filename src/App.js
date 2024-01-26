// components/App.js
import React from 'react';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import MainContainer from './components/MainContainer';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Body />,
    children: [
      {
        path: '/home',
        element: <MainContainer />,
      },
    ]
  },
]);


export const AppLayout = () => (
  <RouterProvider router={appRouter} />
);