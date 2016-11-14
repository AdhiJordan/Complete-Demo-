import React, { PropTypes } from 'react';
import styles from 'app/css/campaignScreen/style.js';
import Buttons from './Buttons'

export default class ChannelButtons extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
           buttons: [],
        }
        
    }
    // componentWillMount() {
    //     this.setState({component: this.props.component})
    // }
    getComponent() {
        return this.props.component
    }
    addButtons() {
        
        this.setState({buttons: this.state.buttons.concat(1)})
    }
    getContentName(index) {
        let { component } = this.props
        if(component == undefined) {
            return ''
        }
        if(index == "zero") {
            // alert(component)
            let aa = component.filter(a => a.index === 0)
            if(aa.length === 0)
                return "PICK CONTENT"
            return aa[0].name
        }
        else {

       let bb = component.filter(a => a.index === index +1)
        if(bb.length === 0)
                return "PICK CONTENT"
         return bb[0].name
     }
       
    }
    getPeopleName(index) {
        let { forPeople } = this.props
        if(index == "zero") {
            // alert(component)
            let aa = forPeople.filter(a => a.index === 0 && a.atContextPeople)
            if(aa.length === 0)
                return "TO WHOM?"
            return "@ CONTEXT"
        }
        else {

       let bb = forPeople.filter(a => a.index === index +1 && a.atContextPeople)
        if(bb.length === 0)
                return "TO WHOM?"
         return "@ CONTEXT"
     }
    }
        
    render() {
        let {onClick, component, forPeople} = this.props
        console.log("component 3")
        console.log(component)
        console.log(forPeople)
    	return (
    		<div>
                  <Buttons 
                    onClick={onClick} 
                    index={0} 
                    component={component} 
                    contentName={this.getContentName("zero")} 
                    peopleName={this.getPeopleName("zero")}
                    />
                  {this.state.buttons.map((b, index) => 
                    <Buttons 
                        onClick={onClick} 
                        index={index+1} 
                        component={component}
                        contentName={this.getContentName(index)}
                        
                        peopleName={this.getPeopleName(index)}
                        /> 
                    )}
     
                  <a 
                    className="addAnotherBtn" 
                    onClick={() => {this.addButtons()}} >
                        <img src="images/channel1.svg" />
                        <span>Add another?</span>
                  </a>
    		</div>
    	)
    }
}

ChannelButtons.propTypes = {

}