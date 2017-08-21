import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

// Reducers
import userReducer from './user-reducer';
import loginLayoutReducer from './login-layout-reducer';

// Form Reducers
import initialLoginForm from './login-form-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    loginLayoutState: loginLayoutReducer,
    ...createForms({
        loginForm: initialLoginForm,
    }),
});

export default reducers;