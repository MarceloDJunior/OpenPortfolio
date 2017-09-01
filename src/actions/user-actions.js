import * as types from './action-types';

export function loginSuccess(user) {

    let d = new Date();
    d.setTime(d.getTime() + (60 * 60 * 1000));
    localStorage.setItem("user_id", user.codigo);

    return {
        type: types.LOGIN_SUCCESS,
        user
    };
}

export function loginError(error) {

    return {
        type: types.LOGIN_ERROR,
        error
    };
}

export function logoutSuccess(completed) {

    return {
        type: types.LOGOUT_SUCCESS,
        completed
    };
}

export function registerSuccess(user) {

    let d = new Date();
    d.setTime(d.getTime() + (60 * 60 * 1000));
    localStorage.setItem("user_id", user.codigo);

    return {
        type: types.REGISTER_SUCCESS,
        user
    };
}

export function registerError(user) {

    return {
        type: types.REGISTER_ERROR,
        user
    };
}

export function getUserSuccess(user) {

    return {
        type: types.GET_USER_SUCCESS,
        user
    };
}

export function updateProfilePictureSuccess(codigo, foto) {

    return {
        type: types.UPDATE_PROFILE_PICTURE_SUCCESS,
        codigo,
        foto
    }
}