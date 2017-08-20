import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './Login'
import Pages from './Pages'
import PropsRoute from './../util/propsRoute'

const Main = (props) => (

    <Switch>
        <PropsRoute exact path='/login' component={Login} usuario={props.usuario}/>
        <PropsRoute path='/' component={Pages} usuario={props.usuario}/>
    </Switch>

)

export default Main
