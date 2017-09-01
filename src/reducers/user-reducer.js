import * as types from '../actions/action-types';

const initialState = {
    user: [],
    error: '',
    logout: false
};

const userReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {user: action.user, error: ''});

        case types.LOGIN_ERROR:
            return Object.assign({}, state, {error: action.error});

        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, {logout: action.completed, user: []});

        case types.GET_USER_SUCCESS:
            return Object.assign({}, state, {user: action.user});

        case types.REGISTER_SUCCESS:
            return Object.assign({}, state, {user: action.user, error: ''});

        case types.REGISTER_ERROR:
            return Object.assign({}, state, {error: action.error});

        case types.UPDATE_PROFILE_PICTURE_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    foto: action.foto
                }
            };

        default:
            return state
    }

};

export default userReducer;