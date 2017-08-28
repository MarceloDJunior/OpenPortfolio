import React from 'react';
import {Form, Control, Errors, actions} from 'react-redux-form';
import {Link} from 'react-router-dom';
import UserAPI from './../api/userApi';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import FormInput from '../components/FormInput';
import {validateFormOn} from '../actions/cadastro-layout-actions';
import store from '../store';
import {required, minLength} from './../util/validators';
import $ from 'jquery';

class Cadastro extends React.Component {

    errorsWrapper = ({children}) => {
        return <div className="error"><span>{children && children.length > 1
            ? children[0]
            : children
        }</span></div>;
    };

    passwordsMatch = () => {
        if (this.props.cadastroForm.senha !== this.props.cadastroForm.confirma_senha &&
            this.props.cadastroForm.confirma_senha.length > 0) {
            setTimeout(() => {
                store.dispatch(
                    actions.setErrors("cadastroForm.confirma_senha", "As senhas não correspondem")
                )
            });
            return false;
        }
        return true;
    };

    renderOptionsDia() {
        let options = [];
        for (let i = 1; i <= 31; i++) {
            let dia = i.toString();
            if(dia.length === 1){
                dia = "0" + dia;
            }
            options.push(<option key={i} value={i}>{dia}</option>);
        }
        return (options);
    };

    renderOptionsMes() {
        let options = [];
        let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        for (let i = 0; i < meses.length; i++) {
            options.push(<option key={i} value={i}>{meses[i]}</option>);
        }
        return (options);
    }

    renderOptionsAno(){
        let options = [];
        let ano = new Date().getFullYear();
        for (let i=ano;i>=1900;i--){
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return (options);
    }

    handleSubmit = (user) => {
        if(this.passwordsMatch()){
            UserAPI.register(user);
        }
    };

    handleSubmitError = () => {
        store.dispatch(validateFormOn("change"))
    };

    componentDidMount() {
        $(".float-label").find("input, textarea").each(function () {
            if ($(this).val()) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
        $(".float-label").find("input, textarea").each(function () {
            $(this).on("change", function () {
                if ($(this).val()) {
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                }
            });
        });
    }

    componentWillUnmount() {
        $(".float-label").find("input, textarea").off("change");
    }

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
                                              onSubmitFailed={this.handleSubmitError}
                                              onSubmit={(val) => this.handleSubmit(val)}
                                              validators={{
                                                  nome: {required},
                                                  sobrenome: {required},
                                                  email: {required},
                                                  fone: {required},
                                                  senha: {
                                                      required,
                                                      minLength: (val) => minLength(val, 8)
                                                  },
                                                  confirma_senha: {required}
                                              }}
                                              validateOn={this.props.validateFormOn}
                                        >
                                            <div className="form-group">
                                                <div className="grid_2">
                                                    <Control.text
                                                        model="cadastroForm.nome"
                                                        component={FormInput}
                                                        className="form-control"
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
                                                <div className="grid_2">
                                                    <Control.text
                                                        model="cadastroForm.sobrenome"
                                                        component={FormInput}
                                                        className="form-control"
                                                        mapProps={{
                                                            invalid: ({fieldValue}) => !fieldValue.valid
                                                            && fieldValue.touched,
                                                            label: "Sobrenome",
                                                            divClasses: "float-label",
                                                            labelClasses: "plc",
                                                            labelAfter: true
                                                        }}
                                                    />
                                                    <Errors
                                                        wrapper={this.errorsWrapper}
                                                        model="cadastroForm.sobrenome"
                                                        messages={{
                                                            required: "Informe o seu sobrenome",
                                                        }}
                                                        show="touched"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <Control.text
                                                    model="cadastroForm.email"
                                                    component={FormInput}
                                                    className="form-control"
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
                                                    model="cadastroForm.fone"
                                                    component={FormInput}
                                                    className="form-control"
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
                                                    model="cadastroForm.fone"
                                                    messages={{
                                                        required: "Informe o número do seu celular",
                                                    }}
                                                    show="touched"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Data de nascimento</label>
                                                <div className="clearfix"></div>
                                                <div className="grid_3">
                                                    <Control.select
                                                        model="cadastroForm.dia"
                                                        className="form-control">
                                                        <option>Dia</option>
                                                        {this.renderOptionsDia()}
                                                    </Control.select>
                                                </div>
                                                <div className="grid_3">
                                                    <Control.select
                                                        model="cadastroForm.mes"
                                                        className="form-control">
                                                        <option>Mês</option>
                                                        {this.renderOptionsMes()}
                                                    </Control.select>
                                                </div>
                                                <div className="grid_3">
                                                    <Control.select
                                                        model="cadastroForm.ano"
                                                        className="form-control">
                                                        <option>Ano</option>
                                                        {this.renderOptionsAno()}
                                                    </Control.select>
                                                </div>
                                            </div>
                                            <div className="toggle-switch">
                                                <Control.radio
                                                    model="cadastroForm.sexo"
                                                    value="F"
                                                    className="toggle-switch-input"
                                                    id="sexo_f"
                                                />
                                                <label htmlFor="sexo_f" className="toggle-switch-label">Feminino</label>
                                                <Control.radio
                                                    model="cadastroForm.sexo"
                                                    value="M"
                                                    className="toggle-switch-input"
                                                    id="sexo_m"
                                                />
                                                <label htmlFor="sexo_m" className="toggle-switch-label">Masculino</label>
                                            </div>

                                            <div className="form-group">
                                                <Control.password
                                                    model="cadastroForm.senha"
                                                    component={FormInput}
                                                    className="form-control"
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
        isCadastroBtnDisabled: store.cadastroLayoutState.isCadastroBtnDisabled,
        validateFormOn: store.cadastroLayoutState.validateFormOn
    };
};

export default connect(mapStateToProps)(Cadastro);