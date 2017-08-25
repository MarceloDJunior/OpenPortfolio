import React from 'react';
import {Form, Control, Errors} from 'react-redux-form';
import UserAPI from './../api/userApi';
import {Link} from 'react-router-dom';
import logo from './../images/logo.png';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import FormInput from '../components/FormInput';

class Login extends React.Component {

    handleSubmit = (user) => {
        UserAPI.login(user.email, user.senha);
    };

    renderErrorMessage() {
        if (this.props.error !== '') {
            return (
                <div className="error">
                    {this.props.error}
                </div>
            )
        }
    }

    render() {

        if (!this.props.user || localStorage.getItem("user_id")) {
            return (
                <Redirect to="/"/>
            )
        }
        else {
            return (
                <div className="login-page">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="login-box">
                                        <div className="logo">
                                            <img src={logo} className="img-responsive" alt="Open Portfolio"/>
                                        </div>
                                        <div className="login-titulo">
                                            <h4>Login</h4>
                                        </div>
                                        {this.renderErrorMessage()}
                                        <Form model="loginForm"
                                              onSubmit={(val) => this.handleSubmit(val)}
                                        >
                                            <div className="form-group">
                                                <Control.text
                                                    model="loginForm.email"
                                                    component={FormInput}
                                                    className="form-control login-input"
                                                    placeholder="E-mail"
                                                    validators={{
                                                        required: (val) => !!val.length
                                                    }}
                                                    validateOn="change"
                                                    mapProps={{
                                                        invalid: ({fieldValue}) => !fieldValue.valid
                                                        && fieldValue.touched
                                                    }}
                                                />
                                                <Errors
                                                    className="error"
                                                    model="loginForm.email"
                                                    messages={{
                                                        required: "Informe o seu e-mail",
                                                    }}
                                                    show="touched"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Control.password
                                                    model="loginForm.senha"
                                                    component={FormInput}
                                                    className="form-control login-input"
                                                    placeholder="Senha"
                                                    validators={{
                                                        required: (val) => !!val.length
                                                    }}
                                                    validateOn="change"
                                                    mapProps={{
                                                        invalid: ({fieldValue}) => !fieldValue.valid
                                                        && fieldValue.touched
                                                    }}
                                                />
                                                <Errors
                                                    className="error"
                                                    model="loginForm.senha"
                                                    messages={{
                                                        required: "Informe a sua senha",
                                                    }}
                                                    show="touched"
                                                />
                                            </div>
                                            <div className="btn-login">
                                                <button
                                                    className="btn"
                                                    disabled={this.props.isLoginBtnDisabled}>
                                                    Entrar
                                                </button>
                                            </div>
                                            <div className="text-center">Não possui uma conta?
                                                <Link to="/cadastro">
                                                    <span className="cadastre-se">Cadastre-se!</span>
                                                </Link>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = function (store) {
    return {
        user: store.userState.user,
        error: store.userState.error,
        isLoginBtnDisabled: store.loginLayoutState.isLoginBtnDisabled
    };
};

export default connect(mapStateToProps)(Login);