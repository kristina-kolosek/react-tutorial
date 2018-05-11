import React from 'react';
import './CheckComponent.css';
function CheckComponent(props) {
	return (
			<input type="checkbox" checked={props.checked} onChange={props.handleClick} title={props.name} className={props.className}/>
		)
}

export default CheckComponent;