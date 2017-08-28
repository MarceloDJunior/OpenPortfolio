
export const required = val => val && !!val.length;

export const minLength = (val, length) => {
    return val.length >= length;
};