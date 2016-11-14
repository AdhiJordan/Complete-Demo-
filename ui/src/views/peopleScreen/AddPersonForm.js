import React, { PropTypes } from 'react'
import 'app/css/peopleScreen/app.css'
import { TextField, Paper, RaisedButton, AutoComplete, FlatButton, Dialog } from 'material-ui';
import _ from 'lodash'
import ShowGroup from './ShowGroup'
import Select from 'react-select';
const styles = {

	NewGroupTextField: {
      width: 'inherit',
	},
	delBtn: {
		color: '#dc7a34',
	},
	personNameField: {
		width: 30,
	},
	autoComplete: {
		width: '22%',
	},
	addPersonForm: {
		padding: 10,
		paddingLeft: 30,
	},
	errors: {
		position: 'absolute',
		top: 72,
		fontSize: 15,
	},
	 dialog: {
    width: 500,
  },
  cancelLabel: {
    color: '#464646',
  }

}

class AddPersonForm extends React.Component {

	    constructor(props, context) {
        super(props, context);
        this.state = {
        	country: 'AU',
			disabled: false,
			searchable: true,
			selectValue: 'new-south-wales',
			clearable: true,
			groupError: '',
			searchText: '',
			open: false

        }
        this.getOptions = this.getOptions.bind(this)
        this.onChange = this.onChange.bind(this)
        this.handleUpdateInput = this.handleUpdateInput.bind(this)
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.delPerson = this.delPerson.bind(this)

    }
        componentWillReceiveProps(nextProps) {

        if(this.props.showGroup.length != nextProps.showGroup.length) {
            this.setState({searchText: "", groupError: ""});
        }
       }

	handleUpdateInput(text) {
      //alert("vdfvfd")
	  return this.setState({ searchText: text, groupError: "" })
	}

	// updateValue (newValue) {
	// 	this.setState({
	// 		selectValue: newValue
	// 	});
	// }
	getGroupName(value) {
            return value && value[0].toUpperCase().trim() + value.slice(1).toLowerCase().trim()
    }
	onChange(e) {
       if(e.trim() === "") {
       	return ''
       }
       let options = this.getOptions()
       let groupName = this.getGroupName(e)
       if(!options.includes(groupName) && !this.props.showGroup.includes(groupName)) {
       	this.setState({groupError: "not in list"})
       }
       else if(this.props.showGroup.includes(groupName)) {
        this.setState({groupError: "group already added"})
       }
       else {
       	this.props.onChange(groupName)
       	this.setState({groupError: ""})
       	
       }
	}
	getOptions() {
		let {groups} = this.props

		let options = [];

			if(this.props.showGroup.length > 0) { 
			_(groups).forEach((value1) => {
				if(!this.props.showGroup.includes(value1.groupName)) {
                    options.push(value1.groupName)
				}
             });
		    }
		    else {

		    	_(groups).forEach((value) => {
                      options.push(value.groupName)
		    	})
		    }
		return options
		
    }
    delPerson() {
    this.props.delPerson(this.props.person.id)
    this.handleClose()
    }
      handleOpen(e) {
  	e.preventDefault()
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }
        render() {
        	let {person, onChange, errors, addPerson, groups, group, showGroup, delGroup, delPerson, undoPerson, focus} = this.props
        	const btns = [
      <FlatButton
        label="CANCEL"
        primary={true}
        onTouchTap={this.handleClose}
        labelStyle={styles.cancelLabel}
      />,
      <RaisedButton
        label="DELETE"
        primary={true}
        onTouchTap={this.delPerson}
        labelColor="#fff"
        backgroundColor="#dc7a34"
      />
    ];
  return (
        	<div className="addPersonForm cf">
		        <Paper style={styles.addPersonForm}>
		         <div className="formFields cf">
			        <TextField
	                     name="name"
					     floatingLabelText="Name"
					     errorText = {errors.name}
					     errorStyle={styles.errors}
					     value={person.name}
					     onChange={onChange}
					     className="personNameField cf"
				         autoFocus/>
	                <TextField
	                     name="email"
	                     type="email"
					     floatingLabelText="Email"
					     errorText = {errors.email}
					     errorStyle={styles.errors}
					     value={person.email}
					     onChange={onChange}
					     className="personNameField cf"
					     onFocus={focus} />
	                <TextField
	                     name="phone"
	                     type="number"
					     floatingLabelText="Phone Number"
					     errorText = {errors.phone}
					     errorStyle={styles.errors}
					     value={person.phone}
					     onChange={onChange}
					     className="personNameField"
	                     onFocus={focus} />

					  <AutoComplete
					  onFocus={focus}
				      floatingLabelText="Enter Group"
				      errorText = {errors.group}
				      onChange={onChange}
				      filter={AutoComplete.caseInsensitiveFilter}
				      dataSource={this.getOptions()}
				      onNewRequest={this.onChange}
				      errorText={this.state.groupError}
				      errorStyle={styles.errors}
				      style={styles.autoComplete}
				      textFieldStyle={styles.autoCompleteTest}
				      className="autoCompleteTestField"
				      searchText={this.state.searchText}
				      onUpdateInput={this.handleUpdateInput}
				     />
				    <br />
				    
				    {showGroup.length > 0 && <ShowGroup group={showGroup} delGroup={delGroup}/>}
				    <br />
				    <br />
			      </div>

	                <RaisedButton icon={<img src="images/tick.png" />} label= {person.id ? "SAVE PERSON" : "ADD PERSON"}  labelColor="#fff" backgroundColor="#00bfa5" onTouchTap={addPerson} />
	                <FlatButton label= {person.id ? "DELETE PERSON" : "CANCEL" } labelStyle={styles.delBtn} onTouchTap={person.id ? this.handleOpen : delPerson} />
	                {person.id && <FlatButton label="CANAEL"  labelStyle={styles.delBtn} onTouchTap={undoPerson}/> }

	                <Dialog
			          actions={btns}
			          modal={false}
			          open={this.state.open}
			          contentStyle={styles.dialog}
			          onRequestClose={this.handleClose}
			        >
			          <span className="dialogText">Delete {person.name} ?</span>
			        </Dialog>

	            </Paper>
	             
		    </div>

		    );
    }
 }

export default AddPersonForm

