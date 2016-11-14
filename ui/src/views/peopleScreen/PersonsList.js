import React, { PropTypes } from 'react'
import 'app/css/peopleScreen/app.css'
import ShowPerson from './ShowPerson'
import AddPersonForm from './AddPersonForm'
import _ from 'lodash'
import classNames from 'classnames'
import update from 'react-addons-update'
import Highlight from 'react-highlighter'

const iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~`";
const numbers = "0123456789";

class PersonsList extends React.Component {

	    constructor(props, context) {
        super(props, context);
        this.state = {
        	editMode: false,
        	group: [],
        	person: {name: '', email: '', phone: '', id: ''},
        	errors: {name: '', email: '', phone: '', group: ''}
        }
        this.updatePerson = this.updatePerson.bind(this)
        this.editMode = this.editMode.bind(this)
        this.savePerson = this.savePerson.bind(this)
        this.delGroup = this.delGroup.bind(this)
        this.delPerson = this.delPerson.bind(this)
        this.undoPerson = this.undoPerson.bind(this)
    }
    componentWillMount() {
    	
    	this.setState({editMode: false})
    }
        updatePerson(e) {
			let person = this.state.person
        	if(e.target === undefined) {
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
        editMode(person) {
        	 if(this.props.opacity !== 0.5) {
        	 this.props.changeOpacity()
        	 let person1 = this.state.person
        	 person1['name'] = person.name
        	 person1['email'] = person.email
        	 person1['phone'] = person.phone
        	 person1['id'] = person.id
        	 
        	 let groups = []
    	_(person.groups).forEach((value) => {
            groups.push(value.groupName)
    	})

              this.setState({editMode: true, person: person1, group: groups})
   
             }
             
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
            this.setState({person: person, errors: errors})

        }
        checkPersonEmail(person, value) {
        	let errors = this.state.errors
        	person['email'] = value
        	errors['email'] = ''
        	if(errors['email'].length > 0 && this.checkEmail(value)) {
        		   errors['email'] = ''	
        	}
        	if(person.name === '') {
        		errors['name'] = 'please fill this field'
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
        savePerson() {

        	if(!this.checkPerson()) {
        		return ''
        	}
        	this.props.changeOpacity()
        	this.props.savePerson(this.state.person, this.state.group)
        	return this.setState({editMode: false, errors: {name: '', email: '', phone: '', group: ''}})
        }
        delPerson(personId) {

            this.props.changeOpacity()
            this.props.deletePerson(personId)
            return this.setState({editMode: false, errors: {name: '', email: '', phone: '', group: ''}})
        }
         delGroup(name) {
            let newGroup = this.state.group.filter(n => n !== name)
            return this.setState({group: newGroup})
        }
        undoPerson() {
        	this.props.changeOpacity()
        	return this.setState({editMode: false, person: {name: '', email: '', phone: ''}, group: [], errors: {name: '', email: '', phone: '', group: ''}})
        }

        render() {
        	let { person, groups, opacity, changeOpacity } = this.props

        return (
        	<div>
	        	{ !this.state.editMode ?
	        	    <ShowPerson person={person} onClick={this.editMode.bind(null, person)} opacity={opacity}/>
	        	 : <AddPersonForm person={this.state.person} groups={groups} showGroup={this.state.group} onChange={this.updatePerson} addPerson={this.savePerson} delGroup={this.delGroup} delPerson={this.delPerson} undoPerson={this.undoPerson} errors={this.state.errors}/> }
	        </div>
		    );
        
    	}
 }

export default PersonsList
