import update from 'react-addons-update'
import * as types from './actionsTypesMain';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';

const initialState = {
  rules: []

}

// Action Creators
export function loadRuleSuccess(entities) {

  
  return { type: types.LOAD_ENTITY_SUCCESS, payload: entities };

}

export function createRuleSuccess(entity) {
   // alert("create");

  return { type: types.CREATE_ENTITY_SUCCESS, payload: entity };
}

export function updateRuleSuccess(entityId, entity) {
  // alert("update");
  
  return { type: types.UPDATE_ENTITY_SUCCESS, payload: [entityId, entity] };
}

export function deleteRuleSuccess(entityId) {
  alert()
  
  return { type: types.DELETE_ENTITY_SUCCESS, payload: entityId};
}

export function loadRule() {
   return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    return fetch('http://localhost:1337/entity', {
            method: 'get',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        
      
    }).then(r=>(r.json()))
    .then(entity => {
      // alert(entity)
    // alert(JSON.stringify(entity))      
    // console.log(entity)
      dispatch(loadRuleSuccess(entity)); })
  };
}

export function createRule(ruletwo) {
   alert("a");
   console.log(ruletwo);
    return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    console.log(getState())
    return fetch('http://localhost:1337/rules', {
            method: 'post',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ruletwo)
      
    }).then(r=>(r.json()))
    .then(entity => {
      // alert(entity)
    alert(JSON.stringify(entity))      
    // console.log(entity)
      dispatch(createRuleSuccess(entity)); })
  };

}

export function updateRule(ruletwo) {
 
      var data = {
        
        "fields": _.map(ruletwo, newRule => ({
            "ruleName": newRule.ruleName,
            "entityType": newRule.entityType
        }))
               
    };

    // console.log(data)
    return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    return fetch(`http://localhost:1337/entity/${entityId}`, {
            method: 'put',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
      
    }).then(r=>(r.json()))
    .then(entity => {
      alert(entity)
    alert(JSON.stringify(entity))      
    console.log(entity)
      dispatch(updateRuleSuccess(indexOfEntityToUpdate, entity)); })
  };

}

export function deleteRule(entityId, indexOfEntityToDelete) {


      return function(dispatch, getState) {
    
    return fetch(`http://localhost:1337/entity/${entityId}`, {
            method: 'delete'
      
    }).then(() => 
        dispatch(deleteRuleSuccess(indexOfEntityToDelete)))
    .catch(error => {
      throw(error);
    });
  };
}
export default function reducer(state = initialState, action) {
  let { type, payload } = action

  switch(type) {
    case types.LOAD_RULE_SUCCESS: 
      // state.push(action.course);
      // return state;
      debugger;
      return update(state, { entities: { $set: payload } });

    case types.CREATE_RULE_SUCCESS:

    // return update(state, { list: { $set: payload } })
        // return [
        //    ...state,
        //    Object.assign({}, payload)
        // ];
        return update(state, { rules: { $push: [payload] }  });



    case types.UPDATE_RULE_SUCCESS:
    debugger;
    let result = payload[1]
        return update(state, { entities: { $splice: [[payload[0], 1, result]]} });

    case types.DELETE_RULE_SUCCESS:
    
        //       let result = [
    
           // let oldState = Object.assign({}, state);
           // const indexOfEmpToDelete = oldState.findIndex(entity => entity.id == payload)
        //    oldState.filter(entity => entity.id !== payload)
        // //    ...state,Object.assign({}, r)
        // // ];
                return update(state, { entities: { $splice: [[payload, 1]]} });

    default: 
      return state;
  }

}
