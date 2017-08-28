import React from 'react'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import store from '../store';
import {logoutSuccess} from '../actions/user-actions';
import $ from 'jquery';

class Header extends React.Component {

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

    componentDidMount(){
        const sideslider = $(this.refs.collapseside);
        const sel = $(sideslider).attr('data-target');
        const sel2 = $(sideslider).attr('data-target-2');
        const link = $(this.refs.navbar).find('a');
        $(sideslider).on("click", function(){
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
        });
        $(link).on("click", function(){
            console.log("clickou");
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
        });
    }

    componentWillUnmount(){
        $(this.refs.collapseside).off("click");
        $(this.refs.collapseside).find('.navbar')
            .find('a').off("click");
    }

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
                                    ref="collapseside"
                                    className="navbar-toggle pull-left"><span
                                className="icon-bar"></span><span className="icon-bar"></span><span
                                className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-inverse side-collapse in">
                            <nav className="navbar-collapse">
                                <ul className="nav navbar-nav" ref="navbar">
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
        logout: store.userState.logout
    };
};

export default connect(mapStateToProps)(Header);