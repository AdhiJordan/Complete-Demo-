import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';
import Commons from './Commons'
import DisplayRules from './DisplayRules'
import NewButton from 'views/common/NewButton'
import ChannelContentEdit from './ChannelContentEdit'
import ChannelContentDisplay from './ChannelContentDisplay'

export default class Channels extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           channelContent: false,
           addContent: [],
           value: ''
        }
        this.setValue = this.setValue.bind(this)
        this.editChannelContent = this.editChannelContent.bind(this)
        this.editChannelContent1 = this.editChannelContent1.bind(this)
        this.addContent = this.addContent.bind(this)
        
    }
      setValue(event, value) {
        alert(value)
        this.setState({value:  value})
    }
    getIcons() {
        return "<="
    }
    addContent(value) {
        alert(value)
        this.setState({addContent: this.state.addContent.concat(value), channelContent: false})
    }
    channelContent() {
        if(this.state.channelContent)
            return <ChannelContentEdit 
                        onClick={this.editChannelContent1} 
                        componentName={this.props.componentName}
                        addContent={this.addContent}/>
        return ''
    }
    editChannelContent(e) {
        e.preventDefault()
        this.setState({channelContent: true})
    }
     editChannelContent1(e) {
        e.preventDefault()
        this.setState({channelContent: false})
    }
    onClick() {
        this.props.componentDatas(this.state.value)
    }
  
    render() {
        let {componentName} = this.props
        let {channelContent, addContent} = this.state
    	return (
    		<div className="">

    			<Commons 
                    placeholder={`Find a Content`}
                    icon={this.getIcons()}
                    name={componentName} 
                    channels={true} 
                    onClick={this.onClick.bind(this)}/>
                <NewButton value={`${componentName} CONTENT`} onClick={this.editChannelContent}/>
                <ChannelContentDisplay 
                    onClick={this.editChannelContent.bind(this)} 
                    channelContent={channelContent}
                    addContent={addContent}
                    setValue={this.setValue}
                    value={this.state.value}/>
                {this.channelContent()}
                
    		</div>
    	)
    }
}
Channels.propTypes = {

}