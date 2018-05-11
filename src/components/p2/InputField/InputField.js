import React from 'react';

function InputField(props) {
  return (
    <input
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  )
}


export default InputField;
