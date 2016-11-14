import update from 'react-addons-update'
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import * as types from './getActionsTypes';

const initialState = {
  rules: [],
  peoples: [],
  groups: [],
  contents: []
}

export function getPeoplesSuccess(peoples) {

  
  return { type: types.GET_PEOPLE_SUCCESS, payload: peoples };

}

export function getPeoples() {
  // alert("getPeople")
   return function(dispatch, getState) {
    // dispatch(beginAjaxCall());
    return fetch('http://localhost:1337/peoples', {
            method: 'get',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        
      
    }).then(r=>(r.json()))
    .then(peoples => {
      
    //   alert(peoples)
    // alert(JSON.stringify(peoples))      
      dispatch(getPeoplesSuccess(peoples)); })
  };
}

export default function reducer(state = initialState, action) {
  let { type, payload } = action

  switch(type) {
    case types.GET_PEOPLE_SUCCESS: 
      debugger;
      return update(state, { peoples: { $set: payload.peoples }, groups: { $set: payload.groups } });

    default: 
      return state;
  }

}


