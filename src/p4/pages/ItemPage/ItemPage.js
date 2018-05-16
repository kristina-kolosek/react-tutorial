import React, { Component } from 'react';
import {
  NavLink,
} from 'react-router-dom';

class ItemPage extends Component {
  render() {
    const name = this.props.match.params.name;
    console.log(this.props);
    return (
      <div>
        <h1>
          Item stranica { name }
        </h1>
        <NavLink to="/">
          Go to home page
        </NavLink>
      </div>
    )
  }
}

export default ItemPage;
