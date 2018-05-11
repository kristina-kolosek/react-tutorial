import React from 'react';

function LoginButtonComponent(props) {
    return (
      <button onClick={props.handleClick} >
        Login
      </button>
    )
}

export default LoginButtonComponent;
