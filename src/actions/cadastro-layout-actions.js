import * as types from './action-types';

export function isCadastroBtnDisabled(status) {

    return {
        type: types.IS_CADASTRO_BTN_DISABLED,
        status
    };
}

export function validateFormOn(formAction) {

    return {
        type: types.VALIDATE_FORM_ON,
        formAction
    };
}