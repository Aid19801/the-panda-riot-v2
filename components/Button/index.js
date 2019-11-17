import React from 'react'
import './styles.css';

function Button({ text, color, onClick, disabled }) {
    return (
        <div
            className={`button__button-container ${color}`}
            onClick={!disabled ? onClick : null}
            >
            <h4>{text}</h4>
        </div>
    )
}

export default Button;