import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Menu from './Menu'

class Header extends React.Component {


    render() {
        return (
            <Switch>
                <Route exact path='/login' component={null}/>
                <Route path='/' component={Menu}/>
            </Switch>
        )
    }

}
export default Header
