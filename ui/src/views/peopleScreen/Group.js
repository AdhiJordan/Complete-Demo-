import React, { PropTypes } from 'react';
import 'app/css/peopleScreen/app.css';
import classNames from 'classnames'
import NewGroupForm from './NewGroupForm'
import DisplayGroup from './DisplayGroup'

const iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~`";
const numbers = "0123456789";

class Group extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.state = {
            newGrouupBtnVisible: true,
            groupName: '',
            groupNameError: "",
            allGroup: false
        }
        this.hideNewGrouupBtn = this.hideNewGrouupBtn.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changePersonsList = this.changePersonsList.bind(this)
    }
    hideNewGrouupBtn() {
        return this.setState({newGrouupBtnVisible: false})	
    }
    handleChange(e) {
        let value = e.target.value;
        if(value[0] === '_') {
          this.setState({groupNameError: '_ not allowed here', groupName: this.getGroupName(value) });
          return ''
        }
        if(numbers.indexOf(value[0]) != -1) {
          this.setState({groupNameError: 'not allowed here', groupName: this.getGroupName(value) });
          return ''
        }
        for(let i = 0; i<value.length; i++) {
           if(value[i] === '_' && value[i - 1] === value[i]) {
                this.setState({groupNameError: 'not allowed', groupName: this.getGroupName(value) });
                return ''
           }
           if(iChars.indexOf(value[i]) != -1) {
            this.setState({groupNameError: 'special character not allowed', groupName: this.getGroupName(value) });
            return ''
           }

        }
        return this.setState({groupName: this.getGroupName(value), groupNameError: ''})   
    }
        getGroupName(value) {
            return value && value[0].toUpperCase().trim() + value.slice(1).toLowerCase().trim()
        }
        handleSubmit(e) {
                e.preventDefault()
                if(!this.checkGroupName()) {
                    return ''
                }
               
                this.props.addGroup(this.state.groupName)
                this.setState({groupName: '', newGrouupBtnVisible: true})
               
        }
        checkGroupName() {
            let validGroupName = true
            if(this.state.groupNameError.length > 0) {
                validGroupName = false
            }
            else {
                _(this.props.groups).forEach((value) => {
                    if(value.groupName === this.state.groupName) {
                        this.setState({groupNameError: 'already exists'});
                        validGroupName = false
                    }
                });
            }
            return validGroupName
        }
        changePersonsList(id) {
            if(this.props.opacity === 0.5) {
                return ''
            }
            else if(id === 0) {
                this.props.changePersonsList(id)
                return this.setState({allGroup: true, newGrouupBtnVisible: true})
            }
            else {
                this.props.changePersonsList(id)
                return this.setState({allGroup: false, newGrouupBtnVisible: true})
            }
        }
        getStyle() {
            let opacity = this.props.opacity
            return {opacity: opacity, cursor: opacity===0.5 ? 'not-allowed':'pointer' }
        }
	    render() {
            let { groups, addGroup, changePersonsList, opacity } = this.props
            let {groupNameError, groupName, allGroup, newGrouupBtnVisible} = this.state
            let hiddenStyle = this.getStyle()
    	return (
    	    <div className="group">
    	    	<a className="allGroup" style={hiddenStyle} onClick={this.changePersonsList.bind(null, 0)}>All People</a>
    	    	<hr />
    	    	{ newGrouupBtnVisible && <div className="newGrouupBtn" style={{opacity: 1}} onClick={this.hideNewGrouupBtn}><span>+</span><span>NEW GROUP</span></div> }
    	    	{ !newGrouupBtnVisible && <NewGroupForm onChange={this.handleChange} addGroup={this.handleSubmit} value={groupName} groupNameError={groupNameError}/>}
                { groups.length > 0 &&  <DisplayGroup groups={groups} changePersonsList={this.changePersonsList} allGroup={allGroup} opacity={opacity} styles={hiddenStyle} /> }
    	    </div>
    	);
    }
}
export default Group
