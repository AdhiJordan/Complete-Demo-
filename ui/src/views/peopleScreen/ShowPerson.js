import React, { PropTypes } from 'react';
import 'app/css/peopleScreen/app.css';
import classNames from 'classnames'
import Highlight from 'react-highlighter'

class ShowPerson extends React.Component {

	    constructor(props, context) {
        super(props, context);
        this.state = {
        	showGroup: false,
        	hover: false

        }
        this.showGroup = this.showGroup.bind(this)
        this.toggleHover1 = this.toggleHover1.bind(this)
        this.toggleHover2 = this.toggleHover2.bind(this)
    }
    showGroup() {
    	if(this.props.opacity !== 0.5) {
    	return this.setState({showGroup: !this.state.showGroup})
        }
       return '' 
    }
    getStyle(dummy) {

    	let opacity = this.props.opacity
    	
        if(dummy === 0) {
            return {opacity: opacity,  cursor: opacity===0.5 ? 'not-allowed':'auto', backgroundColor: this.state.hover ? '#BDBDBD' : '#ffffff' }
        }
        return { cursor: opacity===0.5 ? 'not-allowed':'pointer' }

    }
	     toggleHover1() {
	    return this.setState({hover: true})
	  }
	     toggleHover2() {
	    return this.setState({hover: false})
	  }

	   hei(name) {
	   	let index = name.indexOf("c")
	   	if(index !== -1 ) {
	   	let f1 = name.substring(0, index)
	   	let f2 = name.substring(index +1, name.length)
	   	console.log("name")
	   	console.log(name)	
	   	console.log(f1)
	   	console.log(f2) 
	   	return (<div><span>{f1}</span><span style={{color: 'yellow'}}>{"c"}</span>{f2}<span></span></div>)  
	    }
          
	   }


        render() {
           let {person, onClick, opacity} = this.props
           let groups = []
           for(let i = 0; person.groups && i < person.groups.length; i++) {
           	  groups.push(<div>{person.groups[i].groupName}</div>)
        }
        //   let personsList = classNames({
        //   personsList: true,
        //   cf: true

        // })
	return ( <div> {person.name !== undefined &&
               
				<div className="personsList cf" style={this.getStyle(0)}>
				
	        		<span onClick={onClick} style={this.getStyle()} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover2}>{person.name}</span>
	            	<span onClick={onClick} style={this.getStyle()} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover2}>{person.email}</span>
	            	<span onClick={onClick} style={this.getStyle()} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover2} >{person.phone}</span>
	            	<span onClick={this.showGroup} style={this.getStyle()}>GROUPS</span>
	            	{this.state.showGroup &&
	            	 <div className="cf">
	                    {groups}
	            	 </div>
	                }
	            	<hr />
            	</div>
            	
            }
            </div>
		   );
	   }
}

export default ShowPerson
