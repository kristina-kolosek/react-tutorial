import React, { Component } from 'react';
import InputComponent from '../InputComponent/InputComponent';
import LoginButtonComponent from '../LoginButtonComponent/LoginButtonComponent';
class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      usernameValue: "",
      passwordValue: ""
    };
  }

  handleChange = (event) => {
    if(event.target.type == 'text') {
      this.setState({
        usernameValue: event.target.value
      });
      console.log(this.state.usernameValue)
    } else {
      this.setState({
        passwordValue: event.target.value
      });
      console.log(this.state.passwordValue)
    }
  }

  handleClick = (event) => {
    alert(this.state.usernameValue + ' ' + this.state.passwordValue);
  }

  render() {
    return (
      <div>
        <InputComponent
          type="text"
          usernameValue = {this.state.usernameValue}
          handleChange = {this.handleChange}
        />
        <InputComponent
          type="password"
          passwordValue = {this.state.passwordValue}
          handleChange={this.handleChange}
        />
        <LoginButtonComponent
          handleClick = {this.handleClick}
         />
      </div>
    );
  }
}
export default LoginComponent;
