import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './src/index';
import List from './src/components/List';
import Watch from './src/components/Watch';
export default (
  <Route path='/' component={App}>
    <IndexRoute component={List} />
    <Route path='watch' component={Watch} />
    <Route path='*' component={App} />
  </Route>
);