import store from '../store';
import {
    getUserSuccess,
    loginSuccess,
    loginError,
    logoutSuccess,
    registerSuccess,
    registerError
} from '../actions/user-actions';
import {isLoginBtnDisabled} from '../actions/login-layout-actions';
import {isCadastroBtnDisabled} from '../actions/cadastro-layout-actions';

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
                }
                else {
                    store.dispatch(isLoginBtnDisabled(false));
                    store.dispatch(loginError(response.mensagem));
                }
                return response;
            })
            .catch(error => {
                store.dispatch(loginError("Ocorreu um erro ao tentar logar, tente novamente mais tarde."));
                store.dispatch(isLoginBtnDisabled(false));
            });
    },

    register: function (usuario) {
        store.dispatch(isCadastroBtnDisabled(true));
        return fetch('http://localhost:8080/OpenPortfolioRest/rest/usuario/cadastrar', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({usuario})
        }).then((res) => res.json())
            .then(response => {
                console.log(response);
                if (!isNaN(response.codigo)) {
                    store.dispatch(logoutSuccess(false));
                    store.dispatch(registerSuccess(response));
                }
                else {
                    store.dispatch(isCadastroBtnDisabled(false));
                    store.dispatch(registerError(response.mensagem));
                }
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
            });
    }
}


export default UserAPI
