import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Menu from './Menu'
import PropsRoute from './../util/propsRoute'

class Header extends React.Component {


    render() {
        return (
            <Switch>
                <Route exact path='/login' component={null}/>
                <PropsRoute path='/' component={Menu} usuario={this.props.usuario}/>
            </Switch>
        )
    }

}
export default Header
