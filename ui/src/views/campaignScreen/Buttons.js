import React, { PropTypes } from 'react';
import Button from './Button'
import ChannelDropDown from './ChannelDropDown'

export default class Buttons extends React.Component {

   constructor(props, context) {
        super(props, context)

        this.state = {
           channelDropDown: false,
           channelName: 'PICK CHANNEL'
        }
        this.changeChannel = this.changeChannel.bind(this)
        this.onChannelClick = this.onChannelClick.bind(this)
        this.pickChannel = this.pickChannel.bind(this)
    }
	 
   onChannelClick() {
      this.setState({channelDropDown: !this.state.channelDropDown})
   }
   changeChannel(channelName, index) {
    this.setState({channelName: channelName, channelDropDown: false})
   }
   channelDropDown() {

      if(this.state.channelDropDown)
        
        return <ChannelDropDown onClick={this.changeChannel} index={this.props.index}/>
      return ''
   }
   pickChannel() {
    let { onClick, index } = this.props
    onClick(this.state.channelName, index)
    // this.setState({channelDropDown: false})
   }
   render() {
    let { onClick, index, component, contentName, peopleName } = this.props
    let { channelName } = this.state
    let name = "PICK CONTENT"
   console.log("component channelName")
   console.log(channelName)
	 return (
			<div className="cf">
				 <Button     
             icon={<img src="images/channel.svg" className="channelImg"/>}               
             value={channelName}
             className=""
             color={channelName === 'PICK CHANNEL' ? '#00bfa5' : '#464646'}
             onClick={this.onChannelClick} />
          
         <Button 
             icon={<img src="images/content.svg" className="contentImg"/>}
             value={contentName || 'PICK CONTENT'}
             className=""
             color={(contentName === 'PICK CONTENT' || contentName ==='') ? '#00bfa5' : '#464646'}
             onClick={this.pickChannel} />
          <Button 
             icon={<img src="images/group.svg" className="groupImg"/>}
             value={peopleName}
             className="campaignBtnsLast"
             color={peopleName === 'TO WHOM?' ? '#00bfa5' : '#464646'}
             onClick={onClick.bind(null, "people", index)} />
             {this.channelDropDown()}

			</div>
	)
  }
}

Buttons.propTypes = {

}