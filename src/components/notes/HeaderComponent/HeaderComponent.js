import React, {Component} from 'react';
import './HeaderComponent.css';

function HeaderComponent(props) {
    return (
      <div className="headerComponent">
        <div className="notesTitle">
          Notes
        </div>
        <button
          className="deleteBtn"
          onClick={props.handleDelete}
        >
          <img
            src={require('./remove.png')}
            className="deleteImage"
          />
        </button>
        <button
          className="saveBtn"
          onClick={props.handleSave}
        >
          <img
            src={require('./save.png')}
            className="saveImage"
          />
        </button>
      </div>
    )
}

export default HeaderComponent;
