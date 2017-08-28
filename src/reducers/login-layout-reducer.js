import * as types from '../actions/action-types';

const initialState = {
    isLoginBtnDisabled: false,
    validateFormOn: 'submit'
};

const loginLayoutReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.IS_LOGIN_BTN_DISABLED:
            return Object.assign({}, state, {isLoginBtnDisabled: action.status});

        case types.VALIDATE_FORM_ON:
            return Object.assign({}, state, {validateFormOn: action.formAction});

        default:
            return state
    }

};

export default loginLayoutReducer;