import React from 'react';
import {Form, Control, Errors, actions} from 'react-redux-form';
import {Link} from 'react-router-dom';
import UserAPI from './../api/userApi';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import FormInput from '../components/FormInput';
import store from '../store';


class Cadastro extends React.Component {


    errorsWrapper = ({children}) => {
        return <div className="error"><span>{children && children.length > 1
            ? children[0]
            : children
        }</span></div>;
    }

    passwordsMatch = () => {
        if (this.props.cadastroForm.senha !== this.props.cadastroForm.confirma_senha) {
            setTimeout(() => {
                store.dispatch(
                    actions.setErrors("cadastroForm.confirma_senha", "As senhas não correspondem")
                )
            });
        }
    };

    handleSubmit = (user) => {
        UserAPI.register(user);
    };

    render() {
        if (!this.props.user || localStorage.getItem("user_id")) {
            return (
                <Redirect to="/"/>
            )
        }
        else {
            return (
                <div className="cadastro-page">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="white-box">
                                        <h3>Criar uma conta</h3>
                                        <Form model="cadastroForm"
                                              onSubmit={(val) => this.handleSubmit(val)}
                                            /*validators={{
                                             '': {passwordsMatch}
                                             }}*/
                                        >
                                            <div className="form-group">
                                                <Control.text
                                                    model="cadastroForm.nome"
                                                    component={FormInput}
                                                    className="form-control"
                                                    validators={{
                                                        required: (val) => !!val.length
                                                    }}
                                                    validateOn="change"
                                                    mapProps={{
                                                        invalid: ({fieldValue}) => !fieldValue.valid
                                                        && fieldValue.touched,
                                                        label: "Nome",
                                                        divClasses: "float-label",
                                                        labelClasses: "plc",
                                                        labelAfter: true
                                                    }}
                                                />
                                                <Errors
                                                    wrapper={this.errorsWrapper}
                                                    model="cadastroForm.nome"
                                                    messages={{
                                                        required: "Informe o seu nome",
                                                    }}
                                                    show="touched"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Control.text
                                                    model="cadastroForm.email"
                                                    component={FormInput}
                                                    className="form-control"
                                                    validators={{
                                                        required: (val) => !!val.length
                                                    }}
                                                    validateOn="change"
                                                    mapProps={{
                                                        invalid: ({fieldValue}) => !fieldValue.valid
                                                        && fieldValue.touched,
                                                        label: "E-mail",
                                                        divClasses: "float-label",
                                                        labelClasses: "plc",
                                                        labelAfter: true
                                                    }}
                                                />
                                                <Errors
                                                    wrapper={this.errorsWrapper}
                                                    model="cadastroForm.email"
                                                    messages={{
                                                        required: "Informe o seu e-mail",
                                                    }}
                                                    show="touched"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Control.text
                                                    model="cadastroForm.data_nascimento"
                                                    component={FormInput}
                                                    className="form-control"
                                                    validators={{
                                                        required: (val) => !!val.length
                                                    }}
                                                    validateOn="change"
                                                    mapProps={{
                                                        invalid: ({fieldValue}) => !fieldValue.valid
                                                        && fieldValue.touched,
                                                        label: "Data de Nascimento",
                                                        divClasses: "float-label",
                                                        labelClasses: "plc",
                                                        labelAfter: true
                                                    }}
                                                />
                                                <Errors
                                                    wrapper={this.errorsWrapper}
                                                    model="cadastroForm.data_nascimento"
                                                    messages={{
                                                        required: "Informe a sua data de nascimento",
                                                    }}
                                                    show="touched"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Control.text
                                                    model="cadastroForm.celular"
                                                    component={FormInput}
                                                    className="form-control"
                                                    validators={{
                                                        required: (val) => !!val.length
                                                    }}
                                                    validateOn="change"
                                                    mapProps={{
                                                        invalid: ({fieldValue}) => !fieldValue.valid
                                                        && fieldValue.touched,
                                                        label: "Celular",
                                                        divClasses: "float-label",
                                                        labelClasses: "plc",
                                                        labelAfter: true
                                                    }}
                                                />
                                                <Errors
                                                    wrapper={this.errorsWrapper}
                                                    model="cadastroForm.celular"
                                                    messages={{
                                                        required: "Informe o número do seu celular",
                                                    }}
                                                    show="touched"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Control.password
                                                    model="cadastroForm.senha"
                                                    component={FormInput}
                                                    className="form-control"
                                                    validators={{
                                                        required: (val) => !!val.length,
                                                        minLength: (val) => val.length >= 8
                                                    }}
                                                    validateOn="change"
                                                    mapProps={{
                                                        invalid: ({fieldValue}) => !fieldValue.valid
                                                        && fieldValue.touched,
                                                        label: "Senha",
                                                        divClasses: "float-label",
                                                        labelClasses: "plc",
                                                        labelAfter: true
                                                    }}
                                                />
                                                <Errors
                                                    wrapper={this.errorsWrapper}
                                                    model="cadastroForm.senha"
                                                    messages={{
                                                        required: "Informe uma senha com no mínimo 8 caracteres.",
                                                        minLength: "A senha deve ter 8 caracteres ou mais"
                                                    }}
                                                    show="touched"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Control.password
                                                    model="cadastroForm.confirma_senha"
                                                    component={FormInput}
                                                    className="form-control"
                                                    validators={{
                                                        required: (val) => !!val.length
                                                    }}
                                                    validateOn="change"
                                                    onBlur={this.passwordsMatch()}
                                                    mapProps={{
                                                        invalid: ({fieldValue}) => !fieldValue.valid
                                                        && fieldValue.touched,
                                                        label: "Confirme a senha",
                                                        divClasses: "float-label",
                                                        labelClasses: "plc",
                                                        labelAfter: true
                                                    }}
                                                />
                                                <Errors
                                                    wrapper={this.errorsWrapper}
                                                    model="cadastroForm.confirma_senha"
                                                    messages={{
                                                        required: "Informe a senha novamente"
                                                    }}
                                                    show="touched"
                                                />
                                            </div>

                                            <div className="btn-cadastro">
                                                <button
                                                    className="btn"
                                                    disabled={this.props.isCadastroBtnDisabled}>
                                                    Salvar
                                                </button>
                                            </div>
                                            <div className="faca-login">
                                                Já possui uma conta? <Link to="/login">Faça login!
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
        cadastroForm: store.cadastroForm,
        isCadastroBtnDisabled: store.cadastroLayoutState.isCadastroBtnDisabled
    };
};

export default connect(mapStateToProps)(Cadastro);