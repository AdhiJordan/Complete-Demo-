import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';
import Commons from './Commons'
import NewButton from '../common/NewButton'
import DisplayContents from './DisplayContents'

export default class ContentPage extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           value: ''
        }
        this.changeContent = this.changeContent.bind(this)
        
    }
    getIcons() {
        return <img src="images/group.svg" />
    }
    changeContent(event, value) {
        this.setState({value: value})
    }
    findContentName() {
      this.props.componentDatas(this.state.value)  
    }
    render() {
    	// let {addCampaign, onClick} = this.props
        let {value} = this.state
    	return (
                <div>
        			<Commons 
                        placeholder="Find Content"
                        icon={this.getIcons()}
                        name="CONTENT"
                        findName={() => this.findContentName()} 
                        channels={false}/>
                    <NewButton value="NEW CONTENT"/>
                    <DisplayContents changeContent={this.changeContent} value={value}/>
                </div>
    	)
    }
}

ContentPage.propTypes = {

}