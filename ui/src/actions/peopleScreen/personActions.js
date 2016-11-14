import update from 'react-addons-update'
import * as types from './actionsTypes';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import empApi from 'api/mockEmpApi';

const initialState = []

// Action Creators
export function loadPersonSuccess(Persons) {

  
  return { type: types.LOAD_PERSON_SUCCESS, payload: Persons };

}

export function createPersonSuccess(Person) {
   // alert("create");

  return { type: types.CREATE_PERSON_SUCCESS, payload: Person };
}

export function updatePersonSuccess(PersonId, Person) {
  // alert("update");
  
  return { type: types.UPDATE_PERSON_SUCCESS, payload: [PersonId, Person] };
}

export function deletePersonSuccess(PersonId) {
  
  
  return { type: types.DELETE_PERSON_SUCCESS, payload: PersonId};
}

export function loadPersons() {
   return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    return fetch('http://localhost:1337/people', {
            method: 'get',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        
      
    }).then(r=>(r.json()))
    .then(persons => {
      // alert(Person)
    // alert(JSON.stringify(Person))      
    // console.log(Person)
      dispatch(loadPersonSuccess(persons)); })
  };
}
export function createPerson(person) {
  alert("c p");
    //   var data = {
    //     "personName": ersonName
    // };
    // console.log(data)
    return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    return fetch('http://localhost:1337/people', {
            method: 'post',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
      
    }).then(r=>(r.json()))
    .then(Person => {
      // alert(Person)
    alert(JSON.stringify(Person))      
    // console.log(Person)
    if(Person.id !== undefined)
      dispatch(createPersonSuccess(Person)); })
    .catch(error => {
      throw(error);
    });
  };

}

export function updatePerson(person, indexOfPersonToUpdate) {
  // alert("a");
// console.log(person)
    return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    return fetch(`http://localhost:1337/people/${person.id}`, {
            method: 'put',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
      
    }).then(r=>(r.json()))
    .then(Person => {
      // alert(Person)
    // alert(JSON.stringify(Person))      
    // console.log(Person)
      dispatch(updatePersonSuccess(indexOfPersonToUpdate, Person)); })
      .catch(error => {
      throw(error);
    });
  };

}

export function deletePerson(personId, indexOfPersonToDelete) {


      return function(dispatch, getState) {
    
    return fetch(`http://localhost:1337/people/${personId}`, {
            method: 'delete'
      
    }).then(() => 
        dispatch(deletePersonSuccess(indexOfPersonToDelete)))
    .catch(error => {
      throw(error);
    });
  };


}


export default function reducer(state = initialState, action) {
  let { type, payload } = action

  switch(type) {
    case types.LOAD_PERSON_SUCCESS: 
      // debugger;
      return update(state, { $set: payload } );

    case types.CREATE_PERSON_SUCCESS:

        return update(state, { $push: [payload] } );
        // return update(state, { $push: [payload] } );

    case types.UPDATE_PERSON_SUCCESS:
    debugger;
    // return update(state, { state: { $splice: [[payload[0], 1, payload[1]]]} });
        return update(state, { $splice: [ [payload[0], 1, payload[1] ] ] } );

    case types.DELETE_PERSON_SUCCESS:
    
                return update(state, { $splice: [[payload, 1]]} );

    default: 
      return state;
  }

}
