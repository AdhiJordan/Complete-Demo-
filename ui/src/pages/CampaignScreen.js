import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {createSelector} from 'reselect'
import {bindDispatch} from 'common/util/redux'
import { browserHistory } from 'react-router';
import {RaisedButton, FlatButton, Dialog, Paper, TextField} from 'material-ui';
// import 'app/css/campaignScreen/app.css';
import classNames from 'classnames'
import _ from 'lodash' 
import Ajv from 'ajv'   
import entitySchema from 'schema/entity'
//Components
import Search from 'views/peopleScreen/Search'
import StartPage from 'views/campaignScreen/StartPage'
import CampaignForm from 'views/campaignScreen/CampaignForm'
import Full from 'views/campaignScreen/Full'
import SavedCampaign from 'views/CampaignScreen/SavedCampaign'
import NewButton from 'views/common/NewButton'

class CampaignScreen extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {       
           startPage: true,
           componentName: "",
           ruleName: "PICK A RULE",
           componentIndex: 0,
           componentDatas: [],
           componentDatasEscalation: [],
           escalation: false,
           atContextPeople: false,
           forPeople: [],
           campaigns: []
        }
        this.hideStartPage = this.hideStartPage.bind(this)
        this.changeComponent = this.changeComponent.bind(this)
        this.closeFull = this.closeFull.bind(this)
        this.componentDatas = this.componentDatas.bind(this)
        this.hideCampaignForm = this.hideCampaignForm.bind(this)
        this.addCampaign = this.addCampaign.bind(this)
        this.deleteCampaign = this.deleteCampaign.bind(this)
    }
    hideStartPage(e) {
        // e.preventDefault()
        return this.setState({startPage: false})
    }
    hideCampaignForm() {
      return this.setState({startPage: true})
    }
    addCampaign(campaignName) {
      // alert(campaignName)
      let {campaigns, ruleName } = this.state
        return this.setState({startPage: true, campaigns: campaigns.concat({campaignName: campaignName, ruleName: ruleName})})
    }
    changeComponent(escalation, name, index) {
        console.log("index")
        console.log(name)
        console.log(this.props.actions)
        if(name === 'people')
          this.props.actions.getPeoples()
        this.setState({componentName: name, componentIndex: index, escalation: escalation})
        // .then(() => {
        //                this.setState({componentName: name, componentIndex: index, escalation: escalation})
        //         })
       
    }
    closeFull(v) {
        // e.preventDefault()
        let {forPeople, componentIndex, atContextPeople, escalation} = this.state
        alert(v)
        return this.setState({componentName: '', forPeople: forPeople.concat({index: componentIndex, atContextPeople: v})})
    }
    componentDatas(name) {
      alert(name)
      let {componentDatas, componentIndex, escalation, componentDatasEscalation} = this.state
      let newComponentDatas
      if(!escalation) {
       newComponentDatas = componentDatas.filter( c => c.index !== componentIndex)
       console.log("if")
       console.log(newComponentDatas)
       this.setState({componentName: '', componentDatas: newComponentDatas.concat({index: componentIndex, name: name, escalation: escalation})})
      }
      else {
       newComponentDatas = componentDatasEscalation.filter( c => (c.index !== componentIndex) && (c.escalation))
       console.log("else")
       console.log(newComponentDatas)
       this.setState({componentName: '', componentDatasEscalation: newComponentDatas.concat({index: componentIndex, name: name, escalation: escalation})})
      }
      
      
    }
    fullComponent() {
      let {componentName, componentIndex, atContextPeople} = this.state
        if(componentName !== '') {
            return <Full 
                    closeFull={this.closeFull}
                    componentName={componentName} 
                    ruleName={ this.ruleName.bind(this)}
                    componentDatas={this.componentDatas}
                    initialGet={this.props.initialGet} />
        }
        return ''
    }
     getComponentDatas() {
      console.log("ee")
      console.log(this.state.componentDatas)
        return this.state.componentDatas
      }
    showStartPage() {
      let {ruleName, componentDatas, componentDatasEscalation, index, atContextPeople, forPeople, startPage} = this.state
      
        if(!startPage) {
                
          
            return <CampaignForm
                        addCampaign={this.addCampaign}
                        onClick={this.changeComponent}
                        ruleName={ruleName}
                        componentDatas={componentDatas}
                        componentDatasEscalation={componentDatasEscalation}
                        hideCampaignForm={this.hideCampaignForm}
                        forPeople={forPeople}
                       />
        }
    }
    ruleName(ruleName) {
        // alert(ruleName)
        return this.setState({componentName: '', ruleName: ruleName})
    }
    showCampaigns() {
      let { campaigns, startPage} = this.state
      if(startPage && campaigns.length === 0)
        return <StartPage 
                        hideStartPage={this.hideStartPage} startPage={startPage} l={campaigns.length}/>
        return campaigns.map((campaign, index) => <SavedCampaign 
                                                      campaign={campaign} 
                                                      index={index} 
                                                      deleteCampaign={this.deleteCampaign}/>)
    }
    deleteCampaign(index) {
      alert(index)
      let newCampaings = this.state.campaigns
      newCampaings.splice(index, 1)
      this.setState({campaigns: newCampaings})
    }
   
    render() {

        let {initialGet, actions} = this.props
        // console.log('groups')
        // console.log(groups)
        // console.log(peoples)
        let {groupId, opacity, filterCondition, componentName,componentDatas, startPage, campaigns} = this.state
        console.log("componentDatas")
        console.log(componentDatas)

    	return (
    		<div className="main">
                { this.fullComponent()}
                <div className="mainComponent" style={componentName === "" ? {display:"block"} : {display:"none"} }>
                
                    <Search                                                                     
                        filterTextInput={this.filterTextInput} 
                        filter={this.filterTextInput} 
                        placeholder="Find a Campaign" />
                        <NewButton 
              onClick={this.hideStartPage} 
              value="CAMPAIGN" 
                    style={startPage ? {opacity: 1}:{opacity: 0.5}}/>
                    {this.showCampaigns()}
                    
                    { this.showStartPage() }
                </div>
    		</div>
    	);
    }
}

CampaignScreen.propTypes = {

    // group: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired

};

const selector = createSelector(
  state => state.campaignScreen.initialGet,
  (initialGet) => ({ initialGet })
)

export default connect(selector, bindDispatch)(CampaignScreen);

