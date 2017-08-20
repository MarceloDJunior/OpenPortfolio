export const LOGIN = 'LOGIN';

export const login = ({email, senha}) => ({
    type: LOGIN,
    email,
    senha,
    completed: false
});