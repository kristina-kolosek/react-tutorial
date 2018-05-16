import React, {Component} from 'react';
import './ButtonComponent.css';

class ButtonComponent extends Component {
  imagePath = () => {
    return require(`${this.props.path}`)

  }
  render() {
    return (
      <button
        onClick={this.props.handleClick}
        className={`btnComponent ${this.props.className}`}
      >
        <img
          src={this.imagePath()}
          className="image"
        />
      </button>
    )
  }
}

export default ButtonComponent;
