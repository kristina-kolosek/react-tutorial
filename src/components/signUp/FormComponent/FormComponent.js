import React, {Component} from 'react';
import './FormComponent.css';
import InputComponent from '../InputComponent/InputComponent'

class FormComponent extends Component {

  handleFirstName = (event) => {
    this.props.handleFirstName(event.target.value);
  }
  handleLastName = (event) => {
    this.props.handleLastName(event.target.value);
  }
  handleEmail = (event) => {
    this.props.handleEmail(event.target.value);
  }
  handlePassword = (event) => {
    this.props.handlePassword(event.target.value);
  }

  render() {
      return(
        <div className="formComponent">
          <InputComponent
            type="text"
            placeholder="First Name *"
            value={this.props.firstName}
            handleChange={this.handleFirstName}
          />
          <InputComponent
            type="text"
            placeholder="Last Name *"
            value={this.props.lastName}
            handleChange={this.handleLastName}
          />
          <InputComponent
            type="email"
            placeholder="Email *"
            value={this.props.email}
            handleChange={this.handleEmail}
          />
          <InputComponent
            type="password"
            placeholder="Password *"
            value={this.props.password}
            handleChange={this.handlePassword}
          />
        </div>
    )
  }
}

export default FormComponent;
