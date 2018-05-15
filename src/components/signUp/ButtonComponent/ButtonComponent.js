import React from 'react';
import './ButtonComponent.css';

function ButtonComponent(props) {
  return(
    <button className="formBtn" disabled={props.disabled}>
      NEXT
    </button>
  )
}

export default ButtonComponent;
