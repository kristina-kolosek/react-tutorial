import React, {Component} from 'react';
import './HeaderComponent.css';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="headerComponent">
        <div className="notesTitle">
          Notes
        </div>
        <button class="deleteBtn">
          <img
            src={require('./remove.png')}
            className="deleteImage"
          />
        </button>
        <button class="saveBtn">
          <img
            src={require('./save.png')}
            className="saveImage"
          />
        </button>
      </div>
    )
  }
}

export default HeaderComponent;
