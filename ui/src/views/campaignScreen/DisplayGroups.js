import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog, Checkbox, RadioButton, RadioButtonGroup} from 'material-ui'

export default class DisplayGroups extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           value: ''
        }
        this.setValue = this.setValue.bind(this)
    }
    setValue(event, value) {
        this.setState({value: value})
    }
    
    render() {
    	let { groups } = this.props
        let {value} = this.state
    	return (
    		<div className="displayGroupsInCampaign cf">
                
                { groups.map((group, index) => 
                    <div className="col-md-4">
                        <RadioButtonGroup name="groups" valueSelected={value} onChange={this.setValue}>
                        <RadioButton
                            value={group.groupName}
                            label={group.groupName}
                        />
                        </RadioButtonGroup>
                    </div>) 
                
                }
    		</div>
    	)
    }
}

DisplayGroups.propTypes = {

}