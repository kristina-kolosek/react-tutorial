import React from 'react';
import './HeaderComponent.css';

function HeaderComponent(props) {
  return(
    <div className="headerTitle">
      {props.title}
    </div>
  )
}

export default HeaderComponent;
