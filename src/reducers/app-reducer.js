import * as types from '../actions/action-types';

const initialState = {
    serverError: false
};

const appReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.APP_SERVER_ERROR:
            return Object.assign({}, state, {serverError: action.serverError});

        default:
            return state;
    }

};

export default appReducer;