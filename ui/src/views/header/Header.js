import React, { Component } from 'react';
import './casa.css';

class Header extends Component{

  render(){
    console.log(this.props);
    return(
      <header className="Black-header">
          <div className="line1">
              <img className="LOGO-BOTH" src="logo.png" alt="" />
              <img className="Steps" src={this.props.src} alt="" />
              <img className="Panel-options" src="panel.png" alt="" />
          </div>



          <div className="line2">
              <div className="UPLOAD">
                  <p>
                      <span className="fa fa-upload" aria-hidden="true"></span> UPLOAD</p>
              </div>
              <div className="RULE-ENGINE">{this.props.heading}</div>
              <div className="Rectangle-4-Copy">
                  NEXT
              </div>
          </div>
      </header>
    );
  }
}
export default Header;
