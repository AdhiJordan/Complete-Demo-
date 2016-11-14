import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog, Checkbox} from 'material-ui'

export default class DisplayPeoples extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           
        }
        
    }
    
    render() {
    	let { peoples } = this.props
    	return (
    		<div className="displayPeoplesInCampaign cf">
                { peoples.map((people, index) => 
                    <div className="col-md-4">
                         <Checkbox
                          label={people.name}
                          // style={styles.checkbox}
                        />
                    </div>) 
                }
    		</div>
    	)
    }
}

DisplayPeoples.propTypes = {

}