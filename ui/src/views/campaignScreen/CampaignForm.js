import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';
import TextFields from './TextFields'
import MainButtons from './MainButtons'
import Escalation from './Escalation'

export default class CampaignForm extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           campaignName: ''
        }
        this.onChange = this.onChange.bind(this)
        this.addCampaign = this.addCampaign.bind(this)
        
    }
    addCampaign() {
        if(this.state.campaignName !== '')
        this.props.addCampaign(this.state.campaignName)
    }
    onChange(e){
        this.setState({campaignName: e.target.value.toUpperCase()})
    }
    render() {
    	let {addCampaign, onClick, ruleName, componentDatas, componentDatasEscalation, hideCampaignForm, forPeople} = this.props
        let {campaignName} = this.state
        console.log("component 1")
        console.log(componentDatas)
        console.log(componentDatasEscalation)
    	return (
    		<div className="cf">
    			<Paper style={styles.campaignScreen}>
    				<TextFields hideCampaignForm={hideCampaignForm} campaignName={campaignName} onChange={this.onChange}/>
                    <MainButtons onClick={onClick.bind(null, false)} ruleName={ruleName} component={componentDatas} forPeople={forPeople}/>
                    <Escalation onClick={onClick.bind(null, true)} component={componentDatasEscalation} forPeople={forPeople}/>
                    <RaisedButton 
                    	icon={<img src="images/tick.png" />} 
                    	label= "ADD CAMPAIGN"  
                    	labelColor="#fff" 
                    	backgroundColor="#00bfa5" 
                    	onTouchTap={this.addCampaign}
                    	style={styles.addCampaignBtn} />
    			</Paper>
    		</div>
    	)
    }
}

CampaignForm.propTypes = {

}