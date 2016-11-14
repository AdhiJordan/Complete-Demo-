import React, { PropTypes } from 'react';
import { browserHistory, Router, Link } from 'react-router';
import {RaisedButton} from 'material-ui'
import {Dialog, Paper, TextField} from 'material-ui';
import {FlatButton} from 'material-ui';
import 'app/css/ruleapp.css';
import {Tabs, Tab} from 'material-ui';
import Slider from 'material-ui';

const styles = {
  fullWidth: {
    width: '100%',
  },
  entityWidth: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
    height: 540,
  },
newEditPaper: {
  width: 1270,
    marginLeft: 28,
},
headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
},
first: {
  width: 610,
  height:10,
  marginTop: -12,
  marginLeft: 63,
  backgroundColor:'#f5f5f5',
},
entity: {
  backgroundColor:'#f5f5f5',
  color: '#000000',

},
endpoint: {
  backgroundColor:'#f5f5f5',
  color: '#000000',
},
hierarchy: {
  backgroundColor:'#f5f5f5',
  color: '#000000',
},
people: {
  backgroundColor:'#f5f5f5',
  color: '#000000',
},
cover: {
    backgroundColor:'#f5f5f5',

}
};

export default class Header extends React.Component {

render() {

        return ( 
        
          <div style={styles.fullWidth}>
             <div className="newHeader">
               <div className="rectangle">

                   <div className="logocasa">
                     <img src="images/logo3.png" width='206' height='38' />
                     </div>
                      <div className="wizardSetup">
                          
<a>
<div className="firstCircle">
</div>
</a>
<div className="connectLines">
</div>
<a>
<div className="secondCircle">
</div>
</a>
<div className="connectSecond">
</div>
<a>
<div className="thirdCircle">
</div>
</a>
<div className="connectThird">
</div>
<div className="triangle">
</div>
<div className="fullUpload">
<a>
<div className="arrow">&#x21E7;</div>
<div className="Line">&#8213;</div>
<div className="firstLine">&#8739;</div>
<div className="secondLine">&#8739;</div>
</a>
</div>
                      </div>
                        <p className="upload">UPLOAD</p>
                        <p className="business">BUSINESS SETUP</p>

                        <div className="next">
                         <RaisedButton label="NEXT" disabled={true}  labelColor="#fff"  backgroundColor="#00a6b6" />
                     </div>

  
               </div>

 <div className="rectangles">
      
              <div className="groupHeader">
              
              <div className="style">

              <div className="styleTwo">

<div className="styleThree">

              <button tabindex="0" type="button" className="buttonEntity">
              <div className="changeColor">
              <nav>
              <Link className="active" to="/">
              
               <div className="imageEntity">
               
              <img src="images/group.svg" width='46' height='46' />
              
              </div>
              <div className="textEntity">             
              <label>ENTITES</label>             
               </div>
               </Link>
               </nav>
               
               </div>
              </button>

             

               <button tabindex="1" disabled={true} type="button" className="buttonEndPoint">
              <div className="changeEnd">
              <Link className="disabled" to="/p">
             
               <div className="imageEnd">
                
                 <img src="images/group(1).svg"  width='46' height='46' />
                
                 </div>
                 <div className="textEnd">             
              <label>END POINT</label>             
               </div>
               </Link>
               </div>
              </button>
              


             <button tabindex="2" type="button" className="buttonHierarchy">
              <div className="changeHier">
              <a className="disabled">
               <div className="imageHier">
              <img src="images/endpoint.svg" width='46' height='46' />
              </div>
              <div className="textHier">             
              <label>HIERARCHY</label>             
               </div>
               </a>
               </div>
              </button>


              <button tabindex="3" type="button" className="buttonPeople">
              <div className="changePeople">
              <a className="disabled">
               <div className="imagePeople">
              <img src="images/icons-people.svg" width='46' height='46' />
              </div>
              <div className="textPeople">             
              <label>PEOPLE</label>             
               </div>
               </a>
               </div>
              </button>
              </div>
              <div className="top">
              
              <Tabs style={styles.cover}
              inkBarStyle={{backgroundColor:"#f5f5f5"}}>
              <Tab data-route="/">
              
             <div className="slider">
              </div>
              
              </Tab>
              <Tab data-route="/e">
            <div className="sliderOne">
              </div>
               </Tab>
              <Tab data-route="/p">
              <div className="sliderTwo">
              </div>
               </Tab>
              <Tab data-route="/c">
              <div className="sliderThree">
              </div>
               </Tab>
              
              </Tabs>
              
              </div>


</div>      
             </div>
             </div>
          </div>

          </div>  
          <div style={styles.entityWidth} >                   
{this.props.children}
</div>
        </div>   
         

        );
}
};

