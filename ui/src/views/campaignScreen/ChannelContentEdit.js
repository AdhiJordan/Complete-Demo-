import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';

export default class ChannelContentEdit extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
          nameInHeader: ''
        }
        this.nameInHeader = this.nameInHeader.bind(this)
        this.addContent = this.addContent.bind(this)
    }
    displaySubject() {
        let {componentName} = this.props
        if (componentName === 'EMAIL') {
            return <div>
                        <span>subject</span>
                        <span><TextField /></span>
                    </div>
        }
    }
    contentName() {
        let {componentName} = this.props
        if (componentName === 'EMAIL') {
            return <div>EMAIL BODY</div>
        }
    }
    imageUrl() {
        let {componentName} = this.props
        if (componentName === 'PUSH NOTIFICATION') {
            return <div><label>Image URL:</label><TextField /></div>
        }
    }
    nameInHeader(e) {
        this.setState({nameInHeader: e.target.value.toUpperCase()})

    }
    addContent() {
        if(this.state.nameInHeader !== '')
         return this.props.addContent(this.state.nameInHeader)
        return ''
    }
  
    render() {
        let {onClick} = this.props
        let arrow = "<"
    	return (
    		<div className="channelContentEdit" cf>
                <Paper style={styles.channelContentEdit}>
                    <div className="header cf">
                        <a className="goBack" onClick={onClick}>{arrow}</a>
                        <span className="nameInHeader">
                            <TextField onChange={this.nameInHeader} value={this.state.nameInHeader}/>
                        </span>
                    </div>
                    <div className="channelContentEditMiddle">
                    {this.displaySubject()}
                    {this.contentName()}
                    {this.imageUrl()}
                    
                    <textarea className="contentTextarea" ref="email"></textarea>
                    </div>
                    <RaisedButton 
                        icon={<img src="images/tick.png" />} 
                        label= "SAVE CHANGES"  
                        labelColor="#fff" 
                        backgroundColor="#00bfa5" 
                        onTouchTap={this.addContent}
                        style={styles.channelContentEditSaveBtn} 
                        />
                </Paper>
    		</div>
    	)
    }
}

ChannelContentEdit.propTypes = {

}