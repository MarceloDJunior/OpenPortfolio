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
import axios from 'axios';
import {ServerPath} from './serverConfig';

const UserAPI = {
    login: function (email, senha) {
        store.dispatch(isLoginBtnDisabled(true));
        return axios.post(ServerPath + '/usuario/login', {
            email: email,
            senha: senha
        }).then((res) => res.data).then(response => {
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
        }).catch(error => {
            store.dispatch(loginError("Ocorreu um erro ao tentar logar, tente novamente mais tarde."));
            store.dispatch(isLoginBtnDisabled(false));
        });
    },

    register: function (user) {
        store.dispatch(isCadastroBtnDisabled(true));
        return axios.post(ServerPath + '/usuario/cadastrar', {
            usuario: {
                nome: user.nome,
                sobrenome: user.sobrenome,
                email: user.email,
                data_nascimento: new Date(user.ano, user.mes, user.dia),
                sexo: user.sexo,
                fone: user.fone,
                senha: user.senha
            }
        }).then((res) => res.data).then(response => {
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
        }).catch(error => {
            store.dispatch(registerError("Ocorreu um erro ao cadastrar, tente novamente mais tarde."));
            store.dispatch(isCadastroBtnDisabled(false));
        });
    },

    getUser: function (codigo) {
        return axios.post(ServerPath + '/usuario/get', {
            codigo: codigo
        }).then((res) => res.data).then(response => {
            store.dispatch(getUserSuccess(response));
            return response;
        }).catch(error => {
            store.dispatch(appServerError(true));
        });
    },

    updateProfilePicture: function (codigo, foto) {
        return axios.post(ServerPath + '/usuario/atualizafoto', {
            codigo: codigo,
            foto: foto
        }).then((res) => res.data).then(response => {
            store.dispatch(updateProfilePictureSuccess(codigo, foto));
            store.dispatch(isShowingProfileUploadModal(false));
            return response;
        }).catch(error => {
            store.dispatch(appServerError(true));
        });
    },

    deleteProfilePicture: function (public_id) {
        return axios.post(ServerPath + '/usuario/removefoto', {
            public_id: public_id
        }).then((res) => res.data).then(response => {
            return response;
        }).catch(error => {
            store.dispatch(appServerError(true));
        });
    }
};

export default UserAPI
