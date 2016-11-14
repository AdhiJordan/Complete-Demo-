import React, { PropTypes } from 'react';
import 'app/css/peopleScreen/app.css';

const NewPersonButton = ({onClick, opacity}) => {

	return (
		<a href="" className="newPerson" onClick={onClick} style={{opacity: opacity, cursor: opacity===0.5 ? 'not-allowed':'pointer'}}>
				<span className="glyphicon glyphicon-plus plusBtnIcon"></span>
				<span className="plusBtnLabel">&nbsp;NEW PERSON</span>
		</a>

		);
};

export default NewPersonButton
