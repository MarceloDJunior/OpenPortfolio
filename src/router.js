import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from './components/Main';
import Header from './components/Header';

export default (
    <Router history={browserHistory}>
        <Route exact path='/login' component={Login}/>

        <Route path='/'>

        </Route>
    </Router>
)