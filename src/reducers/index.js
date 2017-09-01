import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

// Reducers
import appReducer from './app-reducer';
import userReducer from './user-reducer';
import loginLayoutReducer from './login-layout-reducer';
import cadastroLayoutReducer from './cadastro-layout-reducer';
import profileLayoutReducer from './profile-layout-reducer';

// Form Reducers
import initialLoginForm from './login-form-reducer';
import initialCadastroForm from './cadastro-form-reducer';

// Combine Reducers
var reducers = combineReducers({
    appState: appReducer,
    userState: userReducer,
    loginLayoutState: loginLayoutReducer,
    cadastroLayoutState: cadastroLayoutReducer,
    profileLayoutState: profileLayoutReducer,
    ...createForms({
        loginForm: initialLoginForm,
        cadastroForm: initialCadastroForm
    }),
});

export default reducers;