import store from '../store';
import {
    getUserSuccess,
    loginSuccess,
    loginError,
    logoutSuccess,
    registerSuccess,
    registerError,
    updateProfilePictureSuccess
} from '../actions/user-actions';
import {appServerError} from '../actions/app-actions';
import {isLoginBtnDisabled} from '../actions/login-layout-actions';
import {isCadastroBtnDisabled} from '../actions/cadastro-layout-actions';
import {isShowingProfileUploadModal} from '../actions/profile-layout-actions';
import {actions} from 'react-redux-form';

const UserAPI = {
    login: function (email, senha) {
        store.dispatch(isLoginBtnDisabled(true));
        return fetch('http://localhost:8080/OpenPortfolioRest/rest/usuario/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            })
        }).then((res) => res.json())
            .then(response => {
                if (!isNaN(response.codigo)) {
                    store.dispatch(logoutSuccess(false));
                    store.dispatch(loginSuccess(response));
                    store.dispatch(actions.reset("loginForm"));
                }
                else {
                    store.dispatch(loginError(response.mensagem));
                }
                store.dispatch(isLoginBtnDisabled(false));
                return response;
            })
            .catch(error => {
                store.dispatch(loginError("Ocorreu um erro ao tentar logar, tente novamente mais tarde."));
                store.dispatch(isLoginBtnDisabled(false));
            });
    },

    register: function (user) {
        store.dispatch(isCadastroBtnDisabled(true));
        return fetch('http://localhost:8080/OpenPortfolioRest/rest/usuario/cadastrar', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "usuario": {
                    "nome": user.nome,
                    "sobrenome": user.sobrenome,
                    "email": user.email,
                    "data_nascimento": new Date(user.ano, user.mes, user.dia),
                    "sexo": user.sexo,
                    "fone": user.fone,
                    "senha": user.senha
                }
            })
        }).then((res) => res.json())
            .then(response => {
                console.log(response);
                if (!isNaN(response.codigo)) {
                    store.dispatch(logoutSuccess(false));
                    store.dispatch(registerSuccess(response));
                    store.dispatch(actions.reset("cadastroForm"));
                }
                else {
                    store.dispatch(registerError(response.mensagem));
                }
                store.dispatch(isCadastroBtnDisabled(false));
                return response;
            })
            .catch(error => {
                store.dispatch(registerError("Ocorreu um erro ao cadastrar, tente novamente mais tarde."));
                store.dispatch(isCadastroBtnDisabled(false));
            });
    },

    getUser: function (codigo) {
        return fetch('http://localhost:8080/OpenPortfolioRest/rest/usuario/get', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                codigo: codigo,
            })
        }).then((res) => res.json())
            .then(response => {
                store.dispatch(getUserSuccess(response));
                return response;
            })
            .catch(error => {
                store.dispatch(appServerError(true));
            });
    },

    updateProfile: function (codigo, foto) {
        return fetch('http://localhost:8080/OpenPortfolioRest/rest/usuario/atualizafoto', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                codigo: codigo,
                foto: foto
            })
        }).then((res) => res.json())
            .then(response => {
                store.dispatch(updateProfilePictureSuccess(codigo, foto));
                store.dispatch(isShowingProfileUploadModal(false))
                return response;
            })
            .catch(error => {
                store.dispatch(appServerError(true));
            });
    }
};

export default UserAPI
