import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog, Checkbox, RadioButton, RadioButtonGroup} from 'material-ui'

export default class ChannelContentDisplay extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           value: ''
        }
        
        
    }
   
    getIcons() {
        return "<="
    }
    getStyle() {
        if(this.props.channelContent) 
            return {display: 'none'}
        return {display: 'block'}
    }
  
    render() {
        let {onClick, channelContent, addContent, setValue, value} = this.props
        // let {value} = this.state
    	return (
    		<div className="" style={this.getStyle()}>
            { addContent.map((name, index) => 
                    <div className="col-md-6">
                        <RadioButtonGroup name="groups" valueSelected={value} onChange={setValue}>
                        <RadioButton
                            value={name}
                            label={name}
                        />
                        </RadioButtonGroup>
                    </div>) 
                
                }

    		</div>
    	)
    }
}
ChannelContentDisplay.propTypes = {

}