import React from 'react';
import './ButtonComponent.css';

function ButtonComponent(props) {
  return(
    <button className="formB" disabled={props.disabled}>
      Next
    </button>
  )
}

export default ButtonComponent;
