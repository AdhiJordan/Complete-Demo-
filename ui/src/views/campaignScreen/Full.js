import React, { PropTypes } from 'react';
import styles from 'app/css/campaignScreen/style.js';
import RulePage from './RulePage'
import ContentPage from './ContentPage'
import PeoplePage from './PeoplePage'
import Channels from './Channels'

export default class Full extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            context: false,
        }
        this.atContext = this.atContext.bind(this)
        this.closeFull = this.closeFull.bind(this)
        
    }
    getComponent() {
        let {componentName, ruleName, componentDatas, initialGet} = this.props
        if(componentName === "rule") {
            return <RulePage ruleName={ruleName}/>
        }
        else if(componentName === "content") {
            return <ContentPage componentDatas={componentDatas}/>
        }
        else if(componentName === "people"){
            return <PeoplePage 
                    peoples={initialGet.peoples} 
                    groups={initialGet.groups} 
                    componentDatas={componentDatas} 
                    atContext={this.atContext}
                    context={this.state.context}
                    />
        }
        else if(componentName === "EMAIL" || componentName === "SMS" || componentName === "PUSH NOTIFICATION" || componentName === "WEB PUSH") {
            return <Channels componentName={componentName}  componentDatas={componentDatas}/>
        }
        return ''
    }
    closeFull() {
        this.props.closeFull(this.state.context)
    }
    atContext() {
        this.setState({context: !this.state.context})
    }
    render() {
    	let {closeFull, componentName} = this.props
    	return (
    		<div className="full">
    	       <div className="innerComponent">
                   <a className="closeBtn" onClick={this.closeFull}>X</a>
                   {this.getComponent()}
               </div>
    		</div>
    	)
    }
}

Full.propTypes = {

}