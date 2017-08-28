import * as types from '../actions/action-types';

const initialState = {
    isCadastroBtnDisabled: false,
    validateFormOn: 'submit'
};

const cadastroLayoutReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.IS_CADASTRO_BTN_DISABLED:
            return Object.assign({}, state, {isCadastroBtnDisabled: action.status});

        case types.VALIDATE_FORM_ON:
            return Object.assign({}, state, {validateFormOn: action.formAction});

        default:
            return state;
    }

};

export default cadastroLayoutReducer;