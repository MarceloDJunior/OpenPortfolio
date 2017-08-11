import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from './Menu'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <Switch>
            <Route exact path='/login' component={null}/>
            <Route path='/' component={Menu}/>
        </Switch>
    </header>
)

export default Header
