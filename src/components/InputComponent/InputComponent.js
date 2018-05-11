import React from 'react';

function InputComponent(props) {
    return (
      <input type={props.type}
        onChange={props.handleChange}
      />
    )
}

export default InputComponent;
