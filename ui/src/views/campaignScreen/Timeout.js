import React, { PropTypes } from 'react';

const Timeout = ({}) => {

	return (
         <div className="timeout">
         		<label>TIME OUT</label><br /> 
         		<input type="text" placeholder="value"/>
         		<input type="text" placeholder="unit"/>
         </div>
	)
}

Timeout.PropTypes = {

}

export default Timeout