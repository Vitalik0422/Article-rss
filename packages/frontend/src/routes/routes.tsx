import { RouteObject } from 'react-router';
import { Login } from '../pages/auth/Login';
import Layout from '../components/Layout';
import Profile from '../pages/profile/Profile';
import ProtectedRouter from '../components/ProtectedRouter';
import Register from '../pages/auth/Register';
import Home from '../pages/home/Home';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,

      },
      {
        path: '/profile',
        element: (
          <ProtectedRouter>
            <Profile />
          </ProtectedRouter>
        ),
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },

];
