import React, { PropTypes } from 'react';

const EscalationButton = ({showEscalationForm}) => {

	return (
         <a onClick={showEscalationForm} className="escalationBtn">ESCALATION</a>
	)
}

EscalationButton.PropTypes = {

}

export default EscalationButton