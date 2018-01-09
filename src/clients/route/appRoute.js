import React from 'react';
import { Switch, Route } from 'react-router';
import About from '../containers/About';
import Todos from '../containers/Todos';
import Movies from '../containers/Movies';

const routes = [
  {
    path: '/',
    exact: true,
    key: 'root',
    component: Movies,
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
  {
    path: '/movies',
    key: 'movies',
    component: Movies,
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
