import React, {Component} from 'react';
import './EditorComponent.css';

class EditorComponent extends Component {
  handleTitle = (event) => {
    this.props.handleChange("title", event.target.value);
  }

  handleContent = (event) => {
    this.props.handleChange("content", event.target.value);
  }

  render() {
    return (
      <div>
        <div className="inputHolder">
          <input
            type="text"
            className="titleInput"
            placeholder="Title.."
            value={this.props.document.title}
            onChange={this.handleTitle}
          />
        </div>
        <textarea
          placeholder="Body"
          className="contentInput"
          value={this.props.document.content}
          onChange={this.handleContent}
        >
        </textarea>

      </div>
    )
  }
}

export default EditorComponent;
