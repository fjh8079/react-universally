import React from 'react';
import { Switch, Route } from 'react-router';
import About from '../containers/About';
import Selected from '../containers/Selected';
import Search from '../containers/Search';

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
    path: '/selected',
    key: 'selected',
    component: Selected,
  },
  {
    path: '/search',
    key: 'search',
    component: Search,
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
