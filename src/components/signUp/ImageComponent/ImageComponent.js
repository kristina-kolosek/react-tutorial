import React, { Component } from 'react';
import './ImageComponent.css';

class ImageComponent extends Component {
  constructor() {
    super();
    this.state = {
      image: ""
    }
  }
  imagePick = () => {
    this._fileUpload.click();
  }

  imagePicked = (event) => {
      //console.log(event.target.value);
      let filePath = event.target.value;
      let tokens = [];
      tokens = filePath.split('\\');
      console.log(tokens[tokens.length-1])
      this.setState({image: require('./' + tokens[tokens.length-1])})
      this.props.handleChange(tokens[tokens.length-1]);
  }

  render() {
    return (
      <div>
        <div
          onClick={this.imagePick}
          className="imageHolder"
        >
        <img src={this.state.image} className="image" />
        </div>
        <input
          type="file"
          ref={(refElement) => this._fileUpload=refElement} className="fileButton"
          onChange={this.imagePicked}
        />
      </div>
    )
  }
}

export default ImageComponent
