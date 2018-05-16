import React, { Component } from 'react';

import InputField from '../InputField/InputField';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (type) => (event) => {
    let newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  }

  handleClick = () => {
    alert(
      `Email: ${this.state.email}\nPassword: ${this.state.password}`
    );
  }

  render() {
    return (
      <div>
        <InputField
          onChange={this.handleChange("email")}
          placeholder="Email"
          type={"email"}
          value={this.state.email}
        />
        <InputField
          onChange={this.handleChange("password")}
          placeholder="Password"
          type={"password"}
          value={this.state.password}
        />
        <button onClick={this.handleClick}>
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
