import React, { PropTypes } from 'react';
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui'
import styles from 'app/css/campaignScreen/style.js';
import SearchBox from './SearchBox'

export default class PeoplePage extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
          
        }
        this.addContext = this.addContext.bind(this)
    }
    getIcons() {
        return <img src="images/group.svg" />
    }
    getHeader() {
        if(this.props.channels) 
            return `YOUR ${this.props.name} CONTENTS`
        return `YOUR ${this.props.name}`
    }
    getContextBtn() {
        if(this.props.name === "PEOPLE")
            return <button 
                    className="context" 
                    onClick={this.props.atContext} 
                    style={this.props.context ? {backgroundColor: '#40C4FF'} : {backgroundColor: '#fff'} }>
                  @ context</button>
        return ''
    }
    addContext() {
        // this.setState({context: !this.state.context})
    }
    getonClick() {
        let {name, findName, onClick} = this.props
        if(name === 'RULE') {
            return findName
        }
        return onClick
    }
    render() {
    	let {placeholder, icon, name, findName, onClick} = this.props
        let label = "ADD " + name
    	return (
    		<div className="cf commonsFull">
                <h1>{this.getHeader()}</h1>
                <RaisedButton 
                icon={<img src="images/tick.png" />} 
                label= {label}
                labelColor="#fff" 
                backgroundColor="#00bfa5" 
                onTouchTap={this.getonClick()} 
                labelStyle={styles.commonsFullBtnLabel}
                style={styles.commonsFullBtn} 
                />
    			<SearchBox 
                    filter="" 
                    filterTextInput=""
                    placeholder={placeholder}
                    icon={icon} />
                {this.getContextBtn()}    
                    
    		</div>
    	)
    }
}

PeoplePage.propTypes = {

}