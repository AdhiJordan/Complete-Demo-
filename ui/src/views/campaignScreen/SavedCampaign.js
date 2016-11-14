import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';

export default class SavedCampaign extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {

        }
        
    }
   
  
    render() {
        let {campaign, onClick, index, deleteCampaign} = this.props
        let arrow = "<"
    	return (
    		<div className="" cf>
                <Paper style={styles.savedCampaign}>
                        <div className="col-md-3">{campaign.campaignName}</div>
                        <div className="col-md-3 col-md-offset-2">{campaign.ruleName}</div>
                        <a className="col-md-1 col-md-offset-3" onClick={deleteCampaign.bind(null, index)}>X</a>
                </Paper>
    		</div>
    	)
    }
}

SavedCampaign.propTypes = {

}