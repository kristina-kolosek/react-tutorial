import React from 'react';
import './DeleteComponent.css'

function DeleteComponent(props) {
	return (
		<button onClick={props.handleClick} className={props.className}>{props.name}</button>
	)
}

export default DeleteComponent;