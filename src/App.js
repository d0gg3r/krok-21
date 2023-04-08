import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';

const Layout = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/test',
        element: <Quiz />
      },
      {
        path: '/result',
        element: <Result />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
