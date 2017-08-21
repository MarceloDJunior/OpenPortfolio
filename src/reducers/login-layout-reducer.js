import * as types from '../actions/action-types';

const initialState = {
    status: false
};

const loginLayoutReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.IS_LOGIN_BTN_DISABLED:
            return Object.assign({}, state, {isLoginBtnDisabled: action.status});

        default:
            return state
    }

}

export default loginLayoutReducer;