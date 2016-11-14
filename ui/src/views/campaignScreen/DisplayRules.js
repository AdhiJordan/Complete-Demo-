import React, { PropTypes } from 'react';
import { RadioButtonGroup, RadioButton } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';

export default class DisplayRules extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
          
        }
        
    }
    getIcons() {
        return "<="
    }
   
    render() {
    	let {changeRule, value} = this.props
        let rules = []
        for(let i=0; i<19; i++) {
            rules.push(
                <div className="singleRule col-md-6" key={i}>
                <RadioButtonGroup name="shipSpeed" valueSelected={value} onChange={changeRule}>
                    <RadioButton
                        value={"r" + i}
                        label={"Rule Name " + i}
                        // style={styles.radioButton}
                    />
                    </RadioButtonGroup>
                    <hr />
                </div>
            )
        }
    	return (
    		<div className="displayRules cf">              
                <div className="rules1">{rules}</div>
    		</div>
    	)
    }
}

DisplayRules.propTypes = {

}




