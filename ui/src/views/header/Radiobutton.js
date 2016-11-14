import React from 'react';
import Tap from './Tap'

class Radiobutton extends React.Component{
constructor(props){
  super(props)
  this.state={
    now:1,
    visited:[1],
    title:['BUSINESS SETUP','RULE ENGINE','MARKETTING ANAYLTICS']
  }
}

buttonClicked(num){
let visited=this.state.visited;
console.log(visited);
this.setState({now :num, visited: visited.indexOf(num)===-1?visited.concat(num):visited});
}

// componentDidMount(){
//   this.setState({clicked:0});
// }
render(){
  let message=this.state.title[this.state.now-1];
var buttons=[];
let visited=this.state.visited;
for (var i = 1; i <=3; i++) {
  if(this.state.now===i){
    name='button large';
  }else if(this.state.now != i && visited[i-1]===i){
    name ='button color';
  }else {
    name='button'
  }
  console.log(i);
buttons[i-1]=(<div key={i} className='circle'>
<a onClick={this.buttonClicked.bind(this, i)}><div className={name}>
    </div></a>
    </div>);
}
let numOfTap,title=[],image=[];
if(this.state.now===1){
numOfTap=4;
title=['ENTITIES','ENDPOINT TYPES','HIERARCHY','PEOPLE'];
image=['imagess/group.svg', 'imagess/group.svg', 'imagess/group.svg', 'imagess/group.svg']
}else if(this.state.now===2){
numOfTap=2;
title=['RULES','CAMPAIGNS'];
image=['imagess/group.svg', 'imagess/group.svg']
}else{
numOfTap=3;
image=['imagess/group.svg', 'imagess/group.svg', 'imagess/group.svg', 'imagess/group.svg']
title=['SUMMARY','MENU ITEM1','MENU ITEM2', 'MENU ITEM3']
}
// his.props.value>0?name='button':this.state.complition>0?name+='button color':name='button';

return(

<div>
  <header className="Black-header">

      <div className="line1">
        <img className="LOGO-BOTH" src="imagess/logo3.png" alt="" />
        <hr className='l1'/>
<div className="Steps">{
    buttons
  }</div>
  <img className="Panel-options" src="imagess/panel.png" alt="" />
  <div className="line2">
      <div className="UPLOAD">
          <p>
              <span className="fa fa-upload" aria-hidden="true"></span> UPLOAD</p>
      </div>
      <div className="RULE-ENGINE">{message}</div>
      <div className="Rectangle-4-Copy" onClick={this.buttonClicked.bind(this, this.state.now+1)}>
          NEXT
      </div>
  </div>
  </div>
  <div className='triangleHeader'></div>
</header>
<Tap numOfTap={numOfTap} title={title} image={image} tabsName={message}/>
</div>
);
}

}
export default Radiobutton;
