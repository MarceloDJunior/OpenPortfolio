import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './Login'
import Pages from './Pages'

const Main = () => (

    <Switch>
        <Route exact path='/login' component={Login}/>
        <Route path='/' component={Pages}/>
    </Switch>

)

export default Main
