import React, { Component } from 'react';

import logo from './../images/logo.png';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert('Email: ' + this.state.email);
        alert('Senha: ' + this.state.senha);
    }

    render() {
        return (
            <div className="login-page">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="login-box">
                                    <div className="logo">
                                        <img src={logo} className="img-responsive"/>
                                    </div>
                                    <div className="login-titulo">
                                        <h4>Login</h4>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" value={this.state.email}
                                                   name="email"
                                                   onChange={this.handleChange}
                                                   className="form-control login-input"
                                                   placeholder="E-mail"/>

                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={this.state.senha}
                                                   name="senha"
                                                   onChange={this.handleChange}
                                                   className="form-control login-input"
                                                   placeholder="Senha"/>
                                        </div>

                                        <div className="btn-login">
                                            <input type="submit" className="btn" value="Entrar"/>
                                        </div>


                                        <div className="text-center">Não possui uma conta?
                                            <a href="#">
                                                <span className="cadastre-se">Cadastre-se!</span>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login