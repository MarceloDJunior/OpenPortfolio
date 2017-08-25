import React from 'react';

const FormInput = (props) => {

    function showLabelClasses() {
        if (props.labelClasses) {
            return (
                props.labelClasses
            )
        }
    }

    function hasLabel() {
        if (props.label) {
            return (
                <label className={showLabelClasses()} htmlFor={props.name}>{props.label}</label>
            )
        }
    }

    function showDivClasses() {
        if (props.divClasses) {
            return (
                props.divClasses
            )
        }
        else{
            return '';
        }
    }

    return (
        <div className={`${showDivClasses()} ${props.invalid ? 'has-error' : ''}`}>
            {props.labelAfter ? '' : hasLabel()}
            <input id={props.name} {...props} />
            {props.labelAfter ? hasLabel() : ''}
        </div>
    )
}

export default FormInput;