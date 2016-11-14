import React, { PropTypes } from 'react';

const Button = ({icon, value, onClick, className, color}) => {
	let classNames = "campaignBtns " + className
	return (
         <a className={classNames} onClick={onClick} style={{border: `1px solid ${color}`}}>
         		<div style={{backgroundColor: color}}>{icon}</div>
         		<div style={{color: color}}>{value}</div>
         </a>
	)
}

Button.PropTypes = {

}

export default Button