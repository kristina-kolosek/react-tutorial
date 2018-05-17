import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ItemListPage from './pages/ItemListPage/ItemListPage';
import ItemPage from './pages/ItemPage/ItemPage';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={"/item/:id"}
            component={ItemPage}
          />
          <Route
            exact
            path={"/"}
            component={ItemListPage}
          />
        </div>
      </Router>
    )
  }
}

export default AppRouter;
