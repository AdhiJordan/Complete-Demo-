import React, { PropTypes } from 'react';
import { RadioButtonGroup, RadioButton } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';

export default class DisplayContents extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           
        }
        
    }
    getIcons() {
        return "<="
    }
   
    render() {
    	let {value, changeContent} = this.props
        let contents = []
        for(let i=0; i<19; i++) {
            contents.push(
                <div className="singleRule col-md-6" key={i}>
                <RadioButtonGroup name="shipSpeed" valueSelected={value} onChange={changeContent}>
                    <RadioButton
                        value={"c" + i}
                        label={"Content Name "}
                        // style={styles.radioButton}
                    />
                    </RadioButtonGroup>
                    <span>X</span>
                    <hr />
                </div>
            )
        }
    	return (
    		<div className="displayRules cf">              
                <div className="contents cf">{contents}</div>
    		</div>
    	)
    }
}

DisplayContents.propTypes = {

}