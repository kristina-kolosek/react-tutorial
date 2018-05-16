import React, {Component} from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './HeaderComponent.css';

function HeaderComponent(props) {
    return (
      <div className="headerComponent">
        <div className="notesTitle">
          Notes
        </div>
        <div className="btns">
          <ButtonComponent
            path="./remove.png"
            className="removeBtn"
            handleClick={props.handleDelete}
          />
          <ButtonComponent
            path="./save.png"
            className="saveBtn"
            handleClick={props.handleSave}
          />
        </div>
      </div>
    )
}

export default HeaderComponent;
