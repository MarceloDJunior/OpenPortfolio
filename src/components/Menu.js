import React from 'react'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };

    }

    logout = () => {
        localStorage.removeItem("user_id");
        this.setState({ redirect: true })
    };

    componentWillMount() {
        if(!localStorage.getItem("user_id")){
            this.setState({ redirect: true })
        }
    }

    render() {

        if (this.state.redirect) {
            return (
                <Redirect to="/login"/>
            )
        }

        return (

            <header className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button data-toggle="collapse-side" data-target=".side-collapse"
                                data-target-2=".side-collapse-container" type="button"
                                className="navbar-toggle pull-left"><span
                            className="icon-bar"></span><span className="icon-bar"></span><span
                            className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-inverse side-collapse in">
                        <nav className="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/roster'>Roster</Link></li>
                                <li><Link to='/schedule'>Schedule</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" onClick={this.logout}>Sair</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Menu
