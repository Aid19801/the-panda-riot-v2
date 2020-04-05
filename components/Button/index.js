import React from 'react'
import './styles.css';

function Button({ text, color, onClick, disabled, type }) {

    const handleColor = () => {
        if (color === 'orange') {
            return 'btn btn-warning max-height-50';
        }
        if (color === 'grey') {
            return 'btn btn-secondary max-height-50'
        }
        if (color === 'red') {
            return 'btn btn-danger max-height-50'
        }
        if (color === 'lightgrey') {
            return 'btn btn-light max-height-50'
        }
        if (color === 'darkgrey') {
            return 'btn btn-dark max-height-50'
        }
        if (color === 'turqoise') {
            return 'btn btn-info max-height-50'
        }
        if (color === 'green') {
            return 'btn btn-success max-height-50'
        }
        return 'btn btn-warning max-height-50'
    }


    return (
        <button
            type={ type === 'submit' ? 'submit' : 'button'}
            className={ handleColor() }
            onClick={!disabled ? onClick : null}
            disabled={disabled}
        >{text}
        </button>
    )
}

export default Button;