import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';
import EscalationForm from './EscalationForm'
import EscalationButton from './EscalationButton'

export default class Escalation extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           escalationForm: false
        }
        this.showEscalationForm = this.showEscalationForm.bind(this)
    }
    showEscalationForm(e) {
        e.preventDefault()
        return this.setState({escalationForm: !this.state.escalationForm})
    }
    escalationForm() {
        if(this.state.escalationForm) {
            return <EscalationForm onClick={this.props.onClick} component={this.props.component} forPeople={this.props.forPeople}/>
        }
        return ''
    }
    render() {
    	return (
    		<div className="escalationSection cf">
                <EscalationButton showEscalationForm={this.showEscalationForm} />
                { this.escalationForm() }
    		</div>
    	)
    }
}

Escalation.propTypes = {

}