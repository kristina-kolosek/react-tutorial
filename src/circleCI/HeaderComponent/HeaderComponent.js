import React from 'react';
import './HeaderComponent.css';

function HeaderComponent(props) {
  return (
    <div>
      <div
        className="headerTitle">
        Circle CI
      </div>
      <div
        className="subheader"
      >
        {props.subheader}
      </div>
    </div>
  );
}
export default HeaderComponent;
