import React from 'react';
import './test.css';
import './casa.css';
import EntityScreen from 'pages/EntityScreen'
import PeopleScreen from 'pages/PeopleScreen'
import CampaignScreen from 'pages/CampaignScreen'
import RulePage from 'pages/RulePage'

class Tap extends React.Component{
constructor(props){
  super(props)
  this.state={
clicked:0 ,
currentComponent: <div></div>
  
  }
}
componentWillMount() {
	if(this.props.tabsName === 'BUSINESS SETUP')
		return this.setState({currentComponent: <EntityScreen />});
	// if(this.props.tabsName === 'RULE ENGINE')
	// 	return this.setState({currentComponent: <PeopleScreen />});
	// if(this.props.tabsName === 'MARKETTING ANAYLTICS')
	// 	return this.setState({currentComponent: <CampaignScreen />});
}
handleClick(e){
alert(e)
if(this.props.tabsName === 'BUSINESS SETUP') {
	  if(e ===0) 
			return this.setState({clicked:e, currentComponent: <EntityScreen />});
		// if(e ===1) 
		// 	return this.setState({clicked:e, currentComponent: <EntityScreen />});
		// if(e ===2)
		// 	return this.setState({clicked:e, currentComponent: <EntityScreen />});
		if(e ===3) 
			return this.setState({clicked:e, currentComponent: <PeopleScreen />});
}
if(this.props.tabsName === 'RULE ENGINE') {
	if(e ===0) 
			return this.setState({clicked:e, currentComponent: <RulePage />});
	  if(e ===1) 
			return this.setState({clicked:e, currentComponent: <CampaignScreen />});
}
return this.setState({clicked:e, currentComponent: <div></div>});
//
}
// myfunc(e){
// 	render(<div>{this.state.currentComponent}</div>,document.getElementById('mari'));
// }
render(){
var tab=[],
barWidth=20*this.props.numOfTap,
tabWidth=100/this.props.numOfTap,
styl1={width:tabWidth+"%"},
styl2={width:barWidth+"%"};
console.log('tabsName')
console.log(this.props.tabsName)

for (var i = 0; i < this.props.numOfTap ; i++) {
	if(this.state.clicked===i){
tab[i]=(<div className="section col-md-3" onClick={this.handleClick.bind(this,i)} style={styl1}>
<div className="logo">
<img src={this.props.image[i]} />
</div>
<div className="message highlight">
{this.props.title[i]}
</div>
<hr className="line" />
</div>);
}else{
	tab[i]=(<div className="section col-md-3" onClick={this.handleClick.bind(this,i)} style={styl1}>
<div className="logo">
<img src={this.props.image[i]} />
</div>
<div className="message">
{this.props.title[i]}

</div>
<hr className="lineHide"/>
</div>);

}

}
  return(
<div className="cf headerTab">
	<div className="tab" style={styl2}>
		{tab}
	</div>
{this.state.currentComponent}
</div>
  );
}

}
export default Tap;
