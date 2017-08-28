import React from 'react';
import UserAPI from './../api/userApi';
import Header from '../components/Header';
import './../css/bootstrap.min.css';
import './../css/font-awesome.css';
import './../css/style.css';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    componentWillMount() {
        if (localStorage.getItem("user_id")) {
            UserAPI.getUser(localStorage.getItem("user_id"));
        }
        else {
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="/login"/>
            )
        }
        else {
            return (
                <div>
                    <Header user={this.props.user}/>
                    <main>
                        <div className="container side-collapse-container">
                            {this.props.children}
                        </div>
                    </main>
                </div>
            )
        }
    }
}
const mapStateToProps = function (store) {
    return {
        user: store.userState.user,
    };
};

export default connect(mapStateToProps)(App);
