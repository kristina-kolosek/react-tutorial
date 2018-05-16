import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import ItemPage from './pages/ItemPage/ItemPage';


class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/about"
            component={AboutPage}
          />
          <Route
            exact
            path="/item/:name"
            component={ItemPage}
          />
          <Route
            exact
            path="/item"
            component={ItemPage}
          />
          <Route
            exact
            path="/"
            component={HomePage}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
