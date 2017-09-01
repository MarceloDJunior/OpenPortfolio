import * as types from './action-types';

export function isShowingProfileUploadModal(status) {

    return {
        type: types.IS_SHOWING_PROFILE_UPLOAD_MODAL,
        status
    };
}
