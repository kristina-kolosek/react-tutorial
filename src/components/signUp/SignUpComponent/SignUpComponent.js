import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FormComponent from '../FormComponent/FormComponent';
import ImageComponent from '../ImageComponent/ImageComponent';
import './SignUpComponent.css';

class SignUpComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      image: ""
    };
  }
  handleChange = (field) => (newValue) => {
    this.setState((prevState) => {
      let newState = prevState
      newState[field] = newValue
      return {
        newState
      }
    })
  }

  handleClick = (event) => {
    console.log("aa");
  }

  render() {
    return (
      <div className="signUp">
        <HeaderComponent title="Sign Up" />
        <FormComponent
          firstName={this.state.firstName}
          handleFirstName={this.handleChange("firstName")}
          lastName={this.state.lastName}
          handleLastName={this.handleChange("lastName")}
          email={this.state.email}
          handleEmail={this.handleChange("email")}
          password={this.state.password}
          handlePassword={this.handleChange("password")}
        />
        <ImageComponent handleClick={this.handleClick} handleChange={this.handleChange("image")}/>
        <ButtonComponent
          disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.image)}
        />
      </div>
    )
  }
}

export default SignUpComponent;
