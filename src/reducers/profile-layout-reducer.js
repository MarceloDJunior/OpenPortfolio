import * as types from '../actions/action-types';

const initialState = {
    isShowingProfileUploadModal: false,
};

const profileLayoutReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.IS_SHOWING_PROFILE_UPLOAD_MODAL:
            return Object.assign({}, state, {isShowingProfileUploadModal: action.status});

        default:
            return state;
    }

};

export default profileLayoutReducer;