import { IRouterConfig } from 'ice';
import Layout from '@/Layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';
import 测试 from '@/pages/测试';
import Test from '@/pages/Test';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/dashboard', component: Dashboard },
      { path: '/', exact: true, component: Home },
      { component: NotFound },
    ],
  },
  { path: 'test', component: Test },
  { path: 'test', component: 测试 },
];

export default routerConfig;
