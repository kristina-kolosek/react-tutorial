import React, { Component } from 'react';
import {
  NavLink,
} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>
          Home stranica
        </h1>
        <NavLink to="/about">
          Go to about page
        </NavLink>
      </div>
    )
  }
}

export default HomePage;
