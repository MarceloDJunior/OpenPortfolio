import React from 'react'
import UserAPI from './../api/userApi'
import logo from './../images/logo.png'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            codigo: '',
            email: '',
            senha: '',
            isSubmitDisabled : false,
            redirect: false
        };
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    startSession(codigo){

        let d = new Date();
        d.setTime(d.getTime() + (60*60*1000));
        localStorage.setItem("user_id", codigo);

        this.setState({ redirect: true })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ isSubmitDisabled: true })
        UserAPI.login(this.state.email, this.state.senha)
            .then((data) => {
                let codigo = data.codigo;
                if(!isNaN(codigo)){
                    this.startSession(codigo);
                }
                else{
                    this.setState({ isSubmitDisabled: false })
                }
            })
            .catch(function (error) {
                this.setState({ isSubmitDisabled: false })
            }.bind(this));
    };


    componentWillMount() {
        if(localStorage.getItem("user_id")){
            this.setState({ redirect: true })
        }
    }

    componentDidMount() {
        console.log("montou");
    }

    render() {

        if (this.state.redirect) {
            return (
                <Redirect to="/"/>
            )
        }

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
                                            <input type="submit" className="btn" value="Entrar"
                                            disabled={this.state.isSubmitDisabled}/>
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

export default Login;