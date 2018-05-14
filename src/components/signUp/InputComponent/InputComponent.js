import React from 'react';
import './InputComponent.css';

function InputComponent(props) {
  return(
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
      className="inputF"
    />
  )
}

export default InputComponent;
