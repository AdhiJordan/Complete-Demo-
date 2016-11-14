import Search from 'react-search'
import Select from 'react-select'
import Highlight1 from 'react-highlighter'
import Highlight2 from 'react-highlight'
import {Tabs,Tab} from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import ReactDOM from 'react-dom'
import React, { Component, PropTypes,  } from 'react'
 import EntityScreen from 'pages/EntityScreen'
import PeopleScreen from 'pages/PeopleScreen'
import CampaignScreen from 'pages/CampaignScreen'
import TestingPage from 'pages/TestingPage'
import DropDown from 'views/CampaignScreen/DropDown'
import Radiobutton from 'views/header/Radiobutton'

      let colours = [{
        name: "Red",
        hex: "#F21B1B"
      }, {
        name: "Blue",
        hex: "#1B66F2"
      }, {
        name: "Green",
        hex: "#07BA16"
      }];

 const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  b: {
    padding: 10,
    color: '#000 !important',
    backgroundColor: '#f5f5f5',
  },
  c: {
    margin: 10
  }
};

export default class TestComponent extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    }
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    })
  }
  HiItems(items) {
    console.log(items)
  }
 
  render () {
    let items = [
      { id: 0, value: 'ruby' },
      { id: 1, value: 'javascript' },
      { id: 2, value: 'lua' },
      { id: 3, value: 'go' },
      { value: 'julia' }
    ]
 
    return (

      <div>
        <Search items={items} />
 
        <Search items={items}
                placeholder='Pick your language'
                max_selected={3}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} />
        <Select
               name="form-field-name"
               value="one"
               options={items}
               onChange={this.HiItems.bind(this)} />
               <Highlight1 search="brown" matchStyle={{color: 'red'}}>
               
                    
                      The quick brown fox jumps over the lazy dog
                   
               
               </Highlight1>
               <Highlight2 innerHTML={true}>
                  {<div><span>{"f1"}</span><span style={{color: 'yellow'}}>{"c"}</span>{"f2"}<span></span></div>}
                </Highlight2>




 


      <div>
      <Radiobutton />
        <Tabs
          onChange={this.handleChange.bind(this)}
          value={this.state.slideIndex}
          tabTemplateStyle={styles.a}
          style={styles.b}
          contentContainerStyle={styles.c}
        >
          <Tab label="Tab One" value={0} icon={<img src="images/group(1).svg" width='46' height='46' />}/>
          <Tab label="Tab Two" value={1} icon={<img src="images/endpoint.svg" width='46' height='46' />}/>
          <Tab label="Tab Three" value={2} icon={<img src="images/icons-people.svg" width='46' height='46' />}/>
          <Tab label="Tab Three" value={3} icon={<img src="images/endpoint.svg" width='46' height='46' />}/>
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange.bind(this)}
        >
          
          <EntityScreen />
          <PeopleScreen />
         
         <CampaignScreen />
           
          <DropDown list={colours} selected={colours[0]} />
        </SwipeableViews>
      </div>
   

      </div>

    )
  }
}
