import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';
import TextFieldCss from './TextFieldCss'
import Button from './Button'
import Timeout from './Timeout'
import ChannelButtons from './ChannelButtons'

export default class EscalationForm extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           
        }
        
    }
    render() {
        let {onClick, component, forPeople} = this.props
    	return (
    		<div className="cf escalationForm">
        		<TextFieldCss 
                    label="NEW ESCALATION" 
                    placeholder="Escalation Name" 
                    className="escalationName" /> 
                <Timeout /> 
                <ChannelButtons onClick={onClick} component={component} escalation={true} forPeople={forPeople}/>
                              
    		</div>
    	)
    }
}

EscalationForm.propTypes = {

}