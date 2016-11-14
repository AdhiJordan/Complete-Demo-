import React from 'react'
import {Router, Route, IndexRoute, RouteHandler} from 'react-router'
import {Provider} from 'react-redux'
import EntityScreen from 'pages/EntityScreen'
import PeopleScreen from 'pages/PeopleScreen'
import CampaignScreen from 'pages/CampaignScreen'
import TestingPage from 'pages/TestingPage'
import Header from 'views/EntityScreen/Header'
import Radiobutton from 'views/header/Radiobutton'
import * as actions from 'actions'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/toastr/build/toastr.min.css';

const styles = {
  container: {
    width: 800,
  },
};


export default class App extends React.Component {

  componentWillMount() {
    this.props.store.dispatch(actions.loadEntities())
    this.props.store.dispatch(actions.loadPersons())
    this.props.store.dispatch(actions.loadGroups())
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <Route path = "/" component={Radiobutton}>
              <IndexRoute component={EntityScreen} />
              <Route path='p' component={PeopleScreen} />
              <Route path='c' component={CampaignScreen} />
              <Route path='t' component={TestingPage} />
         </Route>
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
}
