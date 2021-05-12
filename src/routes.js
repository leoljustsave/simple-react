import { Normal } from '@/page/Normal';
import { WithQuery } from '@/page/WithQuery';

export const routes = [
  {
    path: ['/normal'],
    exact: true,
    component: Normal,
  },
  {
    path: ['/withQuery'],
    exact: true,
    component: WithQuery,
  },
];
