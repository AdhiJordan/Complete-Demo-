import React, { PropTypes } from 'react';
import styles from 'app/css/campaignScreen/style.js';
import Validity from './Validity'
import ChannelButtons from './ChannelButtons'


export default class MainButtons extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           
        }
        
    }  
    getStyle1() {
        if(this.props.ruleName === 'PICK A RULE')
            return { 
                    border: "1px solid #00bfa5",
                    backgroundColor: "#00bfa5"}

        return { 
                    border: "1px solid #464646",
                    backgroundColor: "#464646"}
    }
    getStyle2() {
        if(this.props.ruleName === 'PICK A RULE')
            return { 
                    color: "'#00bfa5"}

        return { 
                    color: "#464646"}
    }
    render() {
        let {onClick, ruleName, component, forPeople} = this.props
        let ruleIcon = "<="
         console.log("component 2")
        console.log(ruleName)
    	return (
    		<div className="cf campaignMain">
                    <a className="ruleBtn" onClick={onClick.bind(null, "rule")} style={{ color: ruleName === 'PICK A RULE' ? '#00bfa5' : '#464646'} }>
                        <span style={this.getStyle1()}>{ruleIcon}</span>
                        <span style={this.getStyle2()}>{ruleName}</span>
                    </a>
                   <div className="cf validity">
                        <label>VALIDITY</label><br />
                        <Validity placeholder="From"/>
                        <span>-</span>
                        <Validity placeholder="To"/>
                  </div>
                  <ChannelButtons onClick={onClick} component={component} escalation={false} forPeople={forPeople}/>
                
    		</div>
    	)
    }
}

MainButtons.propTypes = {

}