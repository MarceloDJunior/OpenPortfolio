import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import store from '../store';
import {logoutSuccess} from '../actions/user-actions';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };

    }

    logout = () => {
        localStorage.removeItem("user_id");
        store.dispatch(logoutSuccess(true));
    };

    render() {

        if (this.props.logout) {
            return (
                <Redirect to="/login"/>
            )
        }

        else{
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
                                    <li><Link to='/login'>{this.props.user.nome}</Link></li>
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
}
const mapStateToProps = function (store) {
    return {
        user: store.userState.user,
        logout: store.userState.logout
    };
};

export default connect(mapStateToProps)(Menu);