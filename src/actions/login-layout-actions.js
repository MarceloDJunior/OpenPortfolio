import * as types from './action-types';

export function isLoginBtnDisabled(status) {

    return {
        type: types.IS_LOGIN_BTN_DISABLED,
        status
    };
}