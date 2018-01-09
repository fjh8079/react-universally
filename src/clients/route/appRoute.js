import React from 'react';
import { Switch, Route } from 'react-router';
import About from '../containers/About';
import Todos from '../containers/Todos';

const routes = [
  {
    path: '/',
    exact: true,
    key: 'root',
    component: About,
  },
  {
    path: '/about',
    key: 'about',
    component: About,
  },
  {
    path: '/todos',
    key: 'todos',
    component: Todos,
  },
];

const AppRoute = () => (
  <Switch>
    {
      routes.map(route => (
        <Route {...route} />
      ))
    }
  </Switch>
);

export default AppRoute;
