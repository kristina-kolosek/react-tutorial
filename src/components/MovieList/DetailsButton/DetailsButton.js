import React from 'react';
import './DetailsButton.css';

function DetailsButton(props) {
  return (
    <button
      onClick={props.handleClick}
      className="detailsButton">
        Details
    </button>
  )
}

export default DetailsButton;
