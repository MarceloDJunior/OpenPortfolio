import * as types from '../actions/action-types';

const initialState = {
    status: false
};

const cadastroLayoutReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.IS_CADASTRO_BTN_DISABLED:
            return Object.assign({}, state, {isCadastroBtnDisabled: action.status});

        default:
            return state
    }

}

export default cadastroLayoutReducer;