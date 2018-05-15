import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FormComponent from '../FormComponent/FormComponent';
import ImageComponent from '../ImageComponent/ImageComponent';
import CheckBoxComponent from '../CheckBoxComponent/CheckBoxComponent'
import './SignUpComponent.css';

class SignUpComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      image: "",
      agreedTerms: false,
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

  handleCheck = (event) => {
    this.setState((prevState) => {
      let newState = prevState;
      newState["agreedTerms"] = !prevState["agreedTerms"];
      return {
        newState
      }
    })
  }
  render() {
    return (
      <div className="signUp">
        <HeaderComponent title="SIGN UP" />
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
        <CheckBoxComponent
          handleChange={this.handleCheck}
          value={this.state.agreedTerms}
          className={this.state.agreedTerms ? "checked" : "unchecked"}
        />
        <ButtonComponent
          disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.image && this.state.agreedTerms)}
        />
      </div>
    )
  }
}

export default SignUpComponent;
