import React from 'react';
import {Errors} from 'react-redux-form';

const FormInput = (props) => {

    function hasLabel() {
        if(props.label){
            return (
                <label htmlFor={props.name}>{props.label}</label>
            )
        }
    }

    return (
        <div className={`form-group ${props.invalid ? 'has-error' : ''}`}>
            {hasLabel}
            <input id={props.name} {...props} />
            <Errors
                className="error"
                model={props.name}
                messages={{
                    required: props.requiredMessage,
                }}
                show="touched"
            />
        </div>
    )
}

export default FormInput;