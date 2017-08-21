import store from '../store';
import {getUserSuccess, loginSuccess, loginError, logoutSuccess} from '../actions/user-actions';
import {isLoginBtnDisabled} from '../actions/login-layout-actions';

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
                else{
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
