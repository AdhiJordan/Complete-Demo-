import React from 'react';
import './test.css'
import Radiobutton from './Radiobutton'


class ButtonGroup extends React.Component{
constructor(props){
  super(props)
  this.state={
  action:0
  }
}

reRender(){
  console.log(this.state.action);
  this.setState({button1:''})
}
render(){

return(
<div>
<Radiobutton/>
</div>

);
}


}
export default ButtonGroup;
