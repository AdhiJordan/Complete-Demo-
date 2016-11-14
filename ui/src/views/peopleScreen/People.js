import React, { PropTypes } from 'react'
import 'app/css/peopleScreen/app.css'
import NewPersonButton from './NewPersonButton'
import PersonsList from './PersonsList'
import AddPersonForm from './AddPersonForm'
import Search from './Search'
const styles = {

	NewGroupTextField: {
      width: 'inherit',
	},
}
const iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~`";
const numbers = "0123456789";

class People extends React.Component {

	    constructor(props, context) {
        super(props, context);
        this.state = {
        	showAddPersonForm: false,
        	person: {name: '', email: '', phone: ''},
        	group: [],
        	errors: {name: '', email: '', phone: '', group: ''},
            showStart: true,
            filterTextInput: ""

        }
        this.ToggleAddPersonForm = this.ToggleAddPersonForm.bind(this)
        this.updatePerson = this.updatePerson.bind(this)
        this.addPerson = this.addPerson.bind(this)
        this.delGroup = this.delGroup.bind(this)
        this.cancelPerson = this.cancelPerson.bind(this)
        this.filterTextInput = this.filterTextInput.bind(this)
        this.focus = this.focus.bind(this)
        }

        ToggleAddPersonForm(e) {
        	e.preventDefault()
        	if(this.props.opacity === 0.5) {
        		return ''
        	}
        	if(this.props.groupId !== 0) {
        		let group = this.getGroupName()
        		this.setState({group: this.state.group.concat(group)})
        	}
           this.setState({showAddPersonForm: !this.state.showAddPersonForm, showStart: !this.state.showStart})
        }
        updatePerson(e) {
           
            let person = this.state.person
            
        	if(e.target === undefined && e.length > 0) {
        		let person = this.state.person
        		let errors = this.state.errors
        		if(person['name'] === "") {
                   errors['name'] = 'fill this field'
        		}
        		if(person['email'] === "") {
                   errors['email'] = 'fill this field'
        		}
        		if(!this.checkEmail(person['email']) && errors['email'].length === 0) {
        			errors['email'] = 'Not a valid e-mail address'
        		}
        		if(person['phone'] === "") {
        			errors['phone'] = 'fill this field'
        		}
        		this.setState({group: this.state.group.concat(e), errors: errors})
        	}
        	else {
        		let field = e.target.name
        		let value = e.target.value
        		if(field === 'name') {
                   this.checkPersonName(person, value)
        		}
        		else if(field === 'email') {
        			this.checkPersonEmail(person, value)
        		}
        		else {
        			this.checkPersonNumber(person, value)
        		}
        	}
			return ''
        }
        checkPersonName(person, value) {
            let errors = this.state.errors
        	if(value[0] === '_') {
        		person['name'] = this.getPersonName(value)
        		errors['name'] = '_ not allowed here'
          this.setState({errors: errors, person: person });
          return ''
        }
        if(numbers.indexOf(value[0]) != -1) {
        	person['name'] = this.getPersonName(value)
        	errors['name'] = 'not allowed here'
          this.setState({errors: errors, person: person });
          return ''
        }
        for(let i = 0; i<value.length; i++) {
        	person['name'] = this.getPersonName(value)
        	errors['name'] = 'not allowed'
           if(value[i] === '_' && value[i - 1] === value[i]) {
            this.setState({errors: errors, person: person });
            return ''
           }
           if(iChars.indexOf(value[i]) != -1) {
           	person['name'] = this.getPersonName(value)
           	errors['name'] = 'special character not allowed'
            this.setState({errors: errors, person: person });
            return ''
           }

        }   
            person['name'] = this.getPersonName(value)
            errors['name'] = ''
            return this.setState({person: person, errors: errors})
        }
        checkPersonEmail(person, value) {
        	let errors = this.state.errors
        	person['email'] = value
        	errors['email'] = ''
        	if(errors['email'].length > 0 && this.checkEmail(value)) {
        		   errors['email'] = ''	
        	}
        	if(person.name === '') {
        		errors['name'] = 'fill this field'
        		return this.setState({person: person, errors: errors})
        	}
        	else {
        		errors['name'] = ''

        		return this.setState({person: person, errors: errors})
        	}
        }
        checkEmail(email) {
        	let validEmail = true
        	let atpos = email.indexOf("@");
		    let dotpos = email.lastIndexOf(".");
		    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
		    	validEmail = false
		    }
		    return validEmail
        }
        checkPersonNumber(person, value) {
        	let errors = this.state.errors
        	person['phone'] = value 
        	errors['phone'] = ''
        	if (person.name === '') {
		      errors['name'] = "fill this field"
		      return this.setState({person: person, errors: errors})
		       
		    }
		    if (!this.checkEmail(person.email)) {
		      errors['email'] = "Not a valid e-mail address"
		      return this.setState({person: person, errors: errors})
		       
		    }
		    else {
        	  errors['email'] = ''
        	  
        	  return this.setState({person: person, errors: errors})
        	}
        }
        getPersonName(value) {
        	return value && value[0].toUpperCase().trim() + value.slice(1).toLowerCase().trim()
        }
        checkPerson() {
        	let validPerson = true
        	let person  = this.state.person
        	let errors = this.state.errors
        	let message = "fill this field"

        	if(person.name === '') {
        		errors['name'] = message
        		validPerson = false
        	}
        	if(person.email === '') {
        		errors['email'] = message
        		validPerson = false
        	}
        	if(person.phone === '') {
        		errors['phone'] = message
        		validPerson = false
        	}
        	if(errors.name.length > 0 || errors.email.length > 0 || errors.phone.length > 0 ) {
        		validPerson = false
        	}
        	if(!this.checkEmail(person.email)) {
        		errors['email'] = "Not a valid e-mail address"
        		validPerson = false
        	}
        	this.setState({errors: errors})
        	return validPerson
        }
        addPerson() {
        	if(!this.checkPerson()) {
        		return ''
        	}
        	this.props.addPerson(this.state.person, this.state.group)
        	return this.setState({person: {name: '', email: '', phone: ''}, group: [], showAddPersonForm: false, showStart: true, errors: {name: '', email: '', phone: '', group: ''}})
        }
        delGroup(name) {
            let newGroup = this.state.group.filter(n => n !== name)
            return this.setState({group: newGroup})
        }
        cancelPerson() {
        	return this.setState({person: {name: '', email: '', phone: ''}, group: [], showAddPersonForm: false, showStart: true, errors: {name: '', email: '', phone: '', group: ''}})
        }
        getGroupName() {
        	let group =  this.props.groups.filter(g => g.id === this.props.groupId)
        	if(group[0] !== undefined) {
        	return group[0].groupName
            }
        }
        filterTextInput(e) {
	    	this.setState({filterTextInput: e.target.value})
	    	this.props.filter(e.target.value)
	    	return ''
	    }
        focus(e) {
            console.log(e.target.name)
            let field = e.target.name
            let person  = this.state.person
            let errors = this.state.errors
            let message = "fill this field"
            if(person.name === '') {
                errors['name'] = message
            }
            // if(field === 'email' && person.name === '') {
            //    errors['name'] = message
            // }
            if(field === 'phone') {
               if(person.email === '') {
                errors['email'] = message
               }
               else if(!this.checkEmail(person.email)) {
                 errors['email'] = "Not a valid e-mail address"
               }
            }
            return this.setState({errors: errors})
        }
        render() {
        	let { persons, groups, savePerson, deletePerson, groupId, changeOpacity, opacity } = this.props
        	let {showAddPersonForm, group, showStart, filterTextInput} = this.state
	        return (
			<div className="people">
			 <Search filterTextInput={filterTextInput} filter={this.filterTextInput} disabled={opacity === 0.5} placeholder="Find Someone"/>
			    { !showAddPersonForm ? <NewPersonButton onClick={this.ToggleAddPersonForm} opacity={opacity}/> : 
			      <AddPersonForm className="addPersonForm" groups={groups} showGroup={group} person={this.state.person} errors={this.state.errors} onChange={this.updatePerson} addPerson={this.addPerson} delGroup={this.delGroup} delPerson={this.cancelPerson} focus={this.focus}/>
			     }
				
				{ persons.length === 0 && showStart ? <div className="start">
					{   filterTextInput.length !== 0 ?
						(<p>No People Found With Name <span>{this.state.filterTextInput} </span> </p>)
						: (groupId === 0 ? 
							<p>Add information and group people who belong to your business </p>
					        : <p>Add people to <span>{this.getGroupName()} </span> </p> )}
					<NewPersonButton onClick={this.ToggleAddPersonForm} opacity={opacity}/>
				</div> : <div>{_(_.clone(persons)).reverse().map( person => <PersonsList person={person} groups={groups} group={group} savePerson={savePerson} deletePerson={deletePerson} changeOpacity={changeOpacity} opacity={opacity}/> ).value()}</div> } 
				</div>
				);
    	}
 }

export default People
