import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

// Reducers
import userReducer from './user-reducer';
import loginLayoutReducer from './login-layout-reducer';
import cadastroLayoutReducer from './cadastro-layout-reducer';

// Form Reducers
import initialLoginForm from './login-form-reducer';
import initialCadastroForm from './cadastro-form-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    loginLayoutState: loginLayoutReducer,
    cadastroLayoutState: cadastroLayoutReducer,
    ...createForms({
        loginForm: initialLoginForm,
        cadastroForm: initialCadastroForm
    }),
});

export default reducers;