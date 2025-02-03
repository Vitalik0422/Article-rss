import { useRoutes } from 'react-router';
import { routes } from '../../routes/routes';

export const App = () => {
  return useRoutes(routes);
};
