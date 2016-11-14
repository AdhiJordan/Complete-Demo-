import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';
import Commons from './Commons'
import DisplayRules from './DisplayRules'

export default class RulePage extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           value: ''
        }
        this.changeRule = this.changeRule.bind(this)
        
    }
    getIcons() {
        return "< ="
    }
    changeRule(event, value) {
        // alert(value)
        this.setState({value: value})
    }
    findRuleName() {
        // alert()
        this.props.ruleName(this.state.value)
    }
    render() {
    	let {findRuleName} = this.props
        let {value} = this.state
    	return (
    		<div className="">

    			<Commons 
                    placeholder="Find a Rule"
                    icon={this.getIcons()}
                    name="RULE"
                    findName={() => this.findRuleName()}
                    channels={false}/>
                <DisplayRules changeRule={this.changeRule} value={value}/>
    		</div>
    	)
    }
}

RulePage.propTypes = {

}