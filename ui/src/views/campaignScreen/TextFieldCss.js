import React, { PropTypes } from 'react';

const TextFieldCss = ({label, placeholder, className, onChange}) => {
       let cName = "textField " + className
	return (
         <div className={cName} >
         		<label>{label}</label>
         		<input 
         			type="text" 
         			placeholder={placeholder} 
                    onChange={onChange}/>
         </div>
	)
}

TextFieldCss.PropTypes = {
	
}

export default TextFieldCss