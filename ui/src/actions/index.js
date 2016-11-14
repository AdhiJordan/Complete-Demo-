// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux'
import main from './entityScreen/mainState'
import newComponent from './entityScreen/newComponentState'
import editComponent from './entityScreen/editComponentState'

import groups from './peopleScreen/groupActions'
import persons from './peopleScreen/personActions'

import mains from './ruleScreen/mainState'
import customer from './ruleScreen/mainCustomer'

import initialGet from './campaignScreen/getActions'

export * from './entityScreen/mainState'
export * from './entityScreen/newComponentState'
export * from './entityScreen/editComponentState'

export * from './peopleScreen/groupActions'
export * from './peopleScreen/personActions'

export * from './ruleScreen/mainState'
export * from './ruleScreen/mainCustomer'



export * from './campaignScreen/getActions'

export default combineReducers({
        entityScreen: combineReducers({main, newComponent, editComponent}),
        peopleScreen: combineReducers({groups, persons}),
        campaignScreen: combineReducers({initialGet}),
        ruleScreen: combineReducers({mains,customer,routing}),
 	routing
 })
