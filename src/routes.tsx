import { useRoutes } from 'react-router-dom';

import { Index } from '@/page/Index';

export const Routes = () => {
  return useRoutes([{ path: '/', element: <Index /> }]);
};
