import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import BuildListPage from './BuildListPage/BuildListPage';
import BuildDetailsPage from './BuildDetailsPage/BuildDetailsPage';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/details/:num"
            component={BuildDetailsPage}
          />
          <Route
            exact
            path="/"
            component={BuildListPage}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
