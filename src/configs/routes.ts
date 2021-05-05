/**
 * 路由配置
 */
import React, { ReactNode } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import HomePage from '../pages/home';
import Detail from '../pages/detail';
import { flatRouter } from '../utils/utils';

export interface Route {
  path: string;
  exact?: boolean;
  name: string;
  icon?: ReactNode;
  component: React.FC<any>;
  children?: Route[];
}

export const Routes: Route[] = [
  {
    path: '/home',
    exact: true,
    name: '首页',
    icon: HomeOutlined,
    component: HomePage,
  },
  {
    name: '详情',
    path: '/detail',
    icon: HomeOutlined,
    component: Detail,
    children: [
      {
        name: '样例',
        path: '/demo',
        component: Detail,
      },
    ],
  },
];

export const flatRoutes = flatRouter(Routes);