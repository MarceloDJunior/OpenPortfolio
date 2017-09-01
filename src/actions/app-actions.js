import * as types from './action-types';

export function appServerError(serverError) {

    return {
        type: types.APP_SERVER_ERROR,
        serverError
    };
}
