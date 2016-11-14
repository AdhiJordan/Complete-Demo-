import update from 'react-addons-update'
import * as types from './actionsTypes';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import empApi from 'api/mockEmpApi';

const initialState = []

// Action Creators
export function loadGroupSuccess(Groups) {

  
  return { type: types.LOAD_GROUP_SUCCESS, payload: Groups };

}

export function createGroupSuccess(Group) {
   // alert("create");

  return { type: types.CREATE_GROUP_SUCCESS, payload: Group };
}

export function updateGroupSuccess(GroupId, Group) {
  // alert("update");
  
  return { type: types.UPDATE_GROUP_SUCCESS, payload: [GroupId, Group] };
}

export function deleteGroupSuccess(GroupId) {
  
  
  return { type: types.DELETE_GROUP_SUCCESS, payload: GroupId};
}

export function loadGroups() {
   return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    return fetch('http://localhost:1337/groups', {
            method: 'get',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        
      
    }).then(r=>(r.json()))
    .then(groups => {
      // alert(Group)
    // alert(JSON.stringify(Group))      
    // console.log(Group)
      dispatch(loadGroupSuccess(groups)); })
  };
}
export function createGroup(groupName) {
  // alert("b");
      var data = {
        "groupName": groupName
    };
    // console.log(data)
    return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    return fetch('http://localhost:1337/groups', {
            method: 'post',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
      
    }).then(r=>(r.json()))
    .then(group => {
      // alert(group)
    // alert(JSON.stringify(group))      
    // console.log(Group)
      dispatch(createGroupSuccess(group)); })
  };

}

export function updateGroup(GroupId, indexOfGroupToUpdate, GroupName, attributes) {
  // alert("a");
      var data = {
        "GroupName": GroupName,
        "fields": _.map(attributes, attribute => ({
            "attributeName": attribute.attributeName,
            "attributeType": attribute.attributeType
        }))
    };

    // console.log(data)
    return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    return fetch(`http://localhost:1337/Group/${GroupId}`, {
            method: 'put',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
      
    }).then(r=>(r.json()))
    .then(Group => {
      // alert(Group)
    // alert(JSON.stringify(Group))      
    // console.log(Group)
      dispatch(updateGroupSuccess(indexOfGroupToUpdate, Group)); })
  };

}

export function deleteGroup(GroupId, indexOfGroupToDelete) {


      return function(dispatch, getState) {
    
    return fetch(`http://localhost:1337/Group/${GroupId}`, {
            method: 'delete'
      
    }).then(() => 
        dispatch(deleteGroupSuccess(indexOfGroupToDelete)))
    .catch(error => {
      throw(error);
    });
  };


}


export default function reducer(state = initialState, action) {
  let { type, payload } = action

  switch(type) {
    case types.LOAD_GROUP_SUCCESS: 
      // debugger;
      return update(state, { $set: payload });

    case types.CREATE_GROUP_SUCCESS:

        return update(state, { $push: [payload] });

    case types.UPDATE_GROUP_SUCCESS:
    debugger;
    let result = payload[1].Groupupdate[0]
        return update(state, { entities: { $splice: [[payload[0], 1, result]]} });

    case types.DELETE_GROUP_SUCCESS:
   
                return update(state, { entities: { $splice: [[payload, 1]]} });

    default: 
      return state;
  }

}
