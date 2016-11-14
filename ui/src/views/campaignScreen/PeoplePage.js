import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';
import Commons from './Commons'
import  DisplayGroups from './DisplayGroups'
import DisplayPeoples from './DisplayPeoples'

export default class PeoplePage extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           
        }
        
    }
    getIcons() {
        return <img src="images/group.svg" />
    }
    render() {
    	let {peoples, groups, atContext, context} = this.props
    	return (
    		<div className="">
                <Commons
                    placeholder="Find Someone"
                    icon={this.getIcons()}
                    name="PEOPLE"
                    channels={false}
                    atContext={atContext}
                    context={context}/>
                <h2>ALL GROUPS</h2>
                <DisplayGroups groups={groups}/>
                <h2>ALL PEOPLES</h2>
                <DisplayPeoples peoples={peoples}/>
    		</div>
    	)
    }
}

PeoplePage.propTypes = {

}