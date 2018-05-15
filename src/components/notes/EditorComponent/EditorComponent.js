import React, {Component} from 'react';
import './EditorComponent.css';

class EditorComponent extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="titleInput"
          value={this.props.document.title}
        />
        <textarea
          className="contentInput"
          value={this.props.document.content}
        >

        </textarea>
      </div>
    )
  }
}

export default EditorComponent;
