import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import { Redirect } from 'react-router-dom'

class Pages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };

    }

    componentWillMount(){
        if(!localStorage.getItem("user_id")){
            this.setState({
                redirect: true
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="/login"/>
            )
        }
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/roster' component={Roster}/>
                    <Route path='/schedule' component={Schedule}/>
                </Switch>
            </main>

        )
    }
}
export default Pages
