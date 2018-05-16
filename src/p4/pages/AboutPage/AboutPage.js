import React, { Component } from 'react';
import {
  Redirect,
  NavLink,
  Route,
} from 'react-router-dom';

class AboutPage extends Component {
  constructor() {
    super();
    this.state = {
      redirectHome: false,
    }
  }

  handleButtonClick = () => {
    this.setState((prevState) => {
      return {
        redirectHome: true,
      }
    });
  }

  render() {
    if (this.state.redirectHome) {
      return (
        <Redirect
          to="/"
        />
      )
    }
    return (
      <div>
        <h1>
          About stranica
        </h1>
        <button
          onClick={this.handleButtonClick}
        >
          Go to home page
        </button>
      </div>
    )
  }
}

export default AboutPage;
