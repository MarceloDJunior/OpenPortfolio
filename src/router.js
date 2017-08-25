import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './containers/App';
import Login from './containers/Login';
import Cadastro from './containers/Cadastro';
import Home from './containers/Home';
import Roster from  './containers/Roster';
import Schedule from './containers/Schedule';
import PageNotFound from './containers/PageNotFound';

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/cadastro' component={Cadastro}/>
            <App>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/roster' component={Roster}/>
                    <Route path='/schedule' component={Schedule}/>
                    <Route path='*' exact={true} component={PageNotFound} />
                </Switch>
            </App>
        </Switch>
    </BrowserRouter>
)