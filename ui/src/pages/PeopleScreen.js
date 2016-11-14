import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {createSelector} from 'reselect'
import {bindDispatch} from 'common/util/redux'
import { browserHistory } from 'react-router';
import {RaisedButton, FlatButton, Dialog, Paper, TextField} from 'material-ui';
import 'app/css/peopleScreen/app.css';
import DisplayAttribute from 'views/peopleScreen/DisplayAttribute'
import classNames from 'classnames'
import Group from 'views/peopleScreen/Group'
import People from 'views/peopleScreen/People'
import _ from 'lodash' 
import Ajv from 'ajv'
import entitySchema from 'schema/entity'

class PeopleScreen extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            persons: [],
            groupId: 0,
            opacity: 1,
            filterCondition: false
            }

        this.addGroup = this.addGroup.bind(this)
        this.addPerson = this.addPerson.bind(this)
        this.deletePerson= this.deletePerson.bind(this)
        this.changePersonsList = this.changePersonsList.bind(this)
        this.filterTextInput = this.filterTextInput.bind(this)
        this.changeOpacity = this.changeOpacity.bind(this)
        this.filterPersonsByGroup = this.filterPersonsByGroup.bind(this)
    }
    addGroup(groupName) {
        return this.props.actions.createGroup(groupName)

    }
    addPerson(person, group) {
        let groupIds = []

        for (let value of group) {
            for (let v of this.props.groups) {
                if(value === v.groupName) {
                    groupIds.push(v.id)
                }
            }
        }
        if(person.id) {
            
            const indexOfPersonToUpdate = this.props.persons.findIndex(p => p.id == person.id)
                this.props.actions.updatePerson(Object.assign({}, person, {groups: groupIds}), indexOfPersonToUpdate)
                .then(() => {
                       this.changePersonsList(this.state.groupId)
                })
        }
        else {
            
            this.props.actions.createPerson(Object.assign({}, person, {groups: groupIds}))
            .then(() => { 
               
               this.changePersonsList(this.state.groupId)
              
            })
        }
                
        return ''
    }
    deletePerson(personId) {

        let indexOfPersonToDelete = this.props.persons.findIndex(p => p.id === personId)
        this.props.actions.deletePerson(personId, indexOfPersonToDelete)
        .then(() => {
            
            this.changePersonsList(this.state.groupId)
           
        })
        
        return ''
    }
    
    changePersonsList(groupId) {

        if(groupId == 0) {
            return this.setState({filterCondition: false,  groupId: groupId})
        }

        else {
            let newPersonsList = this.filterPersonsByGroup(groupId)
            return this.setState({persons: newPersonsList, groupId: groupId, filterCondition: true})
        }
        
    }
    filterPersonsByGroup(groupId) {
        let personsList = []

        for (let value of this.props.persons) {
          
            for (let group of value.groups) {
                if((group.id != undefined) && (group.id == groupId)) {
                    personsList.push(value)
                }
            }
        }
        return personsList
    }
    filterTextInput(filterVal) {

        let newPersonsList = []
        let persons = this.props.persons
        console.log(persons)
        let groupId = this.state.groupId
        let filterValue = filterVal.trim()

        if(groupId !== 0) {
            persons = this.filterPersonsByGroup(groupId)
        }
       
        for (let value of persons) {
            if(value.name.indexOf(filterValue) !== -1 || value.name.toUpperCase().indexOf(filterValue.toUpperCase()) !== -1 || value.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1) {
               newPersonsList.push(value)
            }
        }
        return this.setState({persons: newPersonsList, filterCondition: true})
    }
    changeOpacity() {
        let opacity = 1;
        if(this.state.opacity === 1) {
            opacity = 0.5
        }
        this.setState({opacity: opacity})
    }
    render() {

        let {groups, persons, actions} = this.props
        let {groupId, opacity, filterCondition} = this.state

    	return (
    		<div className="main">
    			<Group groups={groups} addGroup={this.addGroup} changePersonsList={this.changePersonsList} groupId={groupId} opacity={opacity}/>
                <People groups={groups} persons={(groupId === 0 && !filterCondition) ? persons : this.state.persons} addPerson={this.addPerson} savePerson={this.addPerson} deletePerson={this.deletePerson} filter={this.filterTextInput} groupId={groupId}
                changeOpacity={this.changeOpacity} opacity={opacity}/>
    		</div>
    	);
    }
}

PeopleScreen.propTypes = {

    group: PropTypes.object.isRequired,
    persons: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

};

const selector = createSelector(
  state => state.peopleScreen.groups,
  state => state.peopleScreen.persons,
  (groups, persons) => ({ groups, persons })
)

export default connect(selector, bindDispatch)(PeopleScreen);

