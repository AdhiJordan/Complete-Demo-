import React from 'react';
import {Route, IndexRoute } from 'react-router';

import App from 'app/App';
import HomePage from 'pages/HomePage'
import TestingPage from 'pages/TestingPage'

debugger;
export default (
	
	<Route path = "/" component={App}>
	    <IndexRoute component={HomePage} />
         <Route path='test' component={TestingPage} />
	</Route>
);