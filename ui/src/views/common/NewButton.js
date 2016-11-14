import React, { PropTypes } from 'react';
// import 'app/css/peopleScreen/app.css';

const NewButton = ({onClick, value, style={} }) => {

	return (
		<a className="newPerson" onClick={onClick} style={style}>
				<span className="glyphicon glyphicon-plus plusBtnIcon"></span>
				<span className="plusBtnLabel">&nbsp;NEW {value}</span>
		</a>

		);
};

export default NewButton
