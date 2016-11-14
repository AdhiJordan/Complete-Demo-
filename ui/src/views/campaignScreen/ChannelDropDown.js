import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog, Divider } from 'material-ui'

export default class ChannelDropDown extends React.Component {

   constructor(props, context) {
        super(props, context)

        this.state = {

        }
        
    }

   render() {
    let { onClick, index } = this.props
	 return (
			<Paper className="channelDropDown">
         <a onClick={onClick.bind(null, 'EMAIL', index)}>EMAIL</a>
				 <Divider />
         <a onClick={onClick.bind(null, 'SMS', index)}>SMS</a>
         <Divider />
         <a onClick={onClick.bind(null, 'PUSH NOTIFICATION', index)}>PUSH NOTIFICATION</a>
         <Divider />
         <a onClick={onClick.bind(null, 'WEB PUSH', index)}>WEB PUSH</a>
         <Divider />
			</Paper>
	)
  }
}

ChannelDropDown.propTypes = {

}