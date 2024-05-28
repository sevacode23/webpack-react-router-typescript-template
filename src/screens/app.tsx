import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Main } from './main';
import { Admin } from './admin';
import { Menu } from './menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/admin', element: <Admin /> },
      { path: '/menu', element: <Menu /> },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
