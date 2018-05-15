import React, { Component } from 'react';
import './CheckBoxComponent.css';

class CheckBoxComponent extends Component {
  handleCheck = () => {
    this._agreeTerms.click();
  }
  render() {
    return (
      <div className="checkBox">
        <div
          onClick={this.handleCheck}
          className={`mockCheck ${this.props.className}`}
        >
        </div>
        <input
          type="checkbox"
          className="inputCheck"
          ref={(refElement) => this._agreeTerms=refElement}
          onChange={this.props.handleChange}
        />
        <div className="checkText">
          I agree to AppPraises
          <a
            href="#"
            className="termsLink"
          >
            Terms and Conditions
          </a>.
        </div>
      </div>
    )
  }
}

export default CheckBoxComponent;
